import {
  ArrowRight,
  BadgeCheck,
} from "lucide-react";

import Link from "next/link";

import Container from "@/components/ui/container/Container";
import SectionHeader from "@/components/sections/SectionHeader";

interface Capability {
  title: string;
  description: string;
}

interface Props {
  industry: {
    title: string;
    capabilities: Capability[];
  };
}

export default function IndustryCapabilities({
  industry,
}: Props) {
  return (
    <section className="py-28">

      <Container>

        <SectionHeader
          badge="Capabilities"
          title={`Why Choose GlobalAtlas Exim for ${industry.title}?`}
          description={`Our sourcing experts manage every stage of the procurement and export process for the ${industry.title.toLowerCase()} industry.`}
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2">

          {industry.capabilities.map((item, index) => (

            <div
              key={item.title}
              className="
                group

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
              <div className="flex items-start gap-6">

                <div
                  className="
                    flex

                    h-14

                    w-14

                    shrink-0

                    items-center

                    justify-center

                    rounded-2xl

                    bg-primary/10

                    text-primary
                  "
                >
                  <BadgeCheck className="size-7" />
                </div>

                <div className="flex-1">

                  <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>

                  <h3 className="mt-3 text-2xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-8 text-muted-foreground">
                    {item.description}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* Bottom CTA */}

        <div
          className="
            mt-20

            rounded-[36px]

            border

            border-primary/10

            bg-primary/5

            p-10
          "
        >
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">

            <div>

              <h3 className="text-3xl font-bold">
                Looking for a Reliable Export Partner?
              </h3>

              <p className="mt-4 max-w-2xl text-lg leading-8 text-muted-foreground">
                Our sourcing specialists can help you identify the right
                manufacturers, negotiate pricing, ensure quality, and manage
                logistics from India to your destination.
              </p>

            </div>

            <Link
              href="/request-quote"
              className="
                inline-flex

                items-center

                gap-2

                rounded-2xl

                bg-primary

                px-8

                py-4

                font-semibold

                text-white

                transition

                hover:bg-primary/90
              "
            >
              Request a Quote

              <ArrowRight className="size-5" />

            </Link>

          </div>

        </div>

      </Container>

    </section>
  );
}