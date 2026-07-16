import {
  BadgeCheck,
  Globe2,
  ShieldCheck,
  Ship,
  FileCheck,
  PackageCheck,
} from "lucide-react";

import Container from "@/components/ui/container/Container";

import SectionHeader from "./SectionHeader";

const items = [
  {
    icon: Globe2,
    title: "Global Reach",
    description: "Connecting buyers across international markets.",
  },
  {
    icon: BadgeCheck,
    title: "Verified Suppliers",
    description: "Trusted manufacturers with verified credentials.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assured",
    description: "Strict inspection and compliance standards.",
  },
  {
    icon: Ship,
    title: "Global Logistics",
    description: "Sea, air, and multimodal shipping solutions.",
  },
  {
    icon: FileCheck,
    title: "Export Documentation",
    description: "Complete documentation for hassle-free trade.",
  },
  {
    icon: PackageCheck,
    title: "Reliable Delivery",
    description: "Efficient shipment tracking and fulfillment.",
  },
];

export default function TrustedBy() {
  return (
    <section className="py-24">
      <Container>

        <SectionHeader
          badge="Why GlobalAtlas Exim"
          title="Trusted Export Partner for Global Trade"
          description="We simplify international sourcing by connecting global buyers with verified Indian manufacturers through reliable export solutions."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-8
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-primary/20
                  hover:shadow-xl
                "
              >
                <div className="flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="size-7" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
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