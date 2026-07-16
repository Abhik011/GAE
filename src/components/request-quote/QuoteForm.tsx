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
} from "lucide-react";

import Container from "@/components/ui/container/Container";
import SectionHeader from "@/components/sections/SectionHeader";
import { Button } from "@/components/ui/buttons/button";

const steps = [
  {
    title: "Company",
    icon: Building2,
  },
  {
    title: "Products",
    icon: Package,
  },
  {
    title: "Shipping",
    icon: Truck,
  },
  {
    title: "Requirements",
    icon: ClipboardCheck,
  },
  {
    title: "Documents",
    icon: Upload,
  },
  {
    title: "Submit",
    icon: CheckCircle2,
  },
];

export default function QuoteForm() {
  const [step, setStep] = useState(0);

  const next = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    }
  };

  const previous = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  return (
    <section
      id="quote-form"
      className="bg-slate-50 py-28"
    >
      <Container>

        <SectionHeader
          badge="Request Quote"
          title="Tell Us What You Need"
          description="Complete the form below and our sourcing experts will prepare a customized quotation."
        />

        {/* Progress */}

        <div className="mx-auto mt-16 max-w-6xl">

          <div className="grid grid-cols-6 gap-4">

            {steps.map((item, index) => {
              const Icon = item.icon;

              const active = index <= step;

              return (
                <div
                  key={item.title}
                  className="text-center"
                >
                  <div
                    className={`
                      mx-auto flex h-14 w-14 items-center justify-center rounded-2xl transition-all
                      ${
                        active
                          ? "bg-primary text-white"
                          : "bg-slate-200 text-slate-400"
                      }
                    `}
                  >
                    <Icon className="size-6" />
                  </div>

                  <p
                    className={`
                      mt-3 text-sm font-medium
                      ${
                        active
                          ? "text-primary"
                          : "text-slate-400"
                      }
                    `}
                  >
                    {item.title}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

        {/* Card */}

        <div className="mx-auto mt-16 max-w-5xl rounded-[36px] border border-border bg-white p-10 shadow-xl">

          {/* STEP 1 */}

          {step === 0 && (
            <>
              <h2 className="text-3xl font-bold">
                Company Information
              </h2>

              <div className="mt-10 grid gap-6 md:grid-cols-2">

                <input
                  className="h-14 rounded-xl border px-5"
                  placeholder="Company Name"
                />

                <input
                  className="h-14 rounded-xl border px-5"
                  placeholder="Contact Person"
                />

                <input
                  className="h-14 rounded-xl border px-5"
                  placeholder="Business Email"
                />

                <input
                  className="h-14 rounded-xl border px-5"
                  placeholder="Phone Number"
                />

                <input
                  className="h-14 rounded-xl border px-5"
                  placeholder="Country"
                />

                <input
                  className="h-14 rounded-xl border px-5"
                  placeholder="Website"
                />

              </div>
            </>
          )}

          {/* STEP 2 */}

          {step === 1 && (
            <>
              <h2 className="text-3xl font-bold">
                Product Details
              </h2>

              <div className="mt-10 grid gap-6 md:grid-cols-2">

                <input
                  className="h-14 rounded-xl border px-5"
                  placeholder="Industry"
                />

                <input
                  className="h-14 rounded-xl border px-5"
                  placeholder="Product Name"
                />

                <input
                  className="h-14 rounded-xl border px-5"
                  placeholder="Product Category"
                />

                <input
                  className="h-14 rounded-xl border px-5"
                  placeholder="Quantity"
                />

                <textarea
                  rows={5}
                  className="rounded-xl border p-5 md:col-span-2"
                  placeholder="Product Description"
                />

              </div>
            </>
          )}

          {/* STEP 3 */}

          {step === 2 && (
            <>
              <h2 className="text-3xl font-bold">
                Shipping Information
              </h2>

              <div className="mt-10 grid gap-6 md:grid-cols-2">

                <input
                  className="h-14 rounded-xl border px-5"
                  placeholder="Destination Country"
                />

                <input
                  className="h-14 rounded-xl border px-5"
                  placeholder="Destination Port"
                />

                <input
                  className="h-14 rounded-xl border px-5"
                  placeholder="Preferred Incoterm"
                />

                <input
                  className="h-14 rounded-xl border px-5"
                  placeholder="Required Delivery Date"
                />

              </div>
            </>
          )}

          {/* STEP 4 */}

          {step === 3 && (
            <>
              <h2 className="text-3xl font-bold">
                Additional Requirements
              </h2>

              <div className="mt-10 space-y-5">

                <label className="flex items-center gap-3">
                  <input type="checkbox" />

                  OEM Manufacturing Required

                </label>

                <label className="flex items-center gap-3">
                  <input type="checkbox" />

                  Private Label Required

                </label>

                <textarea
                  rows={6}
                  className="w-full rounded-xl border p-5"
                  placeholder="Packaging, Certifications, Quality Requirements..."
                />

              </div>
            </>
          )}

          {/* STEP 5 */}

          {step === 4 && (
            <>
              <h2 className="text-3xl font-bold">
                Upload Documents
              </h2>

              <div className="mt-10 rounded-3xl border-2 border-dashed border-primary/30 p-20 text-center">

                <Upload className="mx-auto size-16 text-primary" />

                <h3 className="mt-6 text-2xl font-bold">
                  Drag & Drop Files
                </h3>

                <p className="mt-3 text-muted-foreground">
                  Product Images, Specification Sheets,
                  Catalogues, Drawings or PDFs
                </p>

                <Button
                  className="mt-8"
                  variant="outline"
                >
                  Browse Files
                </Button>

              </div>
            </>
          )}

          {/* STEP 6 */}

          {step === 5 && (
            <div className="text-center">

              <CheckCircle2 className="mx-auto size-20 text-primary" />

              <h2 className="mt-8 text-4xl font-bold">
                Ready to Submit
              </h2>

              <p className="mx-auto mt-6 max-w-2xl leading-8 text-muted-foreground">
                Please review your quotation request before submitting.
                Our sourcing specialists will contact you within
                24–48 business hours.
              </p>

            </div>
          )}

          {/* Navigation */}

          <div className="mt-16 flex justify-between">

            <Button
              variant="outline"
              onClick={previous}
              disabled={step === 0}
            >
              <ChevronLeft className="mr-2 size-4" />

              Previous

            </Button>

            {step === steps.length - 1 ? (
              <Button>
                Submit Quote
              </Button>
            ) : (
              <Button onClick={next}>
                Next

                <ChevronRight className="ml-2 size-4" />
              </Button>
            )}

          </div>

        </div>

      </Container>
    </section>
  );
}