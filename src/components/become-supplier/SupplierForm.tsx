"use client";

import { useRef, useState } from "react";

import {
  Building2,
  Briefcase,
  Package,
  BadgeCheck,
  Upload,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  X,
  FileText,
  Loader2,
  AlertCircle,
} from "lucide-react";

import Container from "@/components/ui/container/Container";
import SectionHeader from "@/components/sections/SectionHeader";
import { Button } from "@/components/ui/buttons/button";

const steps = [
  { title: "Company", icon: Building2 },
  { title: "Business", icon: Briefcase },
  { title: "Products", icon: Package },
  { title: "Certificates", icon: BadgeCheck },
  { title: "Documents", icon: Upload },
  { title: "Submit", icon: CheckCircle2 },
];

const certificationsList = [
  "ISO 9001",
  "CE",
  "FDA",
  "GMP",
  "HACCP",
  "FSSAI",
  "Organic",
  "Other",
];

type FormData = {
  companyName: string;
  contactPerson: string;
  businessEmail: string;
  phoneNumber: string;
  website: string;
  industry: string;
  yearsInBusiness: string;
  employees: string;
  factoryLocation: string;
  products: string;
  certifications: string[];
};

type FieldErrors = Partial<Record<keyof FormData, string>>;

const initialFormData: FormData = {
  companyName: "",
  contactPerson: "",
  businessEmail: "",
  phoneNumber: "",
  website: "",
  industry: "",
  yearsInBusiness: "",
  employees: "",
  factoryLocation: "",
  products: "",
  certifications: [],
};

export default function SupplierForm() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] =
    useState<FormData>(initialFormData);

  const [errors, setErrors] = useState<FieldErrors>({});
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const fileInputRef = useRef<HTMLInputElement>(null);

  const inputBase =
    "h-14 w-full rounded-xl border bg-white px-4 text-sm text-[#132838] outline-none transition placeholder:text-slate-400 focus:ring-4";

  const normalInput =
    `${inputBase} border-slate-200 focus:border-[#2f7d5c] focus:ring-[#2f7d5c]/10`;

  const errorInput =
    `${inputBase} border-red-400 focus:border-red-500 focus:ring-red-500/10`;

  const updateField = (
    field: keyof FormData,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [field]: undefined,
    }));

    setSubmitError("");
  };

  const toggleCertification = (certification: string) => {
    setFormData((prev) => ({
      ...prev,
      certifications: prev.certifications.includes(certification)
        ? prev.certifications.filter(
            (item) => item !== certification
          )
        : [...prev.certifications, certification],
    }));
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone: string) => {
    return /^[0-9+\-\s()]{7,20}$/.test(phone);
  };

  const validateWebsite = (website: string) => {
    if (!website.trim()) return true;

    try {
      const url = website.startsWith("http")
        ? website
        : `https://${website}`;

      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const validateCurrentStep = () => {
    const newErrors: FieldErrors = {};

    if (step === 0) {
      if (!formData.companyName.trim()) {
        newErrors.companyName = "Company name is required.";
      }

      if (!formData.contactPerson.trim()) {
        newErrors.contactPerson =
          "Contact person is required.";
      }

      if (!formData.businessEmail.trim()) {
        newErrors.businessEmail =
          "Business email is required.";
      } else if (!validateEmail(formData.businessEmail)) {
        newErrors.businessEmail =
          "Please enter a valid email address.";
      }

      if (!formData.phoneNumber.trim()) {
        newErrors.phoneNumber =
          "Phone number is required.";
      } else if (!validatePhone(formData.phoneNumber)) {
        newErrors.phoneNumber =
          "Please enter a valid phone number.";
      }

      if (!validateWebsite(formData.website)) {
        newErrors.website =
          "Please enter a valid website address.";
      }
    }

    if (step === 1) {
      if (!formData.industry.trim()) {
        newErrors.industry = "Industry is required.";
      }

      if (
        formData.yearsInBusiness &&
        Number(formData.yearsInBusiness) < 0
      ) {
        newErrors.yearsInBusiness =
          "Enter a valid number of years.";
      }

      if (
        formData.employees &&
        Number(formData.employees) < 1
      ) {
        newErrors.employees =
          "Number of employees must be at least 1.";
      }

      if (!formData.factoryLocation.trim()) {
        newErrors.factoryLocation =
          "Factory location is required.";
      }
    }

    if (step === 2) {
      if (formData.products.trim().length < 10) {
        newErrors.products =
          "Please provide more details about your products.";
      }
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const next = () => {
    if (!validateCurrentStep()) return;

    setStep((prev) =>
      Math.min(prev + 1, steps.length - 1)
    );
  };

  const previous = () => {
    setSubmitError("");
    setStep((prev) => Math.max(prev - 1, 0));
  };

  const handleFiles = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedFiles = Array.from(
      event.target.files || []
    );

    const validFiles = selectedFiles.filter(
      (file) => file.size <= 10 * 1024 * 1024
    );

    if (validFiles.length !== selectedFiles.length) {
      setSubmitError(
        "Some files were not added because the maximum file size is 10 MB."
      );
    }

    setFiles((prev) => {
      const existing = new Set(
        prev.map(
          (file) =>
            `${file.name}-${file.size}-${file.lastModified}`
        )
      );

      const newFiles = validFiles.filter(
        (file) =>
          !existing.has(
            `${file.name}-${file.size}-${file.lastModified}`
          )
      );

      return [...prev, ...newFiles];
    });

    if (event.target) {
      event.target.value = "";
    }
  };

  const removeFile = (index: number) => {
    setFiles((prev) =>
      prev.filter((_, fileIndex) => fileIndex !== index)
    );
  };

  const formatFileSize = (size: number) => {
    if (size < 1024 * 1024) {
      return `${Math.round(size / 1024)} KB`;
    }

    return `${(size / (1024 * 1024)).toFixed(1)} MB`;
  };

  const submitApplication = async () => {
    setSubmitError("");

    try {
      setLoading(true);

      const response = await fetch(
        "/api/supplier-applications",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            uploadedFiles: files.map((file) => ({
              name: file.name,
              size: file.size,
              type: file.type,
            })),
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message ||
            "Failed to submit supplier application."
        );
      }

      setSuccess(true);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setStep(0);
    setFormData(initialFormData);
    setErrors({});
    setFiles([]);
    setSubmitError("");
    setSuccess(false);
  };

  if (success) {
    return (
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#2f7d5c]/10 text-[#2f7d5c]">
              <CheckCircle2 className="size-8" />
            </div>

            <p className="mt-6 text-xs font-bold tracking-[0.22em] text-[#2f7d5c]">
              APPLICATION RECEIVED
            </p>

            <h1 className="mt-3 font-heading text-3xl font-black tracking-tight text-[#132838] sm:text-4xl">
              Thank you for applying.
            </h1>

            <p className="mx-auto mt-4 max-w-lg leading-7 text-slate-500">
              Your supplier application has been submitted
              successfully. Our team will review your information
              and contact you after verification.
            </p>

            <Button
              onClick={resetForm}
              className="mt-8 h-11 rounded-xl bg-[#2f7d5c] px-6 text-white hover:bg-[#256b4e]"
            >
              Submit Another Application
            </Button>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section
      id="supplier-form"
      className="bg-white py-20 lg:py-28"
    >
      <Container>
        <SectionHeader
          badge="Supplier Registration"
          title="Join Our Supplier Network"
          description="Complete the application below and tell us more about your company and manufacturing capabilities."
        />

        {/* Progress */}

        <div className="mx-auto mt-12 max-w-5xl">
          <div className="flex items-start justify-between gap-2 sm:gap-4">
            {steps.map((item, index) => {
              const Icon = item.icon;
              const active = index <= step;
              const current = index === step;

              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => {
                    if (index < step) {
                      setStep(index);
                      setSubmitError("");
                    }
                  }}
                  className={`flex min-w-0 flex-1 flex-col items-center ${
                    index < step
                      ? "cursor-pointer"
                      : "cursor-default"
                  }`}
                >
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all sm:h-12 sm:w-12 ${
                      current
                        ? "border-[#2f7d5c] bg-[#2f7d5c] text-white shadow-lg shadow-[#2f7d5c]/20"
                        : active
                          ? "border-[#2f7d5c] bg-[#2f7d5c]/10 text-[#2f7d5c]"
                          : "border-slate-200 bg-white text-slate-400"
                    }`}
                  >
                    {index < step ? (
                      <CheckCircle2 className="size-4 sm:size-5" />
                    ) : (
                      <Icon className="size-4 sm:size-5" />
                    )}
                  </div>

                  <span
                    className={`mt-2 hidden text-[10px] font-semibold sm:block ${
                      active
                        ? "text-[#132838]"
                        : "text-slate-400"
                    }`}
                  >
                    {item.title}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-5 h-1 overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full rounded-full bg-[#2f7d5c] transition-all duration-500"
              style={{
                width: `${
                  ((step + 1) / steps.length) * 100
                }%`,
              }}
            />
          </div>

          <p className="mt-3 text-center text-xs font-medium text-slate-400">
            Step {step + 1} of {steps.length} —{" "}
            {steps[step].title}
          </p>
        </div>

        {/* Form */}

        <div className="mx-auto mt-10 max-w-4xl rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_12px_50px_rgba(19,40,56,0.06)] sm:p-8 lg:p-10">
          {/* STEP 1 */}

          {step === 0 && (
            <div>
              <StepHeading
                step="01"
                title="Company Information"
                description="Tell us about your company and the primary person we should contact."
              />

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                <FormField error={errors.companyName}>
                  <input
                    value={formData.companyName}
                    onChange={(e) =>
                      updateField(
                        "companyName",
                        e.target.value
                      )
                    }
                    className={
                      errors.companyName
                        ? errorInput
                        : normalInput
                    }
                    placeholder="Company Name *"
                  />
                </FormField>

                <FormField error={errors.contactPerson}>
                  <input
                    value={formData.contactPerson}
                    onChange={(e) =>
                      updateField(
                        "contactPerson",
                        e.target.value
                      )
                    }
                    className={
                      errors.contactPerson
                        ? errorInput
                        : normalInput
                    }
                    placeholder="Contact Person *"
                  />
                </FormField>

                <FormField error={errors.businessEmail}>
                  <input
                    type="email"
                    value={formData.businessEmail}
                    onChange={(e) =>
                      updateField(
                        "businessEmail",
                        e.target.value
                      )
                    }
                    className={
                      errors.businessEmail
                        ? errorInput
                        : normalInput
                    }
                    placeholder="Business Email *"
                  />
                </FormField>

                <FormField error={errors.phoneNumber}>
                  <input
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={(e) =>
                      updateField(
                        "phoneNumber",
                        e.target.value
                      )
                    }
                    className={
                      errors.phoneNumber
                        ? errorInput
                        : normalInput
                    }
                    placeholder="Phone Number *"
                  />
                </FormField>

                <FormField
                  error={errors.website}
                  className="md:col-span-2"
                >
                  <input
                    value={formData.website}
                    onChange={(e) =>
                      updateField(
                        "website",
                        e.target.value
                      )
                    }
                    className={
                      errors.website
                        ? errorInput
                        : normalInput
                    }
                    placeholder="Website (optional)"
                  />
                </FormField>
              </div>
            </div>
          )}

          {/* STEP 2 */}

          {step === 1 && (
            <div>
              <StepHeading
                step="02"
                title="Business Information"
                description="Help us understand your business and manufacturing operations."
              />

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                <FormField error={errors.industry}>
                  <input
                    value={formData.industry}
                    onChange={(e) =>
                      updateField(
                        "industry",
                        e.target.value
                      )
                    }
                    className={
                      errors.industry
                        ? errorInput
                        : normalInput
                    }
                    placeholder="Industry *"
                  />
                </FormField>

                <FormField error={errors.yearsInBusiness}>
                  <input
                    type="number"
                    min="0"
                    value={formData.yearsInBusiness}
                    onChange={(e) =>
                      updateField(
                        "yearsInBusiness",
                        e.target.value
                      )
                    }
                    className={
                      errors.yearsInBusiness
                        ? errorInput
                        : normalInput
                    }
                    placeholder="Years in Business"
                  />
                </FormField>

                <FormField error={errors.employees}>
                  <input
                    type="number"
                    min="1"
                    value={formData.employees}
                    onChange={(e) =>
                      updateField(
                        "employees",
                        e.target.value
                      )
                    }
                    className={
                      errors.employees
                        ? errorInput
                        : normalInput
                    }
                    placeholder="Number of Employees"
                  />
                </FormField>

                <FormField error={errors.factoryLocation}>
                  <input
                    value={formData.factoryLocation}
                    onChange={(e) =>
                      updateField(
                        "factoryLocation",
                        e.target.value
                      )
                    }
                    className={
                      errors.factoryLocation
                        ? errorInput
                        : normalInput
                    }
                    placeholder="Factory Location *"
                  />
                </FormField>
              </div>
            </div>
          )}

          {/* STEP 3 */}

          {step === 2 && (
            <div>
              <StepHeading
                step="03"
                title="Your Products"
                description="Tell us what you manufacture or supply."
              />

              <div className="mt-8">
                <textarea
                  rows={9}
                  value={formData.products}
                  onChange={(e) =>
                    updateField(
                      "products",
                      e.target.value
                    )
                  }
                  className={`w-full resize-none rounded-xl border bg-white p-5 text-sm text-[#132838] outline-none transition placeholder:text-slate-400 focus:ring-4 ${
                    errors.products
                      ? "border-red-400 focus:border-red-500 focus:ring-red-500/10"
                      : "border-slate-200 focus:border-[#2f7d5c] focus:ring-[#2f7d5c]/10"
                  }`}
                  placeholder="Describe your products, product categories, manufacturing capabilities and export experience... *"
                />

                {errors.products && (
                  <p className="mt-2 text-xs text-red-500">
                    {errors.products}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* STEP 4 */}

          {step === 3 && (
            <div>
              <StepHeading
                step="04"
                title="Certifications"
                description="Select all certifications currently held by your company."
              />

              <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {certificationsList.map((item) => {
                  const selected =
                    formData.certifications.includes(item);

                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() =>
                        toggleCertification(item)
                      }
                      className={`flex items-center justify-between rounded-xl border px-4 py-4 text-left text-sm font-medium transition-all ${
                        selected
                          ? "border-[#2f7d5c] bg-[#2f7d5c]/5 text-[#132838]"
                          : "border-slate-200 bg-white text-slate-500 hover:border-[#2f7d5c]/40"
                      }`}
                    >
                      {item}

                      <span
                        className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                          selected
                            ? "border-[#2f7d5c] bg-[#2f7d5c] text-white"
                            : "border-slate-300"
                        }`}
                      >
                        {selected && (
                          <CheckCircle2 className="size-3.5" />
                        )}
                      </span>
                    </button>
                  );
                })}
              </div>

              <p className="mt-5 text-xs leading-6 text-slate-400">
                Select only the certifications your company
                currently holds. You can continue without selecting
                any if they do not apply.
              </p>
            </div>
          )}

          {/* STEP 5 */}

          {step === 4 && (
            <div>
              <StepHeading
                step="05"
                title="Supporting Documents"
                description="Upload documents that can help us review your application."
              />

              <input
                ref={fileInputRef}
                type="file"
                multiple
                className="hidden"
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.webp"
                onChange={handleFiles}
              />

              <button
                type="button"
                onClick={() =>
                  fileInputRef.current?.click()
                }
                className="mt-8 flex w-full flex-col items-center rounded-2xl border border-dashed border-[#2f7d5c]/30 bg-[#2f7d5c]/[0.02] px-6 py-12 text-center transition hover:border-[#2f7d5c]/60 hover:bg-[#2f7d5c]/[0.04]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2f7d5c]/10 text-[#2f7d5c]">
                  <Upload className="size-5" />
                </div>

                <h3 className="mt-4 font-semibold text-[#132838]">
                  Select supporting documents
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  PDF, Word documents or images up to 10 MB each.
                </p>

                <span className="mt-5 text-xs font-bold tracking-wide text-[#2f7d5c]">
                  CHOOSE FILES
                </span>
              </button>

              {files.length > 0 && (
                <div className="mt-5 space-y-3">
                  {files.map((file, index) => (
                    <div
                      key={`${file.name}-${file.lastModified}`}
                      className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-[#2f7d5c]">
                        <FileText className="size-4" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-[#132838]">
                          {file.name}
                        </p>

                        <p className="mt-0.5 text-xs text-slate-400">
                          {formatFileSize(file.size)}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          removeFile(index)
                        }
                        className="rounded-lg p-2 text-slate-400 transition hover:bg-red-50 hover:text-red-500"
                        aria-label={`Remove ${file.name}`}
                      >
                        <X className="size-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* STEP 6 */}

          {step === 5 && (
            <div>
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#2f7d5c]/10 text-[#2f7d5c]">
                  <CheckCircle2 className="size-8" />
                </div>

                <p className="mt-5 text-xs font-bold tracking-[0.2em] text-[#2f7d5c]">
                  STEP 06
                </p>

                <h2 className="mt-2 font-heading text-3xl font-black text-[#132838]">
                  Review your application
                </h2>

                <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-500">
                  Please check your information before submitting
                  your supplier application.
                </p>
              </div>

              <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
                <ReviewRow
                  label="Company"
                  value={formData.companyName}
                />
                <ReviewRow
                  label="Contact Person"
                  value={formData.contactPerson}
                />
                <ReviewRow
                  label="Business Email"
                  value={formData.businessEmail}
                />
                <ReviewRow
                  label="Phone"
                  value={formData.phoneNumber}
                />
                <ReviewRow
                  label="Website"
                  value={formData.website || "Not provided"}
                />
                <ReviewRow
                  label="Industry"
                  value={formData.industry}
                />
                <ReviewRow
                  label="Years in Business"
                  value={
                    formData.yearsInBusiness || "Not provided"
                  }
                />
                <ReviewRow
                  label="Employees"
                  value={
                    formData.employees || "Not provided"
                  }
                />
                <ReviewRow
                  label="Factory Location"
                  value={formData.factoryLocation}
                />
                <ReviewRow
                  label="Certifications"
                  value={
                    formData.certifications.length
                      ? formData.certifications.join(", ")
                      : "Not provided"
                  }
                />
                <ReviewRow
                  label="Documents"
                  value={
                    files.length
                      ? `${files.length} file${
                          files.length > 1 ? "s" : ""
                        } selected`
                      : "No documents selected"
                  }
                />
              </div>

              <div className="mt-5 rounded-xl bg-slate-50 p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Products & Capabilities
                </p>

                <p className="mt-3 whitespace-pre-line text-sm leading-7 text-slate-600">
                  {formData.products}
                </p>
              </div>
            </div>
          )}

          {/* Submit Error */}

          {submitError && (
            <div className="mt-8 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
              <AlertCircle className="mt-0.5 size-4 shrink-0" />
              <span>{submitError}</span>
            </div>
          )}

          {/* Navigation */}

          <div
            className={`mt-10 flex items-center ${
              step === 0
                ? "justify-end"
                : "justify-between"
            } border-t border-slate-100 pt-6`}
          >
            {step > 0 && (
              <Button
                type="button"
                variant="outline"
                onClick={previous}
                disabled={loading}
                className="h-11 rounded-xl border-slate-200 px-5 text-[#132838]"
              >
                <ChevronLeft className="mr-1 size-4" />
                Previous
              </Button>
            )}

            {step === steps.length - 1 ? (
              <Button
                type="button"
                onClick={submitApplication}
                disabled={loading}
                className="h-11 rounded-xl bg-[#2f7d5c] px-6 text-white hover:bg-[#256b4e]"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 size-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Application
                    <CheckCircle2 className="ml-2 size-4" />
                  </>
                )}
              </Button>
            ) : (
              <Button
                type="button"
                onClick={next}
                disabled={loading}
                className="h-11 rounded-xl bg-[#2f7d5c] px-6 text-white hover:bg-[#256b4e]"
              >
                Continue
                <ChevronRight className="ml-1 size-4" />
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

function StepHeading({
  step,
  title,
  description,
}: {
  step: string;
  title: string;
  description: string;
}) {
  return (
    <div>
      <p className="text-xs font-bold tracking-[0.2em] text-[#2f7d5c]">
        STEP {step}
      </p>

      <h2 className="mt-2 font-heading text-2xl font-black tracking-tight text-[#132838] sm:text-3xl">
        {title}
      </h2>

      <p className="mt-3 max-w-xl text-sm leading-7 text-slate-500">
        {description}
      </p>
    </div>
  );
}

function FormField({
  children,
  error,
  className = "",
}: {
  children: React.ReactNode;
  error?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      {children}

      {error && (
        <p className="mt-2 text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}

function ReviewRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="grid gap-1 border-b border-slate-100 px-5 py-4 last:border-0 sm:grid-cols-[180px_1fr] sm:gap-6">
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
        {label}
      </p>

      <p className="break-words text-sm font-medium text-[#132838]">
        {value}
      </p>
    </div>
  );
}