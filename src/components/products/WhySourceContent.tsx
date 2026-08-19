import {
  Building2,
  ShieldCheck,
  FileCheck2,
  Ship,
} from "lucide-react";

const features = [
  {
    number: "01",
    icon: Building2,
    title: "Verified Manufacturers",
    description:
      "Connect with suitable Indian manufacturers for your sourcing requirements.",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Quality Support",
    description:
      "Support for quality checks and product requirements before export.",
  },
  {
    number: "03",
    icon: FileCheck2,
    title: "Export Documentation",
    description:
      "Guidance through essential documentation for international trade.",
  },
  {
    number: "04",
    icon: Ship,
    title: "Logistics Coordination",
    description:
      "Helping coordinate the movement of goods across international markets.",
  },
];

export default function WhySourceContent() {
  return (
    <div>
      {/* Label */}

      <div className="flex items-center gap-4">
        <span className="text-[11px] font-bold tracking-[0.28em] text-[#2f7d5c]">
          03
        </span>

        <span className="h-px w-10 bg-[#2f7d5c]/30" />

        <span className="text-[11px] font-bold tracking-[0.28em] text-slate-400">
          WHY SOURCE WITH US
        </span>
      </div>

      {/* Header */}

      <div className="mt-7 grid gap-8 border-b border-slate-200 pb-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <h2
          className="
            max-w-3xl
            font-heading
            text-5xl
            font-black
            leading-[0.98]
            tracking-[-0.05em]
            text-[#132838]
            sm:text-6xl
            lg:text-7xl
          "
        >
          Build stronger
          <span className="block text-[#2f7d5c]">
            trade connections.
          </span>
        </h2>

        <p className="max-w-xl text-base leading-8 text-slate-500 lg:text-lg">
          We help businesses explore international sourcing opportunities,
          connect with suitable partners, and navigate key stages of the
          global trade process with greater confidence.
        </p>
      </div>

      {/* Features */}

      <div className="grid border-t-0 border-slate-200 lg:grid-cols-2 lg:divide-x lg:divide-slate-200">
        {features.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className={`
                group
                flex
                gap-5
                border-b
                border-slate-200
                py-8
                transition-all
                duration-300
                hover:bg-white/40
                ${index % 2 === 0 ? "lg:pr-10" : "lg:pl-10"}
              `}
            >
              <span
                className="
                  pt-1
                  text-[10px]
                  font-bold
                  tracking-[0.16em]
                  text-slate-400
                  transition-colors
                  duration-300
                  group-hover:text-[#2f7d5c]
                "
              >
                {item.number}
              </span>

              <Icon
                className="
                  mt-0.5
                  size-5
                  shrink-0
                  text-slate-400
                  transition-all
                  duration-300
                  group-hover:text-[#2f7d5c]
                "
                strokeWidth={1.5}
              />

              <div>
                <h3
                  className="
                    font-heading
                    text-xl
                    font-bold
                    tracking-[-0.025em]
                    text-[#132838]
                    transition-colors
                    duration-300
                    group-hover:text-[#2f7d5c]
                  "
                >
                  {item.title}
                </h3>

                <p className="mt-3 max-w-md text-sm leading-7 text-slate-500">
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