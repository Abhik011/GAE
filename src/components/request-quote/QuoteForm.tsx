"use client";

import { useState } from "react";

import {
  Building2,
  Package,
  Truck,
  ClipboardCheck,
  Upload,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Check,
  AlertCircle,
  Loader2,
} from "lucide-react";

import Container from "@/components/ui/container/Container";
import SectionHeader from "@/components/sections/SectionHeader";
import { Button } from "@/components/ui/buttons/button";

const steps = [
  {
    title: "Company",
    description: "Tell us who you are.",
    icon: Building2,
  },
  {
    title: "Products",
    description: "What are you looking to source?",
    icon: Package,
  },
  {
    title: "Shipping",
    description: "Where should your products be delivered?",
    icon: Truck,
  },
  {
    title: "Requirements",
    description: "Share your specific sourcing requirements.",
    icon: ClipboardCheck,
  },
  {
    title: "Documents",
    description: "Upload files if available.",
    icon: Upload,
  },
  {
    title: "Review",
    description: "Review and submit your request.",
    icon: CheckCircle2,
  },
];

const countries = [
  "India",
  "United Arab Emirates",
  "United States",
  "United Kingdom",
  "Saudi Arabia",
  "Oman",
  "Qatar",
  "Kuwait",
  "Bahrain",
  "Germany",
  "France",
  "Italy",
  "Spain",
  "Netherlands",
  "Canada",
  "Australia",
  "New Zealand",
  "Singapore",
  "Malaysia",
  "Thailand",
  "Japan",
  "South Korea",
  "South Africa",
  "Nigeria",
  "Kenya",
];

const countryLabels: Record<string, string> = {
  India: "🇮🇳 India",
  "United Arab Emirates": "🇦🇪 United Arab Emirates",
  "United States": "🇺🇸 United States",
  "United Kingdom": "🇬🇧 United Kingdom",
  "Saudi Arabia": "🇸🇦 Saudi Arabia",
  Oman: "🇴🇲 Oman",
  Qatar: "🇶🇦 Qatar",
  Kuwait: "🇰🇼 Kuwait",
  Bahrain: "🇧🇭 Bahrain",
  Germany: "🇩🇪 Germany",
  France: "🇫🇷 France",
  Italy: "🇮🇹 Italy",
  Spain: "🇪🇸 Spain",
  Netherlands: "🇳🇱 Netherlands",
  Canada: "🇨🇦 Canada",
  Australia: "🇦🇺 Australia",
  "New Zealand": "🇳🇿 New Zealand",
  Singapore: "🇸🇬 Singapore",
  Malaysia: "🇲🇾 Malaysia",
  Thailand: "🇹🇭 Thailand",
  Japan: "🇯🇵 Japan",
  "South Korea": "🇰🇷 South Korea",
  "South Africa": "🇿🇦 South Africa",
  Nigeria: "🇳🇬 Nigeria",
  Kenya: "🇰🇪 Kenya",
};

type FormData = {
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  country: string;
  website: string;

  productName: string;
  quantity: string;
  productCategory: string;
  targetPrice: string;
  productDescription: string;

  destinationCountry: string;
  destinationPort: string;
  incoterm: string;
  deliveryDate: string;

  additionalRequirements: string;
};

type Errors = Partial<Record<keyof FormData, string>>;

const initialFormData: FormData = {
  companyName: "",
  contactPerson: "",
  email: "",
  phone: "",
  country: "",
  website: "",

  productName: "",
  quantity: "",
  productCategory: "",
  targetPrice: "",
  productDescription: "",

  destinationCountry: "",
  destinationPort: "",
  incoterm: "",
  deliveryDate: "",

  additionalRequirements: "",
};

const inputBase =
  "mt-3 h-12 w-full border-b bg-transparent px-0 text-sm text-[#0c2030] outline-none transition-colors placeholder:text-slate-400";

const textareaBase =
  "mt-3 w-full resize-none border-b bg-transparent py-3 text-sm text-[#0c2030] outline-none transition-colors placeholder:text-slate-400";

export default function QuoteForm() {
  const [step, setStep] = useState(0);

  const [formData, setFormData] =
    useState<FormData>(initialFormData);

  const [errors, setErrors] = useState<Errors>({});

  const [oem, setOem] = useState(false);

  const [privateLabel, setPrivateLabel] = useState(false);

  const [files, setFiles] = useState<File[]>([]);

  const [submitted, setSubmitted] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [submitError, setSubmitError] = useState("");
  /*
   * ============================================
   * PROGRESS BASED ON ACTUAL INPUT COMPLETION
   * ============================================
   */

  const requiredFields = [
    /* Company */
    formData.companyName,
    formData.contactPerson,
    formData.email,
    formData.phone,
    formData.country,

    /* Products */
    formData.productName,
    formData.quantity,
    formData.productCategory,
    formData.productDescription,

    /* Shipping */
    formData.destinationCountry,
    formData.incoterm,
    formData.deliveryDate,
  ];

  const completedRequiredFields =
    requiredFields.filter(
      (value) => String(value).trim().length > 0
    ).length;

  const totalRequiredFields = requiredFields.length;

  /*
   * Requirements progress:
   * OEM, Private Label or additional text.
   */
  const requirementsStarted =
    oem ||
    privateLabel ||
    formData.additionalRequirements.trim().length > 0;

  /*
   * Documents progress:
   * At least one document uploaded.
   */
  const documentsCompleted = files.length > 0;

  /*
   * Progress weights:
   *
   * Required form fields = 75%
   * Requirements          = 15%
   * Documents             = 10%
   */

  const requiredProgress =
    totalRequiredFields > 0
      ? (completedRequiredFields / totalRequiredFields) * 75
      : 0;

  const requirementsProgress =
    requirementsStarted ? 15 : 0;

  const documentsProgress =
    documentsCompleted ? 10 : 0;

  const progress = Math.min(
    requiredProgress +
    requirementsProgress +
    documentsProgress,
    100
  );

  /*
   * ============================================
   * STEP PROGRESS
   * Used for step navigation indicators.
   * ============================================
   */

  const getStepProgress = (
    stepIndex: number
  ): number => {
    /* STEP 1 — COMPANY */

    if (stepIndex === 0) {
      const fields = [
        formData.companyName,
        formData.contactPerson,
        formData.email,
        formData.phone,
        formData.country,
      ];

      const completed = fields.filter(
        (value) => value.trim().length > 0
      ).length;

      return completed / fields.length;
    }

    /* STEP 2 — PRODUCTS */

    if (stepIndex === 1) {
      const fields = [
        formData.productName,
        formData.quantity,
        formData.productCategory,
        formData.productDescription,
      ];

      const completed = fields.filter(
        (value) => value.trim().length > 0
      ).length;

      return completed / fields.length;
    }

    /* STEP 3 — SHIPPING */

    if (stepIndex === 2) {
      const fields = [
        formData.destinationCountry,
        formData.incoterm,
        formData.deliveryDate,
      ];

      const completed = fields.filter(
        (value) => value.trim().length > 0
      ).length;

      return completed / fields.length;
    }

    /* STEP 4 — REQUIREMENTS */

    if (stepIndex === 3) {
      return requirementsStarted ? 1 : 0;
    }

    /* STEP 5 — DOCUMENTS */

    if (stepIndex === 4) {
      return documentsCompleted ? 1 : 0;
    }

    /*
     * STEP 6 — REVIEW
     *
     * Review becomes complete when all
     * required fields are filled.
     */

    if (stepIndex === 5) {
      return completedRequiredFields ===
        totalRequiredFields
        ? 1
        : 0;
    }

    return 0;
  };

  const updateField = (
    field: keyof FormData,
    value: string
  ) => {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));

    setErrors((current) => {
      if (!current[field]) return current;

      return {
        ...current,
        [field]: undefined,
      };
    });
  };

  /*
   * ============================================
   * VALIDATION
   * ============================================
   */

  const getStepErrors = (
    currentStep: number
  ): Errors => {
    const newErrors: Errors = {};

    /* STEP 1 — COMPANY */

    if (currentStep === 0) {
      if (!formData.companyName.trim()) {
        newErrors.companyName =
          "Company name is required.";
      }

      if (!formData.contactPerson.trim()) {
        newErrors.contactPerson =
          "Contact person is required.";
      }

      if (!formData.email.trim()) {
        newErrors.email =
          "Business email is required.";
      } else if (
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
          formData.email
        )
      ) {
        newErrors.email =
          "Enter a valid email address.";
      }

      if (!formData.phone.trim()) {
        newErrors.phone =
          "Phone number is required.";
      } else if (
        !/^[+]?[\d\s()-]{7,20}$/.test(
          formData.phone
        )
      ) {
        newErrors.phone =
          "Enter a valid phone number.";
      }

      if (!formData.country.trim()) {
        newErrors.country =
          "Country is required.";
      }

      if (
        formData.website.trim() &&
        !/^https?:\/\/.+/i.test(
          formData.website
        )
      ) {
        newErrors.website =
          "Enter a valid URL starting with https://";
      }
    }

    /* STEP 2 — PRODUCTS */

    if (currentStep === 1) {
      if (!formData.productName.trim()) {
        newErrors.productName =
          "Product name is required.";
      }

      if (!formData.quantity.trim()) {
        newErrors.quantity =
          "Quantity is required.";
      }

      if (!formData.productCategory.trim()) {
        newErrors.productCategory =
          "Product category is required.";
      }

      if (!formData.productDescription.trim()) {
        newErrors.productDescription =
          "Product description is required.";
      } else if (
        formData.productDescription.trim().length < 10
      ) {
        newErrors.productDescription =
          "Please provide a little more product detail.";
      }
    }

    /* STEP 3 — SHIPPING */

    if (currentStep === 2) {
      if (!formData.destinationCountry.trim()) {
        newErrors.destinationCountry =
          "Destination country is required.";
      }

      if (!formData.incoterm.trim()) {
        newErrors.incoterm =
          "Please select a preferred Incoterm.";
      }

      if (!formData.deliveryDate) {
        newErrors.deliveryDate =
          "Required delivery date is required.";
      }
    }

    return newErrors;
  };

  const validateStep = (
    currentStep: number
  ) => {
    const newErrors =
      getStepErrors(currentStep);

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const next = () => {
    /*
     * Requirements and Documents are optional.
     */

    if (step <= 2 && !validateStep(step)) {
      return;
    }

    if (step < steps.length - 1) {
      setStep((current) => current + 1);
      setErrors({});
    }
  };

  const previous = () => {
    if (step <= 0) return;

    setStep((current) => current - 1);
    setErrors({});
  };

  const goToStep = (index: number) => {
    if (index === step) return;

    /*
     * Always allow moving backwards.
     */

    if (index < step) {
      setStep(index);
      setErrors({});
      return;
    }

    /*
     * Validate required previous steps
     * before allowing forward navigation.
     */

    for (
      let currentStep = 0;
      currentStep < index && currentStep < 3;
      currentStep++
    ) {
      const stepErrors =
        getStepErrors(currentStep);

      if (Object.keys(stepErrors).length > 0) {
        setErrors(stepErrors);
        setStep(currentStep);
        return;
      }
    }

    setStep(index);
    setErrors({});
  };

  /*
   * ============================================
   * FILES
   * ============================================
   */

  const handleFiles = (
    selectedFiles: FileList | null
  ) => {
    if (!selectedFiles) return;

    const allowedTypes = [
      "application/pdf",
      "image/jpeg",
      "image/png",
      "image/webp",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    const maxSize = 10 * 1024 * 1024;

    const validFiles =
      Array.from(selectedFiles).filter(
        (file) =>
          allowedTypes.includes(file.type) &&
          file.size <= maxSize
      );

    setFiles((current) => [
      ...current,
      ...validFiles.filter(
        (newFile) =>
          !current.some(
            (existingFile) =>
              existingFile.name === newFile.name &&
              existingFile.size === newFile.size
          )
      ),
    ]);
  };

  const removeFile = (fileName: string) => {
    setFiles((current) =>
      current.filter(
        (file) => file.name !== fileName
      )
    );
  };

  /*
   * ============================================
   * SUBMIT
   * ============================================
   */
  const handleSubmit = async () => {
    if (isSubmitting) return;

    // Clear previous API error
    setSubmitError("");

    // ============================================
    // VALIDATE ALL REQUIRED STEPS
    // ============================================

    for (
      let currentStep = 0;
      currentStep < 3;
      currentStep++
    ) {
      const stepErrors =
        getStepErrors(currentStep);

      if (Object.keys(stepErrors).length > 0) {
        setErrors(stepErrors);
        setStep(currentStep);
        return;
      }
    }

    try {
      setIsSubmitting(true);

      // ============================================
      // SEND FORM TO NEXT.JS API
      // ============================================

      const response = await fetch(
        "/api/request-quote",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,

            // Optional additional form values
            oem,
            privateLabel,
          }),
        }
      );

      const result = await response.json();

      console.log(
        "Request Quote API Response:",
        result
      );

      // ============================================
      // HANDLE ERROR
      // ============================================

      if (!response.ok || !result.success) {
        console.error(
          "Request submission failed:",
          result
        );

        setSubmitError(
          result.message ||
          "Unable to submit your sourcing request. Please try again."
        );

        return;
      }

      // ============================================
      // SUCCESS
      // ============================================

      console.log(
        "Request submitted successfully:",
        result
      );

      setSubmitted(true);
    } catch (error) {
      console.error(
        "Request submission error:",
        error
      );

      setSubmitError(
        "Unable to connect to our server. Please check your internet connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const CurrentIcon = steps[step].icon;

  const FieldError = ({
    message,
  }: {
    message?: string;
  }) => {
    if (!message) return null;

    return (
      <p className="mt-2 flex items-center gap-1.5 text-xs text-red-500">
        <AlertCircle className="size-3.5" />
        {message}
      </p>
    );
  };

  const Required = () => (
    <span className="ml-1 text-[#2d9b68]">*</span>
  );

  const renderCountryOptions = () =>
    countries.map((country) => (
      <option
        key={country}
        value={country}
      >
        {countryLabels[country] ?? country}
      </option>
    ));

  /*
   * ============================================
   * SUCCESS
   * ============================================
   */

  if (submitted) {
    return (
      <section
        id="quote-form"
        className="bg-white py-20 lg:py-24"
      >
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-[#e9f7ef] text-[#2d9b68]">
              <CheckCircle2 className="size-8" />
            </div>

            <span className="mt-8 block text-[11px] font-bold tracking-[0.25em] text-[#2d9b68]">
              REQUEST SUBMITTED
            </span>

            <h2 className="mt-4 text-3xl font-black tracking-[-0.03em] text-[#0c2030] sm:text-4xl">
              Thank you for your inquiry.
            </h2>

            <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-slate-500">
              Our sourcing team will review your
              requirements and contact you regarding the
              next steps.
            </p>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section
      id="quote-form"
      className="bg-white py-20 lg:py-24"
    >
      <Container>
        <SectionHeader
          badge="REQUEST A QUOTE"
          title="Tell us what you need."
          description="Share your requirements in a few simple steps."
        />

        <div className="mx-auto mt-14 max-w-4xl">
          {/* Progress Header */}

          <div className="flex items-end justify-between gap-6">
            <div>
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#2d9b68]">
                STEP {String(step + 1).padStart(2, "0")} OF{" "}
                {String(steps.length).padStart(2, "0")}
              </span>

              <h3 className="mt-2 text-xl font-bold text-[#0c2030]">
                {steps[step].title}
              </h3>
            </div>

            <span className="text-sm font-semibold text-slate-400">
              {Math.round(progress)}%
            </span>
          </div>

          {/* Progress Bar */}

          <div className="mt-5 h-[3px] overflow-hidden bg-slate-100">
            <div
              className="h-full bg-[#2d9b68] transition-all duration-500 ease-out"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>

          {/* Step Navigation */}

          <div className="mt-6 hidden justify-between md:flex">
            {steps.map((item, index) => {
              const stepProgress =
                getStepProgress(index);

              const completed =
                stepProgress === 1;

              const started =
                stepProgress > 0 &&
                stepProgress < 1;

              const active = index === step;

              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => goToStep(index)}
                  className="group flex flex-col items-center"
                >
                  <span
                    className={`
                      flex h-8 w-8 items-center justify-center rounded-full
                      text-[10px] font-bold transition-all duration-300
                      ${completed
                        ? "bg-[#2d9b68] text-white"
                        : active
                          ? "bg-[#0c2030] text-white"
                          : started
                            ? "border border-[#2d9b68] bg-[#e9f7ef] text-[#2d9b68]"
                            : "bg-slate-100 text-slate-400 group-hover:bg-slate-200"
                      }
                    `}
                  >
                    {completed ? (
                      <Check className="size-3.5" />
                    ) : (
                      String(index + 1).padStart(2, "0")
                    )}
                  </span>

                  <span
                    className={`
                      mt-2 text-[10px] font-medium transition-colors
                      ${completed
                        ? "text-[#2d9b68]"
                        : active
                          ? "text-[#0c2030]"
                          : started
                            ? "text-[#2d9b68]"
                            : "text-slate-400"
                      }
                    `}
                  >
                    {item.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Form */}

          <div className="mt-12 min-h-[430px] border-t border-slate-200 pt-10">
            {/* Step Header */}

            <div className="flex items-start gap-4">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#0c2030] text-white">
                <CurrentIcon className="size-5" />
              </div>

              <div>
                <h2 className="text-2xl font-bold tracking-[-0.02em] text-[#0c2030]">
                  {steps[step].title}
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  {steps[step].description}
                </p>
              </div>
            </div>

            {/* STEP 1 — COMPANY */}

            {step === 0 && (
              <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2">
                <div>
                  <label className="text-xs font-semibold text-[#0c2030]">
                    Company Name
                    <Required />
                  </label>

                  <input
                    value={formData.companyName}
                    onChange={(event) =>
                      updateField(
                        "companyName",
                        event.target.value
                      )
                    }
                    className={`${inputBase} ${errors.companyName
                      ? "border-red-400 focus:border-red-500"
                      : "border-slate-200 focus:border-[#2d9b68]"
                      }`}
                    placeholder="Your company name"
                  />

                  <FieldError
                    message={errors.companyName}
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#0c2030]">
                    Contact Person
                    <Required />
                  </label>

                  <input
                    value={formData.contactPerson}
                    onChange={(event) =>
                      updateField(
                        "contactPerson",
                        event.target.value
                      )
                    }
                    className={`${inputBase} ${errors.contactPerson
                      ? "border-red-400"
                      : "border-slate-200 focus:border-[#2d9b68]"
                      }`}
                    placeholder="Full name"
                  />

                  <FieldError
                    message={errors.contactPerson}
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#0c2030]">
                    Business Email
                    <Required />
                  </label>

                  <input
                    type="email"
                    value={formData.email}
                    onChange={(event) =>
                      updateField(
                        "email",
                        event.target.value
                      )
                    }
                    className={`${inputBase} ${errors.email
                      ? "border-red-400"
                      : "border-slate-200 focus:border-[#2d9b68]"
                      }`}
                    placeholder="you@company.com"
                  />

                  <FieldError
                    message={errors.email}
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#0c2030]">
                    Phone Number
                    <Required />
                  </label>

                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(event) =>
                      updateField(
                        "phone",
                        event.target.value
                      )
                    }
                    className={`${inputBase} ${errors.phone
                      ? "border-red-400"
                      : "border-slate-200 focus:border-[#2d9b68]"
                      }`}
                    placeholder="+91 9876543210"
                  />

                  <FieldError
                    message={errors.phone}
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#0c2030]">
                    Country
                    <Required />
                  </label>

                  <select
                    value={formData.country}
                    onChange={(event) =>
                      updateField(
                        "country",
                        event.target.value
                      )
                    }
                    className={`${inputBase} ${errors.country
                      ? "border-red-400"
                      : "border-slate-200 focus:border-[#2d9b68]"
                      }`}
                  >
                    <option value="">
                      🌍 Select your country
                    </option>

                    {renderCountryOptions()}
                  </select>

                  <FieldError
                    message={errors.country}
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#0c2030]">
                    Website
                    <span className="ml-1 font-normal text-slate-400">
                      Optional
                    </span>
                  </label>

                  <input
                    type="url"
                    value={formData.website}
                    onChange={(event) =>
                      updateField(
                        "website",
                        event.target.value
                      )
                    }
                    className={`${inputBase} ${errors.website
                      ? "border-red-400"
                      : "border-slate-200 focus:border-[#2d9b68]"
                      }`}
                    placeholder="https://yourcompany.com"
                  />

                  <FieldError
                    message={errors.website}
                  />
                </div>
              </div>
            )}

            {/* STEP 2 — PRODUCTS */}

            {step === 1 && (
              <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2">
                <div>
                  <label className="text-xs font-semibold text-[#0c2030]">
                    Product Name
                    <Required />
                  </label>

                  <input
                    value={formData.productName}
                    onChange={(event) =>
                      updateField(
                        "productName",
                        event.target.value
                      )
                    }
                    className={`${inputBase} ${errors.productName
                      ? "border-red-400"
                      : "border-slate-200 focus:border-[#2d9b68]"
                      }`}
                    placeholder="What product do you need?"
                  />

                  <FieldError
                    message={errors.productName}
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#0c2030]">
                    Quantity
                    <Required />
                  </label>

                  <input
                    value={formData.quantity}
                    onChange={(event) =>
                      updateField(
                        "quantity",
                        event.target.value
                      )
                    }
                    className={`${inputBase} ${errors.quantity
                      ? "border-red-400"
                      : "border-slate-200 focus:border-[#2d9b68]"
                      }`}
                    placeholder="e.g. 10,000 units"
                  />

                  <FieldError
                    message={errors.quantity}
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#0c2030]">
                    Product Category
                    <Required />
                  </label>

                  <input
                    value={formData.productCategory}
                    onChange={(event) =>
                      updateField(
                        "productCategory",
                        event.target.value
                      )
                    }
                    className={`${inputBase} ${errors.productCategory
                      ? "border-red-400"
                      : "border-slate-200 focus:border-[#2d9b68]"
                      }`}
                    placeholder="Product category"
                  />

                  <FieldError
                    message={errors.productCategory}
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#0c2030]">
                    Target Price
                    <span className="ml-1 font-normal text-slate-400">
                      Optional
                    </span>
                  </label>

                  <input
                    value={formData.targetPrice}
                    onChange={(event) =>
                      updateField(
                        "targetPrice",
                        event.target.value
                      )
                    }
                    className={`${inputBase} border-slate-200 focus:border-[#2d9b68]`}
                    placeholder="If available"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="text-xs font-semibold text-[#0c2030]">
                    Product Description
                    <Required />
                  </label>

                  <textarea
                    rows={4}
                    value={formData.productDescription}
                    onChange={(event) =>
                      updateField(
                        "productDescription",
                        event.target.value
                      )
                    }
                    className={`${textareaBase} ${errors.productDescription
                      ? "border-red-400"
                      : "border-slate-200 focus:border-[#2d9b68]"
                      }`}
                    placeholder="Share specifications, materials, dimensions or other important details..."
                  />

                  <FieldError
                    message={errors.productDescription}
                  />
                </div>
              </div>
            )}

            {/* STEP 3 — SHIPPING */}

            {step === 2 && (
              <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2">
                <div>
                  <label className="text-xs font-semibold text-[#0c2030]">
                    Destination Country
                    <Required />
                  </label>

                  <select
                    value={formData.destinationCountry}
                    onChange={(event) =>
                      updateField(
                        "destinationCountry",
                        event.target.value
                      )
                    }
                    className={`${inputBase} ${errors.destinationCountry
                      ? "border-red-400"
                      : "border-slate-200 focus:border-[#2d9b68]"
                      }`}
                  >
                    <option value="">
                      🌍 Select destination country
                    </option>

                    {renderCountryOptions()}
                  </select>

                  <FieldError
                    message={errors.destinationCountry}
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#0c2030]">
                    Destination Port
                    <span className="ml-1 font-normal text-slate-400">
                      Optional
                    </span>
                  </label>

                  <input
                    value={formData.destinationPort}
                    onChange={(event) =>
                      updateField(
                        "destinationPort",
                        event.target.value
                      )
                    }
                    className={`${inputBase} border-slate-200 focus:border-[#2d9b68]`}
                    placeholder="Port or city"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#0c2030]">
                    Preferred Incoterm
                    <Required />
                  </label>

                  <select
                    value={formData.incoterm}
                    onChange={(event) =>
                      updateField(
                        "incoterm",
                        event.target.value
                      )
                    }
                    className={`${inputBase} ${errors.incoterm
                      ? "border-red-400"
                      : "border-slate-200 focus:border-[#2d9b68]"
                      }`}
                  >
                    <option value="">
                      Select Incoterm
                    </option>
                    <option value="EXW">EXW</option>
                    <option value="FOB">FOB</option>
                    <option value="CIF">CIF</option>
                    <option value="CFR">CFR</option>
                    <option value="DDP">DDP</option>
                  </select>

                  <FieldError
                    message={errors.incoterm}
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#0c2030]">
                    Required Delivery Date
                    <Required />
                  </label>

                  <input
                    type="date"
                    value={formData.deliveryDate}
                    onChange={(event) =>
                      updateField(
                        "deliveryDate",
                        event.target.value
                      )
                    }
                    className={`${inputBase} ${errors.deliveryDate
                      ? "border-red-400"
                      : "border-slate-200 focus:border-[#2d9b68]"
                      }`}
                  />

                  <FieldError
                    message={errors.deliveryDate}
                  />
                </div>
              </div>
            )}

            {/* STEP 4 — REQUIREMENTS */}

            {step === 3 && (
              <div className="mt-10">
                <div className="grid gap-4 md:grid-cols-2">
                  <button
                    type="button"
                    onClick={() =>
                      setOem((current) => !current)
                    }
                    className={`
                      flex items-center justify-between border p-5 text-left transition-all
                      ${oem
                        ? "border-[#2d9b68] bg-[#e9f7ef]"
                        : "border-slate-200 hover:border-[#2d9b68]/50"
                      }
                    `}
                  >
                    <div>
                      <h3 className="text-sm font-semibold text-[#0c2030]">
                        OEM Manufacturing
                      </h3>

                      <p className="mt-1 text-xs text-slate-500">
                        Manufacture to your specifications.
                      </p>
                    </div>

                    <span
                      className={`
                        flex size-5 items-center justify-center border
                        ${oem
                          ? "border-[#2d9b68] bg-[#2d9b68] text-white"
                          : "border-slate-300"
                        }
                      `}
                    >
                      {oem && (
                        <Check className="size-3" />
                      )}
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      setPrivateLabel(
                        (current) => !current
                      )
                    }
                    className={`
                      flex items-center justify-between border p-5 text-left transition-all
                      ${privateLabel
                        ? "border-[#2d9b68] bg-[#e9f7ef]"
                        : "border-slate-200 hover:border-[#2d9b68]/50"
                      }
                    `}
                  >
                    <div>
                      <h3 className="text-sm font-semibold text-[#0c2030]">
                        Private Label
                      </h3>

                      <p className="mt-1 text-xs text-slate-500">
                        Add your own brand and packaging.
                      </p>
                    </div>

                    <span
                      className={`
                        flex size-5 items-center justify-center border
                        ${privateLabel
                          ? "border-[#2d9b68] bg-[#2d9b68] text-white"
                          : "border-slate-300"
                        }
                      `}
                    >
                      {privateLabel && (
                        <Check className="size-3" />
                      )}
                    </span>
                  </button>
                </div>

                <div className="mt-10">
                  <label className="text-xs font-semibold text-[#0c2030]">
                    Additional Requirements
                    <span className="ml-1 font-normal text-slate-400">
                      Optional
                    </span>
                  </label>

                  <textarea
                    rows={6}
                    value={formData.additionalRequirements}
                    onChange={(event) =>
                      updateField(
                        "additionalRequirements",
                        event.target.value
                      )
                    }
                    className={`${textareaBase} border-slate-200 focus:border-[#2d9b68]`}
                    placeholder="Packaging, certifications, quality requirements or any other details..."
                  />
                </div>
              </div>
            )}

            {/* STEP 5 — DOCUMENTS */}

            {step === 4 && (
              <div className="mt-10">
                <label className="flex cursor-pointer flex-col items-center justify-center border border-dashed border-slate-300 px-6 py-16 text-center transition-all hover:border-[#2d9b68] hover:bg-[#e9f7ef]/40">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-[#e9f7ef] text-[#2d9b68]">
                    <Upload className="size-5" />
                  </div>

                  <h3 className="mt-5 text-base font-semibold text-[#0c2030]">
                    Drop your files here
                  </h3>

                  <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
                    Product images, specifications,
                    drawings, catalogues or reference
                    documents.
                  </p>

                  <span className="mt-5 text-sm font-semibold text-[#2d9b68]">
                    Browse files
                  </span>

                  <input
                    type="file"
                    multiple
                    accept=".pdf,.jpg,.jpeg,.png,.webp,.doc,.docx"
                    className="hidden"
                    onChange={(event) =>
                      handleFiles(event.target.files)
                    }
                  />
                </label>

                {files.length > 0 && (
                  <div className="mt-5 space-y-2">
                    {files.map((file) => (
                      <div
                        key={`${file.name}-${file.size}`}
                        className="flex items-center justify-between border-b border-slate-100 py-3"
                      >
                        <span className="truncate text-sm text-[#0c2030]">
                          {file.name}
                        </span>

                        <button
                          type="button"
                          onClick={() =>
                            removeFile(file.name)
                          }
                          className="text-xs font-medium text-red-500 hover:text-red-700"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                <p className="mt-4 text-center text-xs text-slate-400">
                  Optional. Maximum file size: 10 MB per
                  file.
                </p>
              </div>
            )}

            {/* STEP 6 — REVIEW */}

            {step === 5 && (
              <div className="mt-10">
                <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-[#e9f7ef] text-[#2d9b68]">
                  <CheckCircle2 className="size-8" />
                </div>

                <div className="mt-6 text-center">
                  <h2 className="text-3xl font-bold text-[#0c2030]">
                    Review your request
                  </h2>

                  <p className="mx-auto mt-3 max-w-lg text-sm leading-7 text-slate-500">
                    Please check your details before
                    submitting.
                  </p>
                </div>

                <div className="mt-10 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 md:grid-cols-2">
                  {/* Company */}

                  <div className="bg-white p-5">
                    <span className="text-[10px] font-bold tracking-[0.18em] text-[#2d9b68]">
                      COMPANY
                    </span>

                    <p className="mt-3 font-semibold text-[#0c2030]">
                      {formData.companyName}
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      {formData.contactPerson}
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      {formData.email}
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      {formData.phone}
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      {formData.country}
                    </p>
                  </div>

                  {/* Product */}

                  <div className="bg-white p-5">
                    <span className="text-[10px] font-bold tracking-[0.18em] text-[#2d9b68]">
                      PRODUCT
                    </span>

                    <p className="mt-3 font-semibold text-[#0c2030]">
                      {formData.productName}
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      {formData.quantity} ·{" "}
                      {formData.productCategory}
                    </p>

                    {formData.targetPrice && (
                      <p className="mt-1 text-sm text-slate-500">
                        Target: {formData.targetPrice}
                      </p>
                    )}
                  </div>

                  {/* Delivery */}

                  <div className="bg-white p-5">
                    <span className="text-[10px] font-bold tracking-[0.18em] text-[#2d9b68]">
                      DELIVERY
                    </span>

                    <p className="mt-3 font-semibold text-[#0c2030]">
                      {formData.destinationCountry}
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      {formData.incoterm} ·{" "}
                      {formData.deliveryDate}
                    </p>

                    {formData.destinationPort && (
                      <p className="mt-1 text-sm text-slate-500">
                        {formData.destinationPort}
                      </p>
                    )}
                  </div>

                  {/* Requirements */}

                  <div className="bg-white p-5">
                    <span className="text-[10px] font-bold tracking-[0.18em] text-[#2d9b68]">
                      REQUIREMENTS
                    </span>

                    <p className="mt-3 text-sm text-slate-600">
                      {oem || privateLabel
                        ? [
                          oem && "OEM",
                          privateLabel &&
                          "Private Label",
                        ]
                          .filter(Boolean)
                          .join(" · ")
                        : "Standard sourcing requirements"}
                    </p>

                    {formData.additionalRequirements && (
                      <p className="mt-2 text-sm text-slate-500">
                        {formData.additionalRequirements}
                      </p>
                    )}

                    <p className="mt-2 text-sm text-slate-500">
                      {files.length > 0
                        ? `${files.length} document${files.length > 1
                          ? "s"
                          : ""
                        } attached`
                        : "No documents attached"}
                    </p>
                  </div>
                </div>

                <p className="mt-8 text-center text-xs leading-6 text-slate-400">
                  By submitting this request, you agree
                  that GlobalAtlas Exim may contact you
                  regarding your sourcing inquiry.
                </p>
              </div>
            )}
          </div>
          {submitError && (
            <div className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
              {submitError}
            </div>
          )}
          {/* Bottom Navigation */}

         <div className="mt-10 flex items-center justify-between border-t border-slate-200 pt-6">
  <Button
    type="button"
    variant="outline"
    onClick={previous}
    disabled={step === 0 || isSubmitting}
    className="h-11 rounded-xl border-slate-300 bg-white px-5 text-[#0c2030] hover:border-[#0c2030] hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
  >
    <ChevronLeft className="mr-1 size-4" />
    Back
  </Button>

  {step === steps.length - 1 ? (
    <Button
      type="button"
      onClick={handleSubmit}
      disabled={isSubmitting}
      className="h-11 min-w-[170px] rounded-xl bg-[#0c2030] px-6 text-white hover:bg-[#18364a] disabled:cursor-not-allowed disabled:opacity-70"
    >
      {isSubmitting ? (
        <>
          <Loader2 className="mr-2 size-4 animate-spin" />
          Submitting...
        </>
      ) : (
        <>
          Submit Request
          <Check className="ml-2 size-4" />
        </>
      )}
    </Button>
  ) : (
    <Button
      type="button"
      onClick={next}
      disabled={isSubmitting}
      className="h-11 rounded-xl bg-[#0c2030] px-6 text-white hover:bg-[#18364a] disabled:cursor-not-allowed disabled:opacity-70"
    >
      Continue
      <ChevronRight className="ml-1 size-4" />
    </Button>
  )}
</div>

          <p className="mt-4 text-center text-xs text-slate-400">
            Fields marked{" "}
            <span className="text-[#2d9b68]">*</span>{" "}
            are required.
          </p>
        </div>
      </Container>
    </section>
  );
}