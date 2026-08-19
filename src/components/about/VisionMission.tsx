import Container from "@/components/ui/container/Container";

import VisionCard from "./VisionCard";
import MissionCard from "./MissionCard";

export default function VisionMission() {
  return (
    <section className="relative py-20 lg:py-24">
      <Container>
        {/* Section Header */}
        <div className="grid gap-8 border-b border-slate-200 pb-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16 lg:pb-14">
          <div>
            <span
              className="
                text-[11px]
                font-bold
                tracking-[0.28em]
                text-[#2f7d5c]
              "
            >
              03
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
              OUR PURPOSE
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
              Building better connections for
              <span className="text-[#2f7d5c]">
                {" "}global trade.
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
              Our vision and mission shape how we approach partnerships,
              sourcing opportunities, and meaningful business connections
              across international markets.
            </p>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="mt-10 grid gap-px overflow-hidden rounded-[28px] border border-slate-200 bg-slate-200 lg:grid-cols-2">
  <VisionCard />
  <MissionCard />
</div>
      </Container>
    </section>
  );
}