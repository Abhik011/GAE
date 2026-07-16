import Container from "@/components/ui/container/Container";
import SectionHeader from "@/components/sections/SectionHeader";

import { industries } from "@/data/industries";

import IndustryCard from "./IndustryCard";

export default function Industries() {
  return (
    <section className="py-28 bg-slate-50">

      <Container>

        <SectionHeader
          badge="Industries"
          title="Serving Diverse Industries Worldwide"
          description="From manufacturing to healthcare, GlobalAtlas Exim delivers reliable sourcing and export solutions tailored to your industry."
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
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