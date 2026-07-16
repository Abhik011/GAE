import {
  BadgeCheck,
  Globe2,
  ShieldCheck,
  Ship,
} from "lucide-react";

const features = [
  {
    icon: BadgeCheck,
    title: "Verified Manufacturers",
    description:
      "Every supplier is carefully evaluated before joining our network.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description:
      "Independent inspections help ensure product quality and consistency.",
  },
  {
    icon: Ship,
    title: "End-to-End Logistics",
    description:
      "From sourcing to shipping, we simplify international trade.",
  },
  {
    icon: Globe2,
    title: "Global Reach",
    description:
      "Supporting buyers across international markets with confidence.",
  },
];

export default function CompanyFeatures() {
  return (
    <div>

      <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-primary">
        Who We Are
      </span>

      <h2 className="mt-6 font-heading text-5xl font-black leading-tight">

        Your Trusted Export
        <br />
        & Global Sourcing Partner.

      </h2>

      <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">

        GlobalAtlas Exim helps businesses around the world source
        premium-quality products from trusted Indian manufacturers.
        We combine supplier verification, quality assurance,
        documentation, and logistics into one seamless export
        experience.

      </p>

      <div className="mt-10 grid gap-6">

        {features.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="flex gap-5"
            >
              <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Icon className="size-6" />
              </div>

              <div>

                <h3 className="font-bold text-lg">
                  {item.title}
                </h3>

                <p className="mt-1 leading-7 text-muted-foreground">
                  {item.description}
                </p>

              </div>
            </div>
          );
        })}

      </div>

    </div>
  );
}