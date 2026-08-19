import Link from "next/link";

import {
  ArrowRight,
  Check,
  FileText,
  SearchCheck,
  ShieldCheck,
} from "lucide-react";

import Container from "@/components/ui/container/Container";
import { Button } from "@/components/ui/buttons/button";

const highlights = [
  "Suitable Indian manufacturers",
  "Competitive quotations",
  "Supplier verification",
  "Export coordination",
];

const steps = [
  {
    icon: FileText,
    title: "Share Requirements",
    description: "Tell us what you need and where.",
  },
  {
    icon: SearchCheck,
    title: "Supplier Matching",
    description: "We identify suitable manufacturers.",
  },
  {
    icon: ShieldCheck,
    title: "Receive Your Quote",
    description: "Review available sourcing options.",
  },
];

export default function QuoteHero() {
  return (
    <section className="relative flex min-h-[100svh] overflow-hidden bg-white">
      {/* Subtle GlobalAtlas background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            right-[-12%]
            top-[8%]
            size-[520px]
            rounded-full
            bg-[#e9f7ef]
            blur-[110px]
            opacity-70
          "
        />

        <div
          className="
            absolute
            bottom-[-20%]
            left-[-10%]
            size-[420px]
            rounded-full
            bg-[#18364a]
            blur-[160px]
            opacity-[0.04]
          "
        />
      </div>

      <Container>
        <div className="relative flex min-h-[100svh] items-center py-28 lg:py-20">
          <div className="grid w-full items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">

            {/* Left Content */}
            <div className="max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="size-2 rounded-full bg-[#2d9b68]" />

                <p className="text-[10px] font-bold tracking-[0.24em] text-[#2d9b68]">
                  REQUEST A QUOTE
                </p>
              </div>

              <h1 className="mt-6 font-heading text-5xl font-black leading-[0.98] tracking-[-0.05em] text-[#0c2030] sm:text-6xl lg:text-7xl xl:text-8xl">
                Find the right
         <span
  className="
    block

  "
>
  products from
</span>

                <span className="block font-normal text-[#2d9b68]">
                  India.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-8 text-[#284b62] lg:text-lg">
                Share your sourcing requirements and explore suitable Indian
                manufacturers for your business.
              </p>

              {/* Highlights */}
              <div className="mt-10 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-sm font-medium text-[#18364a]"
                  >
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[#e9f7ef] text-[#2d9b68]">
                      <Check className="size-3.5" strokeWidth={2.2} />
                    </span>

                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="mt-12 flex flex-wrap items-center gap-7">
                <Link href="#quote-form">
                  <Button
                    size="lg"
                    className="
                      group
                      h-14
                      rounded-none
                      bg-[#0c2030]
                      px-7
                      text-white
                      transition-all
                      duration-300
                      hover:bg-[#2d9b68]
                    "
                  >
                    Request a Quote

                    <ArrowRight
                      className="
                        ml-3
                        size-4
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />
                  </Button>
                </Link>

                <Link
                  href="/contact"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-2.5
                    text-sm
                    font-semibold
                    text-[#0c2030]
                    transition-colors
                    duration-300
                    hover:text-[#2d9b68]
                  "
                >
                  Talk to Us

                  <ArrowRight
                    className="
                      size-4
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </Link>
              </div>
            </div>

            {/* Right Process */}
            <div className="w-full lg:justify-self-end lg:max-w-lg">
              <div className="border-t border-[#0c2030]/10">

                {/* Process Header */}
                <div className="py-8">
                  <div className="flex items-center gap-3">
                    <span className="h-px w-8 bg-[#2d9b68]" />

                    <p className="text-[10px] font-bold tracking-[0.22em] text-[#2d9b68]">
                      HOW IT WORKS
                    </p>
                  </div>

                  <h2 className="mt-5 font-heading text-3xl font-bold leading-tight tracking-[-0.04em] text-[#0c2030] sm:text-4xl">
                    From requirement
                    <span className="block font-normal text-[#284b62]">
                      to the right quote.
                    </span>
                  </h2>
                </div>

                {/* Steps */}
                <div>
                  {steps.map((step, index) => {
                    const Icon = step.icon;

                    return (
                      <div
                        key={step.title}
                        className="
                          grid
                          grid-cols-[32px_38px_1fr]
                          gap-4
                          border-t
                          border-[#0c2030]/10
                          py-8
                        "
                      >
                        {/* Number */}
                        <span className="pt-1 text-[10px] font-bold tracking-[0.14em] text-[#2d9b68]">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        {/* Icon */}
                        <div className="flex pt-0.5 text-[#2d9b68]">
                          <Icon
                            className="size-5"
                            strokeWidth={1.7}
                          />
                        </div>

                        {/* Content */}
                        <div>
                          <h3 className="text-[15px] font-bold text-[#0c2030]">
                            {step.title}
                          </h3>

                          <p className="mt-2 text-sm leading-6 text-[#284b62]">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Bottom Note */}
                <div className="border-t border-[#0c2030]/10 pt-7">
                  <p className="max-w-md text-sm leading-7 text-[#284b62]">
                    Start with your requirements. We&apos;ll help you explore
                    suitable sourcing options and understand the next steps.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}