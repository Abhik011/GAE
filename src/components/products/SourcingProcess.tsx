import Container from "@/components/ui/container/Container";
import SectionHeader from "@/components/sections/SectionHeader";

import { sourcingProcess } from "@/data/sourcing-process";

import ProcessCard from "./ProcessCard";

export default function SourcingProcess() {
  return (
    <section className="bg-slate-50 py-28">

      <Container>

        <SectionHeader
          badge="How It Works"
          title="Our Export Sourcing Process"
          description="From your first inquiry to final delivery, GlobalAtlas Exim manages every stage of the sourcing journey with transparency and reliability."
        />

        <div className="mx-auto mt-20 grid max-w-7xl gap-8 md:grid-cols-2 xl:grid-cols-3">

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