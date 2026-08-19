import {
  Wheat,
  Apple,
  Shirt,
  Cpu,
  Package,
  Sofa,
  Leaf,
  Blocks,
  ArrowUpRight,
} from "lucide-react";

const categories = [
  { number: "01", title: "Agriculture", icon: Wheat },
  { number: "02", title: "Food Products", icon: Apple },
  { number: "03", title: "Textiles", icon: Shirt },
  { number: "04", title: "Engineering", icon: Cpu },
  { number: "05", title: "Packaging", icon: Package },
  { number: "06", title: "Furniture", icon: Sofa },
  { number: "07", title: "Herbal Products", icon: Leaf },
  { number: "08", title: "Construction", icon: Blocks },
];

export default function HeroPreview() {
  return (
    <div className="w-full">
      <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400">
        Explore Categories
      </p>

      <div className="border-t border-slate-300">
        {categories.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="
                group
                flex
                cursor-pointer
                items-center
                gap-5
                border-b
                border-slate-300/80
                py-3.5
                transition-all
                duration-300
                hover:border-[#2f7d5c]/60
              "
            >
              {/* Number */}
              <span
                className="
                  w-6
                  text-[10px]
                  font-medium
                  text-slate-400
                  transition-colors
                  duration-300
                  group-hover:text-[#2f7d5c]
                "
              >
                {item.number}
              </span>

              {/* Icon */}
              <div
                className="
                  flex
                  size-8
                  items-center
                  justify-center
                  rounded-lg
                  bg-transparent
                  transition-all
                  duration-300
                  group-hover:bg-[#2f7d5c]/10
                "
              >
                <Icon
                  className="
                    size-4
                    text-slate-400
                    transition-colors
                    duration-300
                    group-hover:text-[#2f7d5c]
                  "
                  strokeWidth={1.5}
                />
              </div>

              {/* Title */}
              <h3
                className="
                  flex-1
                  font-heading
                  text-base
                  font-semibold
                  tracking-[-0.02em]
                  text-[#132838]
                  transition-all
                  duration-300
                  group-hover:translate-x-1
                  group-hover:text-[#2f7d5c]
                "
              >
                {item.title}
              </h3>

              {/* Arrow */}
              <ArrowUpRight
                className="
                  size-4
                  text-slate-300
                  opacity-0
                  transition-all
                  duration-300
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                  group-hover:text-[#2f7d5c]
                  group-hover:opacity-100
                "
                strokeWidth={1.5}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}