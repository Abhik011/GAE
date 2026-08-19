import {
  BadgeCheck,
  Globe2,
  ShieldCheck,
  Ship,
} from "lucide-react";

const features = [
  {
    icon: BadgeCheck,
    number: "01",
    title: "Verified Suppliers",
    description:
      "Carefully evaluating suppliers and sourcing opportunities.",
  },
  {
    icon: ShieldCheck,
    number: "02",
    title: "Quality Focus",
    description:
      "Supporting better product evaluation and quality confidence.",
  },
  {
    icon: Ship,
    number: "03",
    title: "Trade Support",
    description:
      "Helping businesses navigate sourcing and international trade.",
  },
  {
    icon: Globe2,
    number: "04",
    title: "Global Connections",
    description:
      "Connecting businesses with opportunities across international markets.",
  },
];

export default function CompanyFeatures() {
  return (
    <div>
      {/* Intro */}
      <p
        className="
          max-w-xl
          text-base
          leading-8
          text-slate-500
          lg:text-lg
        "
      >
        GlobalAtlas Exim helps businesses identify suitable suppliers,
        buyers, and international trade opportunities. We focus on
        building reliable connections and making global business
        relationships easier to explore.
      </p>

      {/* Features */}
      <div className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2">
        {features.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="
                group
                border-t
                border-slate-200
                pt-5
              "
            >
              <div className="flex items-center justify-between">
                <span
                  className="
                    text-[10px]
                    font-bold
                    tracking-[0.22em]
                    text-[#2f7d5c]
                  "
                >
                  {item.number}
                </span>

                <Icon
                  className="
                    size-5
                    text-[#2f7d5c]
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                  strokeWidth={1.8}
                />
              </div>

              <h3
                className="
                  mt-6
                  font-heading
                  text-xl
                  font-bold
                  tracking-[-0.025em]
                  text-[#132838]
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  mt-2
                  text-sm
                  leading-7
                  text-slate-500
                "
              >
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}