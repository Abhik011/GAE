import Container from "@/components/ui/container/Container";
import SectionHeader from "@/components/sections/SectionHeader";

import { industries } from "@/data/industries";

import IndustryCard from "./IndustryCard";

export default function Industries() {
  return (
    <section className="py-28">

      <Container>

        <SectionHeader
          badge="Industries"
          title="Industries We Serve"
          description="GlobalAtlas Exim supports businesses across a wide range of industries by connecting them with trusted Indian manufacturers and export-ready solutions."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {industries.map((industry) => (
            <IndustryCard
              key={industry.title}
              {...industry}
            />
          ))}

        </div>

      </Container>
    </section>
  );
}