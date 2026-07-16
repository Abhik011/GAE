import {
  Globe2,
  Ship,
  PackageCheck,
  FileCheck,
} from "lucide-react";

const stats = [
  {
    icon: Globe2,
    title: "30+",
    subtitle: "Countries Served",
  },
  {
    icon: Ship,
    title: "Sea & Air",
    subtitle: "Global Shipping",
  },
  {
    icon: PackageCheck,
    title: "Verified",
    subtitle: "Manufacturers",
  },
  {
    icon: FileCheck,
    title: "100%",
    subtitle: "Export Support",
  },
];

export default function PresenceStats() {
  return (
    <div className="mt-12 grid grid-cols-2 gap-6">

      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="rounded-3xl border border-border bg-white p-6"
          >
            <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Icon className="size-6" />
            </div>

            <h3 className="mt-5 text-3xl font-black">
              {item.title}
            </h3>

            <p className="mt-2 text-muted-foreground">
              {item.subtitle}
            </p>
          </div>
        );
      })}

    </div>
  );
}