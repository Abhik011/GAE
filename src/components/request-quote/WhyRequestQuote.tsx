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
    title: "Verified Manufacturers",
    description:
      "Work with carefully vetted Indian manufacturers that meet international quality and export standards.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description:
      "Supplier verification, factory audits, and product inspections help ensure consistent product quality.",
  },
  {
    icon: Globe2,
    title: "Global Export Expertise",
    description:
      "Our team handles export documentation, customs compliance, and international shipping coordination.",
  },
  {
    icon: Users,
    title: "Dedicated Sourcing Team",
    description:
      "A dedicated sourcing specialist supports you from the initial inquiry through successful delivery.",
  },
  {
    icon: Truck,
    title: "End-to-End Logistics",
    description:
      "From factory pickup to final destination, we coordinate the complete logistics process.",
  },
  {
    icon: BadgeCheck,
    title: "Competitive Pricing",
    description:
      "Compare quotations from suitable manufacturers to find the right balance of quality, price, and lead time.",
  },
];

export default function WhyRequestQuote() {
  return (
    <section className="bg-slate-50 py-28">

      <Container>

        <SectionHeader
          badge="Why GlobalAtlas Exim"
          title="Why Request Your Quote Through GlobalAtlas Exim?"
          description="We simplify international sourcing by connecting buyers with verified manufacturers while managing quality, compliance, logistics, and communication."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2 xl:grid-cols-3">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="
                  group
                  rounded-[32px]
                  border
                  border-border
                  bg-white
                  p-8
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-primary/20
                  hover:shadow-xl
                "
              >
                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-primary/10
                    text-primary
                    transition-all
                    duration-300
                    group-hover:bg-primary
                    group-hover:text-white
                  "
                >
                  <Icon className="size-8" />
                </div>

                <h3 className="mt-8 text-2xl font-bold">
                  {feature.title}
                </h3>

                <p className="mt-5 leading-8 text-muted-foreground">
                  {feature.description}
                </p>

              </div>
            );
          })}

        </div>

        {/* Bottom Banner */}

        <div
          className="
            mt-24
            rounded-[36px]
            bg-primary
            p-12
            text-center
            text-white
          "
        >
          <h2 className="text-4xl font-black lg:text-5xl">
            From Inquiry to International Delivery
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/80">
            Our sourcing specialists help you identify the right suppliers,
            negotiate competitive pricing, oversee quality inspections, and
            coordinate export logistics—so you can focus on growing your business.
          </p>

        </div>

      </Container>

    </section>
  );
}