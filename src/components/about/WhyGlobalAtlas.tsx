import Container from "@/components/ui/container/Container";
import SectionHeader from "@/components/sections/SectionHeader";

import ComparisonTable from "./ComparisonTable";
import WhyStats from "./WhyStats";

export default function WhyGlobalAtlas() {
  return (
    <section className="bg-slate-50 py-28">

      <Container>

        <SectionHeader
          badge="Why GlobalAtlas Exim"
          title="A Smarter Way to Source from India"
          description="We simplify global sourcing by replacing uncertainty with verified partnerships, quality assurance, and end-to-end export expertise."
        />

        <ComparisonTable />

        <WhyStats />

      </Container>

    </section>
  );
}