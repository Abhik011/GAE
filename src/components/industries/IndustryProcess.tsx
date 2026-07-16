import {
  Search,
  Factory,
  ClipboardCheck,
  Cog,
  Ship,
  PackageCheck,
} from "lucide-react";

import Container from "@/components/ui/container/Container";
import SectionHeader from "@/components/sections/SectionHeader";

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
    <section className="bg-slate-50 py-28">

      <Container>

        <SectionHeader
          badge="Our Process"
          title={`How We Deliver ${title} Products`}
          description="A transparent sourcing process designed to ensure quality, compliance, and timely delivery."
        />

        <div className="relative mt-20">

          {/* Timeline */}

          <div className="absolute left-8 top-10 bottom-10 hidden w-px bg-border lg:block" />

          <div className="space-y-8">

            {process.map((item, index) => {
              const Icon = icons[index] ?? PackageCheck;

              return (
                <div
                  key={item.step}
                  className="relative flex gap-8"
                >
                  {/* Icon */}

                  <div
                    className="
                      relative
                      z-10
                      flex
                      h-16
                      w-16
                      shrink-0
                      items-center
                      justify-center
                      rounded-2xl
                      bg-primary
                      text-white
                      shadow-lg
                    "
                  >
                    <Icon className="size-7" />
                  </div>

                  {/* Card */}

                  <div
                    className="
                      flex-1
                      rounded-[30px]
                      border
                      border-border
                      bg-white
                      p-8
                      shadow-sm
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-primary/20
                      hover:shadow-xl
                    "
                  >
                    <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                      Step {item.step}
                    </span>

                    <h3 className="mt-3 text-2xl font-bold">
                      {item.title}
                    </h3>

                    <p className="mt-4 leading-8 text-muted-foreground">
                      {item.description}
                    </p>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </Container>

    </section>
  );
}