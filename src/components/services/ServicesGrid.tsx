import {
  BadgeCheck,
  ClipboardCheck,
  FileCheck2,
  Globe2,
  SearchCheck,
  Ship,
} from "lucide-react";

import Container from "@/components/ui/container/Container";
import SectionHeader from "@/components/sections/SectionHeader";

const services = [
  {
    number: "01",
    icon: SearchCheck,
    title: "Supplier Sourcing",
    description:
      "Identify suitable Indian manufacturers based on your product requirements and sourcing needs.",
  },
  {
    number: "02",
    icon: BadgeCheck,
    title: "Supplier Verification",
    description:
      "Evaluate manufacturers for production capability, documentation and export readiness.",
  },
  {
    number: "03",
    icon: ClipboardCheck,
    title: "Quality Support",
    description:
      "Coordinate product specifications, quality requirements and inspections before shipment.",
  },
  {
    number: "04",
    icon: FileCheck2,
    title: "Export Documentation",
    description:
      "Support the preparation and coordination of documents required for international trade.",
  },
  {
    number: "05",
    icon: Ship,
    title: "Logistics Coordination",
    description:
      "Help coordinate sea, air and other freight requirements from origin to destination.",
  },
  {
    number: "06",
    icon: Globe2,
    title: "Global Trade Support",
    description:
      "Support communication and coordination throughout your international sourcing journey.",
  },
];

export default function ServicesGrid() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <Container>
        <SectionHeader
          badge="Our Services"
          title="How we support your trade."
          description="From finding suitable manufacturers to coordinating export requirements, we support key stages of your sourcing journey."
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
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.number}
                className="
                  group
                  relative
                  min-h-[250px]
                  bg-white
                  p-7
                  transition-colors
                  duration-300
                  hover:bg-slate-50
                  sm:p-8
                "
              >
                {/* Top */}

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

                  <span className="text-[10px] font-bold tracking-[0.2em] text-slate-300 transition-colors duration-300 group-hover:text-[#2f7d5c]">
                    {service.number}
                  </span>
                </div>

                {/* Content */}

                <div className="mt-10">
                  <h3 className="font-heading text-xl font-bold tracking-[-0.02em] text-[#132838]">
                    {service.title}
                  </h3>

                  <p className="mt-3 max-w-md text-sm leading-7 text-slate-500">
                    {service.description}
                  </p>
                </div>

                {/* Hover Accent */}

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
      </Container>
    </section>
  );
}