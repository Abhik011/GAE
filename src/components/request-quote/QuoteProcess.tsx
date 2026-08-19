import {
  ClipboardList,
  Search,
  FileText,
  Factory,
  Ship,
  Handshake,
} from "lucide-react";

import Container from "@/components/ui/container/Container";
import SectionHeader from "@/components/sections/SectionHeader";

const steps = [
  {
    step: "01",
    title: "Submit Requirements",
    description:
      "Share your product, quantity, specifications and destination.",
    icon: ClipboardList,
  },
  {
    step: "02",
    title: "We Analyse",
    description:
      "Our team reviews your requirements and sourcing needs.",
    icon: Search,
  },
  {
    step: "03",
    title: "Supplier Matching",
    description:
      "We identify suitable manufacturers for your requirements.",
    icon: Factory,
  },
  {
    step: "04",
    title: "Receive Quotations",
    description:
      "Review pricing, lead times and commercial details.",
    icon: FileText,
  },
  {
    step: "05",
    title: "Production & Export",
    description:
      "We coordinate production, quality and export requirements.",
    icon: Ship,
  },
  {
    step: "06",
    title: "Delivery & Support",
    description:
      "Stay supported through shipment and delivery.",
    icon: Handshake,
  },
];

export default function QuoteProcess() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      {/* Subtle background */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(47,125,92,0.06),transparent_45%)]" />

      <Container>
        <div className="relative">
          <SectionHeader
            badge="Our Process"
            title="How Your Quote Request Works"
            description="A simple process from your first requirement to supplier matching and delivery coordination."
          />

          {/* Desktop Journey */}

          <div className="relative mt-20 hidden lg:block">
            {/* Connection Line */}

            <div className="absolute left-[5%] right-[5%] top-[38px] h-px bg-slate-200" />

            <div className="grid grid-cols-6 gap-4">
              {steps.map((step) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.step}
                    className="group relative"
                  >
                    {/* Node */}

                    <div
                      className="
                        relative
                        z-10
                        mx-auto
                        flex
                        h-[76px]
                        w-[76px]
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-slate-200
                        bg-white
                        text-slate-400
                        shadow-sm
                        transition-all
                        duration-300
                        group-hover:scale-110
                        group-hover:border-[#2f7d5c]
                        group-hover:bg-[#2f7d5c]
                        group-hover:text-white
                        group-hover:shadow-lg
                      "
                    >
                      <Icon
                        className="size-6"
                        strokeWidth={1.5}
                      />

                      {/* Step Number */}

                      <span
                        className="
                          absolute
                          -right-1
                          -top-1
                          flex
                          h-6
                          w-6
                          items-center
                          justify-center
                          rounded-full
                          bg-[#2f7d5c]
                          text-[9px]
                          font-bold
                          text-white
                          shadow-sm
                        "
                      >
                        {step.step}
                      </span>
                    </div>

                    {/* Content */}

                    <div className="mt-7 text-center">
                      <h3 className="font-heading text-sm font-bold text-[#132838]">
                        {step.title}
                      </h3>

                      <p
                        className="
                          mx-auto
                          mt-3
                          max-w-[170px]
                          text-xs
                          leading-6
                          text-slate-500
                          transition-all
                          duration-300
                          group-hover:text-[#2f7d5c]
                        "
                      >
                        {step.description}
                      </p>
                    </div>

                    {/* Hover Indicator */}

                    <div className="mx-auto mt-5 h-0.5 w-0 rounded-full bg-[#2f7d5c] transition-all duration-300 group-hover:w-10" />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile Journey */}

          <div className="relative mt-14 space-y-2 lg:hidden">
            {/* Vertical line */}

            <div className="absolute bottom-8 left-6 top-8 w-px bg-slate-200" />

            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.step}
                  className="
                    group
                    relative
                    flex
                    gap-5
                    rounded-2xl
                    p-4
                    transition-colors
                    duration-300
                    hover:bg-slate-50
                  "
                >
                  {/* Icon */}

                  <div
                    className="
                      relative
                      z-10
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-slate-200
                      bg-white
                      text-[#2f7d5c]
                      shadow-sm
                    "
                  >
                    <Icon
                      className="size-5"
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Content */}

                  <div className="pb-4">
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

          {/* Bottom Message */}

          <div className="mx-auto mt-16 max-w-3xl border-t border-slate-200 pt-8 text-center">
            <p className="text-sm leading-7 text-slate-500">
              Clear requirements. Suitable suppliers. Better sourcing decisions.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}