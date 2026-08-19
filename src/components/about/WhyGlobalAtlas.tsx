import Container from "@/components/ui/container/Container";

import {
  BadgeCheck,
  FileCheck2,
  Globe2,
  Headphones,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

const advantages = [
  {
    number: "01",
    icon: BadgeCheck,
    title: "Verified Connections",
    description:
      "Helping businesses identify and connect with suitable suppliers and trade partners.",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Greater Confidence",
    description:
      "A more structured approach to exploring suppliers, opportunities, and international markets.",
  },
  {
    number: "03",
    icon: FileCheck2,
    title: "Trade Coordination",
    description:
      "Supporting smoother communication and coordination throughout the sourcing journey.",
  },
  {
    number: "04",
    icon: Globe2,
    title: "Global Opportunities",
    description:
      "Connecting Indian businesses and products with opportunities across international markets.",
  },
  {
    number: "05",
    icon: UsersRound,
    title: "One Point of Contact",
    description:
      "Simplifying communication between buyers, suppliers, and relevant business partners.",
  },
  {
    number: "06",
    icon: Headphones,
    title: "Dedicated Support",
    description:
      "Providing personalised assistance while building valuable long-term business connections.",
  },
];

export default function WhyGlobalAtlas() {
  return (
    <section className="relative bg-[#f7faf8] py-20 lg:py-24">
      <Container>
        {/* Section Header */}
        <div
          className="
            grid
            gap-8
            border-b
            border-slate-200
            pb-10
            lg:grid-cols-[0.75fr_1.25fr]
            lg:gap-16
            lg:pb-14
          "
        >
          <div>
            <span
              className="
                text-[11px]
                font-bold
                tracking-[0.28em]
                text-[#2f7d5c]
              "
            >
              04
            </span>

            <p
              className="
                mt-3
                text-[11px]
                font-bold
                tracking-[0.28em]
                text-slate-400
              "
            >
              WHY GLOBALATLAS
            </p>
          </div>

          <div>
            <h2
              className="
                max-w-3xl
                font-heading
                text-4xl
                font-black
                leading-[1.05]
                tracking-[-0.04em]
                text-[#132838]
                sm:text-5xl
                lg:text-6xl
              "
            >
              A clearer way to build
              <span className="text-[#2f7d5c]">
                {" "}global business connections.
              </span>
            </h2>

            <p
              className="
                mt-6
                max-w-2xl
                text-base
                leading-8
                text-slate-500
                lg:text-lg
              "
            >
              We focus on reducing uncertainty in international sourcing by
              helping businesses identify suitable opportunities, build
              reliable connections, and explore global trade with greater
              confidence.
            </p>
          </div>
        </div>

        {/* Advantages */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {advantages.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                className="
                  group
                  relative
                  min-h-[270px]
                  overflow-hidden
                  rounded-[22px]
                  border
                  border-slate-200
                  bg-white
                  p-7
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#2f7d5c]/30
                  hover:shadow-[0_20px_50px_rgba(19,40,56,0.08)]
                  lg:p-8
                "
              >
                {/* Card Number */}
                <span
                  className="
                    absolute
                    right-7
                    top-7
                    text-[11px]
                    font-bold
                    tracking-[0.2em]
                    text-slate-300
                  "
                >
                  {item.number}
                </span>

                {/* Icon */}
                <div
                  className="
                    flex
                    size-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[#eef7f2]
                    text-[#2f7d5c]
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                >
                  <Icon
                    className="size-7"
                    strokeWidth={1.7}
                  />
                </div>

                {/* Content */}
                <div className="mt-10">
                  <h3
                    className="
                      text-xl
                      font-bold
                      tracking-[-0.02em]
                      text-[#132838]
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      max-w-sm
                      text-sm
                      leading-7
                      text-slate-500
                    "
                  >
                    {item.description}
                  </p>
                </div>

                {/* Animated Bottom Line */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-8
                    h-[2px]
                    w-0
                    bg-[#2f7d5c]
                    transition-all
                    duration-500
                    group-hover:w-14
                  "
                />
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}