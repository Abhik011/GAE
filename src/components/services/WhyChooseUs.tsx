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
    icon: SearchCheck,
    title: "Verified Supplier Network",
    description:
      "Every manufacturer is evaluated for production capability, quality standards, certifications, and export readiness before being recommended.",
  },
  {
    icon: ShieldCheck,
    title: "Quality First",
    description:
      "Inspection and quality assurance processes help ensure products meet agreed specifications before shipment.",
  },
  {
    icon: Globe2,
    title: "Global Export Expertise",
    description:
      "We assist with export documentation, customs compliance, logistics planning, and international shipping.",
  },
  {
    icon: Handshake,
    title: "Transparent Communication",
    description:
      "Receive regular project updates, supplier coordination, and complete visibility throughout the sourcing process.",
  },
  {
    icon: Truck,
    title: "End-to-End Logistics",
    description:
      "From factory pickup to international delivery, we coordinate the complete supply chain.",
  },
  {
    icon: BadgeCheck,
    title: "Dedicated Support",
    description:
      "Work directly with a sourcing specialist who understands your business requirements from inquiry to delivery.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-50 py-28">

      <Container>

        <SectionHeader
          badge="Why GlobalAtlas Exim"
          title="A Trusted Partner for Global Sourcing"
          description="We simplify international procurement by combining verified supplier networks, export expertise, quality assurance, and transparent communication."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="
                  group
                  flex
                  gap-6
                  rounded-[30px]
                  border
                  border-border
                  bg-white
                  p-8
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-primary/20
                  hover:shadow-xl
                "
              >
                <div
                  className="
                    flex
                    h-16
                    w-16
                    shrink-0
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

                <div>

                  <h3 className="text-2xl font-bold">
                    {feature.title}
                  </h3>

                  <p className="mt-4 leading-8 text-muted-foreground">
                    {feature.description}
                  </p>

                </div>

              </div>
            );
          })}

        </div>

        {/* Trust Banner */}

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
            One Partner. Every Step of Your Export Journey.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/80">
            Whether you're sourcing a single product or building a long-term
            procurement strategy, GlobalAtlas Exim provides the expertise,
            supplier network, and operational support to simplify global trade.
          </p>

        </div>

      </Container>

    </section>
  );
}