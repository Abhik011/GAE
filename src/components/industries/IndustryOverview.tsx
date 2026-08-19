import {
  BadgeCheck,
  Factory,
  Globe2,
  TrendingUp,
} from "lucide-react";

import Container from "@/components/ui/container/Container";

interface IndustryOverviewProps {
  industry: {
    title: string;
    description: string;
  };
}

const highlights = [
  {
    number: "01",
    icon: Factory,
    title: "Verified Manufacturers",
    description:
      "Connect with suitable Indian manufacturers with reliable production capabilities.",
  },
  {
    number: "02",
    icon: Globe2,
    title: "Export Ready",
    description:
      "Support for international requirements, documentation, and market-specific needs.",
  },
  {
    number: "03",
    icon: BadgeCheck,
    title: "Quality Support",
    description:
      "Supplier verification and quality checks help support your sourcing requirements.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Competitive Sourcing",
    description:
      "Explore suitable sourcing options based on product requirements, quantity, and market needs.",
  },
];

export default function IndustryOverview({
  industry,
}: IndustryOverviewProps) {
  return (
    <section className="border-t border-slate-200 bg-slate-50/50 py-20 lg:py-24">
      <Container>
        {/* Header */}

        <div className="max-w-3xl">
          <div className="flex items-center gap-4">
            <span className="text-[11px] font-bold tracking-[0.28em] text-[#2f7d5c]">
              OVERVIEW
            </span>

            <span className="h-px w-10 bg-[#2f7d5c]/30" />
          </div>

          <h2
            className="
              mt-5
              font-heading
              text-3xl
              font-black
              leading-[1.1]
              tracking-[-0.035em]
              text-[#132838]
              sm:text-4xl
              lg:text-5xl
            "
          >
            Source {industry.title} Products
            <span className="block text-[#2f7d5c]">
              from India.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-500 lg:text-lg">
            {industry.description}
          </p>
        </div>

        {/* Highlights */}

        <div className="mt-14 grid overflow-hidden border border-slate-200 bg-slate-200 md:grid-cols-2">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  group
                  relative
                  bg-white
                  p-7
                  transition-colors
                  duration-300
                  hover:bg-slate-50
                  sm:p-8
                "
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex size-11 items-center justify-center rounded-full bg-slate-50 text-slate-500 transition-colors duration-300 group-hover:bg-[#2f7d5c]/10 group-hover:text-[#2f7d5c]">
                    <Icon
                      className="size-5"
                      strokeWidth={1.5}
                    />
                  </div>

                  <span className="text-[10px] font-bold tracking-[0.2em] text-slate-300">
                    {item.number}
                  </span>
                </div>

                <h3 className="mt-10 font-heading text-xl font-bold tracking-[-0.02em] text-[#132838]">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-md text-sm leading-7 text-slate-500">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}