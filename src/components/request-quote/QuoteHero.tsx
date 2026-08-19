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
  "Supplier verification support",
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
    <section className="relative overflow-hidden bg-slate-50 pt-32 pb-20 lg:min-h-screen lg:py-0 lg:flex lg:items-center">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(47,125,92,0.08),transparent_35%)]" />

      <Container>
        <div className="relative grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <div>
            <div className="flex items-center gap-4">
              <span className="text-[11px] font-bold tracking-[0.28em] text-[#2f7d5c]">
                REQUEST A QUOTE
              </span>

              <span className="h-px w-10 bg-[#2f7d5c]/30" />
            </div>

            <h1 className="mt-6 font-heading text-4xl font-black leading-[1.05] tracking-[-0.04em] text-[#132838] sm:text-5xl lg:text-6xl">
              Find the right products
              <span className="block text-[#2f7d5c]">
                from India.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-500 lg:text-lg">
              Share your sourcing requirements and let us help you identify
              suitable Indian manufacturers and coordinate your export needs.
            </p>

            {/* Highlights */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm font-medium text-slate-600"
                >
                  <span className="flex size-5 items-center justify-center rounded-full bg-[#2f7d5c]/10 text-[#2f7d5c]">
                    <Check className="size-3" />
                  </span>

                  {item}
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="#quote-form">
                <Button
                  size="lg"
                  className="h-12 rounded-xl px-6"
                >
                  Request a Quote
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </Link>

              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 rounded-xl border-slate-300 px-6"
                >
                  Talk to Us
                </Button>
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="lg:pl-8">
            <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
              <div className="border-b border-slate-100 p-7 sm:p-8">
                <span className="text-[10px] font-bold tracking-[0.22em] text-[#2f7d5c]">
                  SIMPLE PROCESS
                </span>

                <h2 className="mt-3 font-heading text-2xl font-bold tracking-[-0.03em] text-[#132838] sm:text-3xl">
                  From requirement to quote.
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  A straightforward starting point for your sourcing journey.
                </p>
              </div>

              <div>
                {steps.map((step, index) => {
                  const Icon = step.icon;

                  return (
                    <div
                      key={step.title}
                      className="group flex gap-5 border-b border-slate-100 p-7 last:border-0 transition-colors hover:bg-slate-50 sm:p-8"
                    >
                      <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#2f7d5c]/10 text-[#2f7d5c] transition-all group-hover:bg-[#2f7d5c] group-hover:text-white">
                        <Icon className="size-5" strokeWidth={1.7} />
                      </div>

                      <div>
                        <span className="text-[10px] font-bold tracking-[0.2em] text-slate-300">
                          0{index + 1}
                        </span>

                        <h3 className="mt-1 text-base font-bold text-[#132838]">
                          {step.title}
                        </h3>

                        <p className="mt-1 text-sm leading-6 text-slate-500">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="bg-[#132838] px-7 py-5 sm:px-8">
                <p className="text-sm text-slate-300">
                  Start with your requirements. We'll help you explore the
                  next steps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}