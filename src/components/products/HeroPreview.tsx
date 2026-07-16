import {
  Wheat,
  Apple,
  Shirt,
  Cpu,
  Package,
  Sofa,
  Leaf,
  Blocks,
} from "lucide-react";

const categories = [
  { title: "Agriculture", icon: Wheat },
  { title: "Food", icon: Apple },
  { title: "Textiles", icon: Shirt },
  { title: "Engineering", icon: Cpu },
  { title: "Packaging", icon: Package },
  { title: "Furniture", icon: Sofa },
  { title: "Herbal", icon: Leaf },
  { title: "Construction", icon: Blocks },
];

export default function HeroPreview() {
  return (
    <div className="grid grid-cols-2 gap-5">

      {categories.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="
              group
              rounded-[28px]
              border
              border-border
              bg-white
              p-6
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-primary/20
              hover:shadow-xl
            "
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Icon className="size-7" />
            </div>

            <h3 className="mt-6 text-xl font-bold">
              {item.title}
            </h3>

            <p className="mt-2 text-sm text-muted-foreground">
              Trusted export sourcing
            </p>
          </div>
        );
      })}

    </div>
  );
}