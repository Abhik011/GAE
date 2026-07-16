import Container from "@/components/ui/container/Container";
import SectionHeader from "@/components/sections/SectionHeader";

import { exportProcess } from "@/data/export-process";

import ProcessCard from "./ProcessCard";

export default function ExportProcess() {
  return (
    <section className="py-28">

      <Container>

        <SectionHeader
          badge="Export Process"
          title="Simple, Transparent & Reliable"
          description="From inquiry to final delivery, GlobalAtlas Exim manages every step of the export journey."
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {exportProcess.map((step) => (
            <ProcessCard
              key={step.step}
              {...step}
            />
          ))}

        </div>

      </Container>

    </section>
  );
}