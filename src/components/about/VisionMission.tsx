import Container from "@/components/ui/container/Container";
import SectionHeader from "@/components/sections/SectionHeader";

import VisionCard from "./VisionCard";
import MissionCard from "./MissionCard";

export default function VisionMission() {
  return (
    <section className="py-28">

      <Container>

        <SectionHeader
          badge="Our Purpose"
          title="Driving the Future of Global Trade"
          description="Our vision and mission guide every partnership we build and every shipment we help deliver."
        />

        <div className="grid gap-8 lg:grid-cols-2">

          <VisionCard />

          <MissionCard />

        </div>

      </Container>

    </section>
  );
}