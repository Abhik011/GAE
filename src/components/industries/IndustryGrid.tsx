import Container from "@/components/ui/container/Container";
import SectionHeader from "@/components/sections/SectionHeader";

import { industries } from "@/data/industries";

import IndustryCard from "./IndustryCard";

export default function IndustryGrid() {
  return (
    <section className="py-28">

      <Container>

        <SectionHeader
          badge="Industries"
          title="Industries We Empower"
          description="Explore the industries we support through verified sourcing, export expertise, and reliable global supply chain solutions."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {industries.map((industry) => (
            <IndustryCard
              key={industry.slug}
              {...industry}
            />
          ))}

        </div>

      </Container>
    </section>
  );
}