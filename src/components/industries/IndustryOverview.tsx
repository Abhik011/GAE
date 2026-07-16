import {
  BadgeCheck,
  Globe2,
  Factory,
  TrendingUp,
} from "lucide-react";

import Container from "@/components/ui/container/Container";
import SectionHeader from "@/components/sections/SectionHeader";

interface IndustryOverviewProps {
  industry: {
    title: string;
    description: string;
  };
}

const highlights = [
  {
    icon: Factory,
    title: "Trusted Manufacturers",
    description:
      "Work with carefully selected Indian manufacturers known for consistent quality and production capability.",
  },
  {
    icon: Globe2,
    title: "Global Export Experience",
    description:
      "Products prepared according to international quality standards and export requirements.",
  },
  {
    icon: BadgeCheck,
    title: "Quality Assurance",
    description:
      "Every shipment follows supplier verification, inspections and documentation checks.",
  },
  {
    icon: TrendingUp,
    title: "Competitive Pricing",
    description:
      "Optimize sourcing costs while maintaining high product quality and reliable delivery.",
  },
];

export default function IndustryOverview({
  industry,
}: IndustryOverviewProps) {
  return (
    <section className="py-28">

      <Container>

        <SectionHeader
          badge="Overview"
          title={`Why Source ${industry.title} Products from India?`}
          description={industry.description}
        />

        <div className="mt-20 grid gap-8 lg:grid-cols-2">

          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  rounded-[32px]
                  border
                  border-border
                  bg-white
                  p-8
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-primary/20
                  hover:shadow-xl
                "
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="size-8" />
                </div>

                <h3 className="mt-8 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-5 leading-8 text-muted-foreground">
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