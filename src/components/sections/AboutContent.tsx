import Link from "next/link";

import { CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/buttons/button";

const features = [
  "Verified Indian Manufacturers",
  "Global Export Documentation",
  "Quality Inspection",
  "Worldwide Logistics",
];

export default function AboutContent() {
  return (
    <div>

      <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-primary">
        Who We Are
      </span>

      <h2 className="mt-6 max-w-xl font-heading text-5xl font-extrabold leading-tight">

        Your Trusted Partner
        <br />
        in Global Trade.

      </h2>

      <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">

        GlobalAtlas Exim helps international buyers source premium-quality
        products from verified Indian manufacturers with complete export,
        sourcing, inspection, and logistics support.

      </p>

      <div className="mt-10 space-y-5">

        {features.map((feature) => (
          <div
            key={feature}
            className="flex items-center gap-4"
          >

            <CheckCircle2 className="size-6 text-primary" />

            <span className="font-medium">
              {feature}
            </span>

          </div>
        ))}

      </div>

      <Link href="/about" className="mt-10 inline-block">
        <Button
          size="lg"
          className="rounded-2xl px-8"
        >
          Learn More
        </Button>
      </Link>

    </div>
  );
}