import Link from "next/link";

import {
  ArrowRight,
  BadgeCheck,
  Globe2,
  Ship,
  FileCheck2,
} from "lucide-react";

import { Button } from "@/components/ui/buttons/button";

const features = [
  {
    icon: BadgeCheck,
    text: "Verified Manufacturers",
  },
  {
    icon: Globe2,
    text: "Worldwide Export",
  },
  {
    icon: Ship,
    text: "Global Logistics",
  },
  {
    icon: FileCheck2,
    text: "Export Documentation",
  },
];

export default function HeroContent() {
  return (
    <div>

      <span className="inline-flex rounded-full bg-primary/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.15em] text-primary">
        Export Products
      </span>

      <h1 className="mt-8 font-heading text-5xl font-black leading-tight lg:text-7xl">
        Source Premium Products
        <span className="block text-primary">
          From India.
        </span>
      </h1>

      <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
        Discover high-quality products from trusted Indian manufacturers.
        GlobalAtlas Exim simplifies sourcing with supplier verification,
        export documentation, quality assurance, and worldwide logistics.
      </p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">

        {features.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.text}
              className="flex items-center gap-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="size-5" />
              </div>

              <span className="font-medium">
                {item.text}
              </span>
            </div>
          );
        })}

      </div>

      <div className="mt-12 flex flex-wrap gap-4">

        <Link href="/products/categories">
          <Button
            size="lg"
            className="h-14 rounded-2xl px-8"
          >
            Browse Categories

            <ArrowRight className="ml-2 size-5" />
          </Button>
        </Link>

        <Link href="/request-quote">
          <Button
            variant="outline"
            size="lg"
            className="h-14 rounded-2xl px-8"
          >
            Request Quote
          </Button>
        </Link>

      </div>

    </div>
  );
}