"use client";

import { useState } from "react";

import {
  Building2,
  CheckCircle2,
  Clock3,
  Globe2,
  Mail,
  Phone,
} from "lucide-react";

import Container from "@/components/ui/container/Container";
import { Button } from "@/components/ui/buttons/button";

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
};

const initialFormData: FormData = {
  fullName: "",
  email: "",
  phone: "",
  company: "",
  subject: "",
  message: "",
};

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitted, setSubmitted] = useState(false);

  const updateField = (
    field: keyof FormData,
    value: string
  ) => {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setSubmitted(true);
  };

  const inputClassName =
    "h-12 w-full border-b border-slate-200 bg-transparent px-0 text-sm text-[#132838] outline-none transition placeholder:text-slate-400 focus:border-[#2f7d5c]";

  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[360px_1fr] lg:gap-20">
          {/* Contact Information */}

          <aside className="lg:border-r lg:border-slate-200 lg:pr-12">
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#2f7d5c]">
              GET IN TOUCH
            </span>

            <h2 className="mt-4 font-heading text-3xl font-black tracking-[-0.03em] text-[#132838]">
              Let's start a conversation.
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-500">
              Have a sourcing requirement or looking for an export partner?
              Reach out and our team will get back to you.
            </p>

            <div className="mt-10 space-y-7">
              {/* Email */}

              <a
                href="mailto:info@globalatlas.in"
                className="group flex gap-4"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#2f7d5c]/10 text-[#2f7d5c] transition group-hover:bg-[#2f7d5c] group-hover:text-white">
                  <Mail className="size-4" />
                </div>

                <div>
                  <span className="text-[10px] font-bold tracking-[0.18em] text-slate-400">
                    EMAIL
                  </span>

                  <p className="mt-1 text-sm font-semibold text-[#132838]">
                    info@globalatlas.in
                  </p>
                </div>
              </a>

              {/* Phone */}

              <a
                href="tel:+919022464841"
                className="group flex gap-4"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#2f7d5c]/10 text-[#2f7d5c] transition group-hover:bg-[#2f7d5c] group-hover:text-white">
                  <Phone className="size-4" />
                </div>

                <div>
                  <span className="text-[10px] font-bold tracking-[0.18em] text-slate-400">
                    PHONE
                  </span>

                  <p className="mt-1 text-sm font-semibold text-[#132838]">
                    +91 90224 64841
                  </p>
                </div>
              </a>

              {/* Address */}

              <div className="flex gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#2f7d5c]/10 text-[#2f7d5c]">
                  <Building2 className="size-4" />
                </div>

                <div>
                  <span className="text-[10px] font-bold tracking-[0.18em] text-slate-400">
                    OFFICE
                  </span>

                  <address className="mt-1 text-sm leading-6 not-italic text-slate-500">
                    D2 Tulip, Unit 808
                    <br />
                    Wadhwa Wise City, Panvel
                    <br />
                    Navi Mumbai, Maharashtra
                    <br />
                    India – 410206
                  </address>
                </div>
              </div>

              {/* Hours */}

              <div className="flex gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#2f7d5c]/10 text-[#2f7d5c]">
                  <Clock3 className="size-4" />
                </div>

                <div>
                  <span className="text-[10px] font-bold tracking-[0.18em] text-slate-400">
                    BUSINESS HOURS
                  </span>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Monday – Saturday
                    <br />
                    9:00 AM – 6:00 PM IST
                  </p>
                </div>
              </div>

              {/* Markets */}

              <div className="flex gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#2f7d5c]/10 text-[#2f7d5c]">
                  <Globe2 className="size-4" />
                </div>

                <div>
                  <span className="text-[10px] font-bold tracking-[0.18em] text-slate-400">
                    MARKETS
                  </span>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Global sourcing and export support
                  </p>
                </div>
              </div>
            </div>
          </aside>

          {/* Contact Form */}

          <div>
            {submitted ? (
              <div className="flex min-h-[400px] flex-col items-center justify-center border border-slate-200 px-8 text-center">
                <div className="flex size-14 items-center justify-center rounded-full bg-[#2f7d5c]/10 text-[#2f7d5c]">
                  <CheckCircle2 className="size-7" />
                </div>

                <h2 className="mt-6 font-heading text-3xl font-black text-[#132838]">
                  Message received.
                </h2>

                <p className="mt-3 max-w-md text-sm leading-7 text-slate-500">
                  Thank you for contacting GlobalAtlas Exim. Our team will
                  review your inquiry and get back to you soon.
                </p>

                <Button
                  className="mt-7 rounded-xl bg-[#2f7d5c] hover:bg-[#256b4e]"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData(initialFormData);
                  }}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <>
                <span className="text-[11px] font-bold tracking-[0.25em] text-[#2f7d5c]">
                  SEND AN INQUIRY
                </span>

                <h2 className="mt-4 font-heading text-3xl font-black tracking-[-0.03em] text-[#132838]">
                  Tell us what you need.
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  Share your requirements and we'll get back to you within
                  24–48 business hours.
                </p>

                <form
                  onSubmit={handleSubmit}
                  className="mt-10"
                >
                  <div className="grid gap-x-8 gap-y-7 md:grid-cols-2">
                    <div>
                      <label className="text-xs font-semibold text-[#132838]">
                        Full Name <span className="text-[#2f7d5c]">*</span>
                      </label>

                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(event) =>
                          updateField("fullName", event.target.value)
                        }
                        placeholder="Your name"
                        className={`mt-2 ${inputClassName}`}
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-[#132838]">
                        Business Email{" "}
                        <span className="text-[#2f7d5c]">*</span>
                      </label>

                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(event) =>
                          updateField("email", event.target.value)
                        }
                        placeholder="you@company.com"
                        className={`mt-2 ${inputClassName}`}
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-[#132838]">
                        Phone Number
                      </label>

                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(event) =>
                          updateField("phone", event.target.value)
                        }
                        placeholder="+91 ..."
                        className={`mt-2 ${inputClassName}`}
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-[#132838]">
                        Company Name
                      </label>

                      <input
                        type="text"
                        value={formData.company}
                        onChange={(event) =>
                          updateField("company", event.target.value)
                        }
                        placeholder="Your company"
                        className={`mt-2 ${inputClassName}`}
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="text-xs font-semibold text-[#132838]">
                        Subject <span className="text-[#2f7d5c]">*</span>
                      </label>

                      <input
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(event) =>
                          updateField("subject", event.target.value)
                        }
                        placeholder="How can we help?"
                        className={`mt-2 ${inputClassName}`}
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="text-xs font-semibold text-[#132838]">
                        Your Requirements{" "}
                        <span className="text-[#2f7d5c]">*</span>
                      </label>

                      <textarea
                        rows={5}
                        required
                        value={formData.message}
                        onChange={(event) =>
                          updateField("message", event.target.value)
                        }
                        placeholder="Tell us about your product, sourcing requirements or inquiry..."
                        className="mt-2 w-full resize-none border-b border-slate-200 bg-transparent px-0 py-3 text-sm leading-7 text-[#132838] outline-none transition placeholder:text-slate-400 focus:border-[#2f7d5c]"
                      />
                    </div>
                  </div>

                  <div className="mt-10 flex flex-wrap items-center gap-5">
                    <Button
                      type="submit"
                      size="lg"
                      className="h-12 rounded-xl bg-[#2f7d5c] px-6 text-white hover:bg-[#256b4e]"
                    >
                      Send Inquiry
                    </Button>

                    <p className="text-xs text-slate-400">
                      Fields marked with * are required.
                    </p>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}