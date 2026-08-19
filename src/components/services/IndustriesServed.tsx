import Link from "next/link";

import {
  ArrowRight,
  Wheat,
  Factory,
  Building2,
  ShoppingBag,
  HeartPulse,
  Car,
  Hotel,
  UtensilsCrossed,
  Shirt,
} from "lucide-react";

import Container from "@/components/ui/container/Container";
import SectionHeader from "@/components/sections/SectionHeader";

const industries = [
  {
    title: "Agriculture",
    slug: "agriculture",
    description: "Grains, spices, seeds and agricultural exports.",
    icon: Wheat,
  },
  {
    title: "Manufacturing",
    slug: "manufacturing",
    description: "Industrial machinery and engineering goods.",
    icon: Factory,
  },
  {
    title: "Construction",
    slug: "construction",
    description: "Building materials and infrastructure products.",
    icon: Building2,
  },
  {
    title: "Retail",
    slug: "retail",
    description: "Consumer products and FMCG sourcing.",
    icon: ShoppingBag,
  },
  {
    title: "Healthcare",
    slug: "healthcare",
    description: "Medical devices and healthcare supplies.",
    icon: HeartPulse,
  },
  {
    title: "Automotive",
    slug: "automotive",
    description: "OEM components and engineering solutions.",
    icon: Car,
  },
  {
    title: "Hospitality",
    slug: "hospitality",
    description: "Furniture, décor and hotel supplies.",
    icon: Hotel,
  },
  {
    title: "Food Processing",
    slug: "food-processing",
    description: "Packaged foods, beverages and ingredients.",
    icon: UtensilsCrossed,
  },
  {
    title: "Textiles & Apparel",
    slug: "textiles",
    description: "Textile, garment, and apparel sourcing from Indian manufacturers.",
    image: "/images/industries/textiles-apparel.jpg",
    icon: Shirt,
  }
];

export default function IndustriesServed() {
  return (
    <section className="bg-slate-50 py-28">

      <Container>

        <SectionHeader
          badge="Industries"
          title="Industries We Serve"
          description="Our sourcing expertise spans a wide range of industries, helping buyers connect with trusted Indian manufacturers."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="
                  group
                  rounded-[30px]
                  border
                  border-border
                  bg-white
                  p-8
                  shadow-sm
                  transition-all
                  duration-500
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
                  {industry.title}
                </h3>

                <p className="mt-5 leading-8 text-muted-foreground">
                  {industry.description}
                </p>

                <div className="mt-8 flex items-center gap-2 font-semibold text-primary">

                  Explore Industry

                  <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />

                </div>

              </Link>
            );
          })}

        </div>

      </Container>

    </section>
  );
}