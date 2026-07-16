import {
  Globe2,
  Package,
  ShieldCheck,
  Truck,
} from "lucide-react";

const stats = [
  {
    icon: Globe2,
    value: "30+",
    label: "Countries",
  },
  {
    icon: Package,
    value: "500+",
    label: "Products",
  },
  {
    icon: ShieldCheck,
    value: "100%",
    label: "Verified Suppliers",
  },
  {
    icon: Truck,
    value: "24/7",
    label: "Export Support",
  },
];

export default function WhySourcePreview() {
  return (
    <div className="grid grid-cols-2 gap-6">

      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.label}
            className="
              rounded-[30px]
              border
              border-border
              bg-white
              p-8
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-2
              hover:shadow-xl
            "
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Icon className="size-7" />
            </div>

            <h3 className="mt-8 text-4xl font-black text-slate-900">
              {item.value}
            </h3>

            <p className="mt-2 text-muted-foreground">
              {item.label}
            </p>

          </div>
        );
      })}

    </div>
  );
}