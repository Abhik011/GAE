import {
  BadgeCheck,
  Factory,
  Globe2,
  ShieldCheck,
  Truck,
  Users,
} from "lucide-react";

import Container from "@/components/ui/container/Container";
import SectionHeader from "@/components/sections/SectionHeader";

const features = [
  {
    icon: Factory,
    number: "01",
    title: "Supplier Sourcing",
    description:
      "Identify suitable Indian manufacturers based on your requirements.",
  },
  {
    icon: ShieldCheck,
    number: "02",
    title: "Supplier Verification",
    description:
      "Review supplier capabilities, documentation and export readiness.",
  },
  {
    icon: BadgeCheck,
    number: "03",
    title: "Quality Support",
    description:
      "Coordinate product requirements and quality checks before shipment.",
  },
  {
    icon: Globe2,
    number: "04",
    title: "Export Coordination",
    description:
      "Support documentation and coordination for international trade.",
  },
  {
    icon: Truck,
    number: "05",
    title: "Logistics Support",
    description:
      "Coordinate freight and shipment requirements from India.",
  },
  {
    icon: Users,
    number: "06",
    title: "Single Point of Contact",
    description:
      "Stay connected throughout the sourcing and export process.",
  },
];

export default function WhyRequestQuote() {
  return (
    <section className="bg-slate-50 py-20 lg:py-24">
      <Container>
        <SectionHeader
          badge="Why GlobalAtlas Exim"
          title="More Than Just a Quote."
          description="Get support at key stages of your sourcing journey, from finding suitable manufacturers to export coordination."
        />

        <div className="mt-12 grid overflow-hidden border border-slate-200 bg-slate-200 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="
                  group
                  relative
                  min-h-[240px]
                  bg-white
                  p-7
                  transition-colors
                  duration-300
                  hover:bg-[#2f7d5c]/[0.03]
                  sm:p-8
                "
              >
                <div className="flex items-start justify-between">
                  <div
                    className="
                      flex
                      size-11
                      items-center
                      justify-center
                      rounded-full
                      bg-slate-50
                      text-slate-500
                      transition-all
                      duration-300
                      group-hover:bg-[#2f7d5c]/10
                      group-hover:text-[#2f7d5c]
                    "
                  >
                    <Icon
                      className="size-5"
                      strokeWidth={1.5}
                    />
                  </div>

                  <span className="text-[10px] font-bold tracking-[0.2em] text-slate-300 group-hover:text-[#2f7d5c]">
                    {feature.number}
                  </span>
                </div>

                <div className="mt-10">
                  <h3 className="font-heading text-xl font-bold tracking-[-0.02em] text-[#132838]">
                    {feature.title}
                  </h3>

                  <p className="mt-3 max-w-md text-sm leading-7 text-slate-500">
                    {feature.description}
                  </p>
                </div>

                <span
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-px
                    w-0
                    bg-[#2f7d5c]
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />
              </div>
            );
          })}
        </div>

        {/* Bottom message */}

        <div className="mt-12 border-t border-slate-200 pt-8 text-center">
          <p className="mx-auto max-w-2xl text-base leading-7 text-slate-500">
            One coordinated starting point for exploring suitable suppliers,
            sourcing options and export requirements from India.
          </p>
        </div>
      </Container>
    </section>
  );
}