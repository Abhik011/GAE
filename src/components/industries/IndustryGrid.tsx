import Container from "@/components/ui/container/Container";
import SectionHeader from "@/components/sections/SectionHeader";

import { industries } from "@/data/industries";

import IndustryCard from "./IndustryCard";

export default function IndustryGrid() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <Container>
        <SectionHeader
          badge="Industries"
          title="Explore our industries."
          description="Discover sourcing and export opportunities across industries, connecting businesses with suitable Indian manufacturers and global markets."
        />

        <div
          className="
            mt-12
            grid
            gap-px
            overflow-hidden
            border
            border-slate-200
            bg-slate-200
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
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