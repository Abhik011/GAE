import Container from "@/components/ui/container/Container";

import { leadership } from "@/data/leadership";

import LeaderCard from "./LeaderCard";

export default function Leadership() {
  return (
    <section className="relative py-20 lg:py-24">
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
          {/* Number */}
          <div>
            <span
              className="
                text-[11px]
                font-bold
                tracking-[0.28em]
                text-[#2f7d5c]
              "
            >
              05
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
              LEADERSHIP
            </p>
          </div>

          {/* Content */}
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
              The people building
              <span className="text-[#2f7d5c]">
                {" "}connections beyond borders.
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
              GlobalAtlas Exim is focused on building trusted relationships
              between businesses, suppliers, and international markets through
              a practical and partnership-driven approach.
            </p>
          </div>
        </div>

        {/* Leadership Cards */}
        <div
          className="
            mt-10
            grid
            gap-4
            md:grid-cols-2
            lg:mt-14
          "
        >
          {leadership.map((leader) => (
            <LeaderCard
              key={leader.name}
              {...leader}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}