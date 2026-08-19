import {
  ClipboardCheck,
  Cog,
  Factory,
  PackageCheck,
  Search,
  Ship,
} from "lucide-react";

import Container from "@/components/ui/container/Container";

const icons = [
  Search,
  Factory,
  ClipboardCheck,
  Cog,
  Ship,
  PackageCheck,
];

interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

interface IndustryProcessProps {
  title: string;
  process: ProcessStep[];
}

export default function IndustryProcess({
  title,
  process,
}: IndustryProcessProps) {
  return (
    <section className="border-t border-slate-200 bg-white py-20 lg:py-24">
      <Container>
        {/* Header */}

        <div className="max-w-3xl">
          <div className="flex items-center gap-4">
            <span className="text-[11px] font-bold tracking-[0.28em] text-[#2f7d5c]">
              PROCESS
            </span>

            <span className="h-px w-10 bg-[#2f7d5c]/30" />
          </div>

          <h2
            className="
              mt-5
              font-heading
              text-3xl
              font-black
              leading-[1.1]
              tracking-[-0.035em]
              text-[#132838]
              sm:text-4xl
              lg:text-5xl
            "
          >
            How we source
            <span className="block text-[#2f7d5c]">
              {title} products.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-500 lg:text-lg">
            A clear sourcing process from understanding your requirements
            to coordinating production, export, and delivery.
          </p>
        </div>

        {/* Process Grid */}

        <div
          className="
            mt-14
            grid
            overflow-hidden
            border
            border-slate-200
            bg-slate-200
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {process.map((item, index) => {
            const Icon = icons[index] ?? PackageCheck;

            return (
              <div
                key={item.step}
                className="
                  group
                  relative
                  min-h-[250px]
                  bg-white
                  p-7
                  transition-colors
                  duration-300
                  hover:bg-slate-50
                  sm:p-8
                "
              >
                {/* Top */}

                <div className="flex items-start justify-between gap-6">
                  <div
                    className="
                      flex
                      size-11
                      items-center
                      justify-center
                      rounded-full
                      bg-slate-50
                      text-slate-500
                      transition-colors
                      duration-300
                      group-hover:bg-[#2f7d5c]/10
                      group-hover:text-[#2f7d5c]
                    "
                  >
                    <Icon
                      className="size-5"
                      strokeWidth={1.5}
                    />
                  </div>

                  <span className="text-[10px] font-bold tracking-[0.2em] text-slate-300">
                    {item.step}
                  </span>
                </div>

                {/* Content */}

                <div className="mt-10">
                  <h3 className="font-heading text-xl font-bold tracking-[-0.02em] text-[#132838]">
                    {item.title}
                  </h3>

                  <p className="mt-3 max-w-md text-sm leading-7 text-slate-500">
                    {item.description}
                  </p>
                </div>

                {/* Hover Line */}

                <span
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-px
                    w-0
                    bg-[#2f7d5c]
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}