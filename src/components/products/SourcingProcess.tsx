import Container from "@/components/ui/container/Container";

import { sourcingProcess } from "@/data/sourcing-process";

import ProcessCard from "./ProcessCard";

export default function SourcingProcess() {
  return (
    <section className="bg-[#f7f8f7] py-24 lg:py-32">
      <Container>
        {/* Section Header */}

        <div className="border-b border-slate-200 pb-10 lg:pb-14">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
            {/* Label */}

            <div>
              <div className="flex items-center gap-4">
                <span className="text-[11px] font-bold tracking-[0.28em] text-[#2f7d5c]">
                  04
                </span>

                <span className="h-px w-10 bg-[#2f7d5c]/30" />

                <span className="text-[11px] font-bold tracking-[0.28em] text-slate-400">
                  HOW IT WORKS
                </span>
              </div>
            </div>

            {/* Content */}

            <div>
              <h2
                className="
                  max-w-4xl
                  font-heading
                  text-4xl
                  font-black
                  leading-[1.02]
                  tracking-[-0.045em]
                  text-[#132838]
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                From inquiry to
                <span className="text-[#2f7d5c]">
                  {" "}global delivery.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-500 lg:text-lg">
                A clear sourcing process designed to help businesses move
                from product requirements to international trade with greater
                confidence.
              </p>
            </div>
          </div>
        </div>

        {/* Process Steps */}

        <div className="mt-12 grid gap-x-10 md:grid-cols-2 xl:grid-cols-3">
          {sourcingProcess.map((item) => (
            <ProcessCard
              key={item.step}
              {...item}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}