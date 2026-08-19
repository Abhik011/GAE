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
    label: "Countries Reached",
  },
  {
    icon: Package,
    value: "500+",
    label: "Products",
  },
  {
    icon: ShieldCheck,
    value: "100%",
    label: "Supplier Verification",
  },
  {
    icon: Truck,
    value: "24/7",
    label: "Trade Support",
  },
];

export default function WhySourcePreview() {
  return (
    <div className="border-t border-slate-200">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.label}
            className="
              group
              flex
              items-center
              gap-5
              border-b
              border-slate-200
              py-7
              transition-colors
              duration-300
              hover:border-[#2f7d5c]
            "
          >
            <div
              className="
                flex
                size-10
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#2f7d5c]/8
                text-[#2f7d5c]
                transition-all
                duration-300
                group-hover:bg-[#2f7d5c]
                group-hover:text-white
              "
            >
              <Icon
                className="size-[18px]"
                strokeWidth={1.5}
              />
            </div>

            <div className="flex flex-1 items-end justify-between gap-6">
              <p
                className="
                  text-sm
                  font-medium
                  text-slate-500
                  transition-colors
                  group-hover:text-[#132838]
                "
              >
                {item.label}
              </p>

              <h3
                className="
                  font-heading
                  text-3xl
                  font-black
                  tracking-[-0.04em]
                  text-[#132838]
                  sm:text-4xl
                "
              >
                {item.value}
              </h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}