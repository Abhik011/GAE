import {
  BadgeCheck,
  Globe2,
  Handshake,
  SearchCheck,
  ShieldCheck,
  Truck,
} from "lucide-react";

import Container from "@/components/ui/container/Container";
import SectionHeader from "@/components/sections/SectionHeader";

const features = [
  {
    number: "01",
    icon: SearchCheck,
    title: "Supplier Network",
    description:
      "Connect with suitable Indian manufacturers based on your sourcing requirements.",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Quality Support",
    description:
      "Support for product specifications, quality requirements and inspections before shipment.",
  },
  {
    number: "03",
    icon: Globe2,
    title: "Export Coordination",
    description:
      "Guidance across export documentation, logistics and international trade requirements.",
  },
  {
    number: "04",
    icon: Handshake,
    title: "Clear Communication",
    description:
      "Stay informed with direct coordination and updates throughout the sourcing process.",
  },
  {
    number: "05",
    icon: Truck,
    title: "Logistics Support",
    description:
      "Help coordinate the movement of goods from suppliers to international destinations.",
  },
  {
    number: "06",
    icon: BadgeCheck,
    title: "Dedicated Support",
    description:
      "A single point of contact to support your sourcing requirements from inquiry to delivery.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-50 py-20 lg:py-24">
      <Container>
        <SectionHeader
          badge="Why GlobalAtlas Exim"
          title="Built for better trade connections."
          description="We help simplify international sourcing through supplier coordination, quality support, export guidance and transparent communication."
        />

        <div
          className="
            mt-12
            grid
            overflow-hidden
            border
            border-slate-200
            bg-slate-200
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.number}
                className="
                  group
                  relative
                  min-h-[240px]
                  bg-white
                  p-7
                  transition-colors
                  duration-300
                  hover:bg-slate-50
                  sm:p-8
                "
              >
                <div className="flex items-start justify-between gap-6">
                  <div
                    className="
                      flex
                      size-11
                      items-center
                      justify-center
                      rounded-full
                      bg-slate-50
                      text-slate-500
                      transition-colors
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

                  <span
                    className="
                      text-[10px]
                      font-bold
                      tracking-[0.2em]
                      text-slate-300
                      transition-colors
                      duration-300
                      group-hover:text-[#2f7d5c]
                    "
                  >
                    {feature.number}
                  </span>
                </div>

                <div className="mt-9">
                  <h3
                    className="
                      font-heading
                      text-xl
                      font-bold
                      tracking-[-0.02em]
                      text-[#132838]
                    "
                  >
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

        <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-6 text-slate-500">
            From the first requirement to export coordination, we help keep
            your sourcing process organised.
          </p>

          <span className="shrink-0 text-sm font-semibold text-[#2f7d5c]">
            One partner. Connected trade support.
          </span>
        </div>
      </Container>
    </section>
  );
}