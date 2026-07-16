import {
  Globe2,
  ShieldCheck,
  Ship,
} from "lucide-react";

const stats = [
  {
    value: "Global",
    label: "Export Network",
    icon: Globe2,
  },
  {
    value: "Verified",
    label: "Manufacturers",
    icon: ShieldCheck,
  },
  {
    value: "End-to-End",
    label: "Logistics Support",
    icon: Ship,
  },
];

export default function HeroStats() {
  return (
    <div className="mt-14 grid gap-5 sm:grid-cols-3">

      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.label}
            className="
              
            "
          >
            <div className="flex items-center gap-4">

              <div
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-white
                  text-primary
                "
              >
                <Icon className="size-7 " />
              </div>

              <div>

                <h3 className="text-2xl font-bold text-white">
                  {item.value}
                </h3>

                <p className="mt-1 text-sm text-slate-300">
                  {item.label}
                </p>

              </div>

            </div>

          </div>
        );
      })}

    </div>
  );
}