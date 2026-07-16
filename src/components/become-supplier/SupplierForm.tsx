"use client";

import { useState } from "react";

import {
  Building2,
  Briefcase,
  Package,
  BadgeCheck,
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
    title: "Business",
    icon: Briefcase,
  },
  {
    title: "Products",
    icon: Package,
  },
  {
    title: "Certifications",
    icon: BadgeCheck,
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

export default function SupplierForm() {
  const [step, setStep] = useState(0);

  const next = () =>
    setStep((prev) => Math.min(prev + 1, steps.length - 1));

  const previous = () =>
    setStep((prev) => Math.max(prev - 1, 0));

  return (
    <section className="py-28">

      <Container>

        <SectionHeader
          badge="Supplier Registration"
          title="Become a Verified GlobalAtlas Exim Supplier"
          description="Complete the application below to join our global supplier network."
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
                      mx-auto
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      transition-all
                      ${
                        active
                          ? "bg-primary text-white"
                          : "bg-slate-100 text-slate-400"
                      }
                    `}
                  >
                    <Icon className="size-6" />
                  </div>

                  <p
                    className={`
                      mt-3
                      text-sm
                      font-medium
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

        <div
          className="
            mx-auto
            mt-16
            max-w-5xl
            rounded-[36px]
            border
            border-border
            bg-white
            p-10
            shadow-xl
          "
        >

          {/* STEP 1 */}

          {step === 0 && (
            <div className="space-y-8">

              <h2 className="text-3xl font-bold">
                Company Information
              </h2>

              <div className="grid gap-6 md:grid-cols-2">

                <input
                  placeholder="Company Name"
                  className="h-14 rounded-xl border px-5"
                />

                <input
                  placeholder="Contact Person"
                  className="h-14 rounded-xl border px-5"
                />

                <input
                  placeholder="Business Email"
                  className="h-14 rounded-xl border px-5"
                />

                <input
                  placeholder="Phone Number"
                  className="h-14 rounded-xl border px-5"
                />

                <input
                  placeholder="Website"
                  className="h-14 rounded-xl border px-5 md:col-span-2"
                />

              </div>

            </div>
          )}

          {/* STEP 2 */}

          {step === 1 && (
            <div className="space-y-8">

              <h2 className="text-3xl font-bold">
                Business Information
              </h2>

              <div className="grid gap-6 md:grid-cols-2">

                <input
                  placeholder="Industry"
                  className="h-14 rounded-xl border px-5"
                />

                <input
                  placeholder="Years in Business"
                  className="h-14 rounded-xl border px-5"
                />

                <input
                  placeholder="Employees"
                  className="h-14 rounded-xl border px-5"
                />

                <input
                  placeholder="Factory Location"
                  className="h-14 rounded-xl border px-5"
                />

              </div>

            </div>
          )}

          {/* STEP 3 */}

          {step === 2 && (
            <div className="space-y-8">

              <h2 className="text-3xl font-bold">
                Products
              </h2>

              <textarea
                rows={6}
                placeholder="Describe your products..."
                className="w-full rounded-xl border p-5"
              />

            </div>
          )}

          {/* STEP 4 */}

          {step === 3 && (
            <div className="space-y-8">

              <h2 className="text-3xl font-bold">
                Certifications
              </h2>

              <div className="grid gap-4 md:grid-cols-3">

                {[
                  "ISO 9001",
                  "CE",
                  "FDA",
                  "GMP",
                  "HACCP",
                  "FSSAI",
                  "Organic",
                  "Other",
                ].map((item) => (
                  <label
                    key={item}
                    className="flex items-center gap-3 rounded-xl border p-4"
                  >
                    <input type="checkbox" />

                    {item}

                  </label>
                ))}

              </div>

            </div>
          )}

          {/* STEP 5 */}

          {step === 4 && (
            <div className="space-y-8">

              <h2 className="text-3xl font-bold">
                Upload Documents
              </h2>

              <div
                className="
                  rounded-3xl
                  border-2
                  border-dashed
                  border-primary/30
                  p-20
                  text-center
                "
              >
                <Upload className="mx-auto size-14 text-primary" />

                <p className="mt-6 text-lg">
                  Upload Company Profile, Catalogue,
                  Certifications & Factory Images
                </p>

              </div>

            </div>
          )}

          {/* STEP 6 */}

          {step === 5 && (
            <div className="space-y-8 text-center">

              <CheckCircle2 className="mx-auto size-20 text-primary" />

              <h2 className="text-4xl font-bold">
                Ready to Submit
              </h2>

              <p className="mx-auto max-w-2xl leading-8 text-muted-foreground">
                Review your information before submitting your
                supplier registration. Our team will contact
                you after verification.
              </p>

            </div>
          )}

          {/* Buttons */}

          <div className="mt-16 flex justify-between">

            <Button
              variant="outline"
              disabled={step === 0}
              onClick={previous}
            >
              <ChevronLeft className="mr-2 size-4" />

              Previous

            </Button>

            {step === steps.length - 1 ? (
              <Button>
                Submit Application
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