import {
  BadgeCheck,
  Building2,
  FileCheck2,
  PackageCheck,
  ShieldCheck,
  Ship,
} from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "Verified Manufacturers",
    description:
      "Every supplier is carefully verified before joining our network.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Inspection",
    description:
      "Independent inspections ensure every shipment meets expectations.",
  },
  {
    icon: FileCheck2,
    title: "Export Documentation",
    description:
      "Complete documentation support for hassle-free international trade.",
  },
  {
    icon: Ship,
    title: "Global Logistics",
    description:
      "Sea, air and land freight managed from origin to destination.",
  },
  {
    icon: PackageCheck,
    title: "Reliable Packaging",
    description:
      "Export-grade packaging designed for safe international delivery.",
  },
  {
    icon: BadgeCheck,
    title: "Dedicated Support",
    description:
      "A single point of contact throughout your sourcing journey.",
  },
];

export default function WhySourceContent() {
  return (
    <div>

      <span className="inline-flex rounded-full bg-primary/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-primary">
        Why GlobalAtlas Exim
      </span>

      <h2 className="mt-6 font-heading text-5xl font-black leading-tight">
        Your Trusted
        <span className="block text-primary">
          Sourcing Partner.
        </span>
      </h2>

      <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
        We simplify global sourcing by connecting buyers with trusted
        Indian manufacturers while managing verification, quality,
        logistics, and export compliance.
      </p>

      <div className="mt-12 space-y-8">

        {features.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="flex gap-5"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Icon className="size-7" />
              </div>

              <div>

                <h3 className="text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-2 leading-7 text-muted-foreground">
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