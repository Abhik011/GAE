import {
  ClipboardList,
  Factory,
  FileCheck2,
  PackageCheck,
  Search,
  Ship,
} from "lucide-react";

import Container from "@/components/ui/container/Container";

const steps = [
  {
    step: "01",
    title: "Share Your Requirements",
    shortTitle: "Requirements",
    description:
      "Tell us about your product, quantity, destination market and sourcing requirements.",
    icon: ClipboardList,
  },
  {
    step: "02",
    title: "Supplier Discovery",
    shortTitle: "Discovery",
    description:
      "We identify suitable Indian manufacturers based on your sourcing requirements.",
    icon: Search,
  },
  {
    step: "03",
    title: "Quotation & Sampling",
    shortTitle: "Quotation",
    description:
      "Coordinate quotations, samples and discussions with suitable suppliers.",
    icon: Factory,
  },
  {
    step: "04",
    title: "Quality Support",
    shortTitle: "Quality",
    description:
      "Support product requirements, inspections and checks before shipment.",
    icon: FileCheck2,
  },
  {
    step: "05",
    title: "Export Coordination",
    shortTitle: "Export",
    description:
      "Coordinate documentation, logistics and shipment requirements.",
    icon: Ship,
  },
  {
    step: "06",
    title: "Delivery Support",
    shortTitle: "Delivery",
    description:
      "Stay connected through shipment and post-shipment coordination.",
    icon: PackageCheck,
  },
];

export default function SourcingProcess() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      {/* Subtle Green Background */}

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(47,125,92,0.08),transparent_38%)]" />

      <div className="pointer-events-none absolute -left-40 top-40 h-80 w-80 rounded-full bg-[#2f7d5c]/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-80 w-80 rounded-full bg-[#2f7d5c]/5 blur-3xl" />

      <Container>
        <div className="relative">
          {/* Header */}

          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-4">
              <span className="text-[11px] font-bold tracking-[0.28em] text-[#2f7d5c]">
                OUR PROCESS
              </span>

              <span className="h-px w-10 bg-[#2f7d5c]/30" />
            </div>

            <h2 className="mt-6 font-heading text-4xl font-black leading-[1.05] tracking-[-0.04em] text-[#132838] sm:text-5xl">
              From inquiry to
              <span className="block text-[#2f7d5c]">
                international delivery.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-500 lg:text-lg">
              A clear and coordinated process that supports your sourcing
              journey from the first requirement through export and delivery.
            </p>
          </div>

          {/* Desktop Journey */}

          <div className="relative mt-20 hidden lg:block">
            {/* Connection Line */}

            <div className="absolute left-[4%] right-[4%] top-[38px] h-px bg-slate-200" />

            <div className="grid grid-cols-6 gap-4">
              {steps.map((step) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.step}
                    className="group relative cursor-default"
                  >
                    {/* Step Node */}

                    <div className="relative z-10 mx-auto flex h-[76px] w-[76px] items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:border-[#2f7d5c] group-hover:bg-[#2f7d5c] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[#2f7d5c]/20">
                      <Icon
                        className="size-6"
                        strokeWidth={1.5}
                      />

                      <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#2f7d5c] text-[8px] font-bold text-white">
                        {step.step}
                      </span>
                    </div>

                    {/* Content */}

                    <div className="mt-8 text-center">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#2f7d5c]">
                        Step {step.step}
                      </span>

                      <h3 className="mt-3 font-heading text-base font-bold text-[#132838]">
                        {step.shortTitle}
                      </h3>

                      {/* Interactive Description */}

                      <p className="mx-auto mt-3 max-h-0 overflow-hidden text-sm leading-6 text-slate-500 opacity-0 transition-all duration-500 group-hover:max-h-32 group-hover:opacity-100">
                        {step.description}
                      </p>
                    </div>

                    {/* Hover Indicator */}

                    <div className="mx-auto mt-5 h-px w-0 bg-[#2f7d5c] transition-all duration-500 group-hover:w-12" />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile Journey */}

          <div className="relative mt-14 space-y-0 lg:hidden">
            <div className="absolute bottom-6 left-5 top-6 w-px bg-slate-200" />

            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.step}
                  className="group relative flex gap-5 py-5"
                >
                  {/* Icon */}

                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#2f7d5c]/20 bg-white text-[#2f7d5c] shadow-sm">
                    <Icon
                      className="size-4"
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Content */}

                  <div className="pb-2">
                    <span className="text-[10px] font-bold tracking-[0.2em] text-[#2f7d5c]">
                      STEP {step.step}
                    </span>

                    <h3 className="mt-1 font-heading text-lg font-bold text-[#132838]">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer */}

          <div className="mt-16 border-t border-slate-200 pt-7 text-center">
            <p className="text-sm text-slate-500">
              One coordinated journey — from sourcing requirements to delivery
              support.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}