import Container from "@/components/ui/container/Container";
import SectionHeader from "@/components/sections/SectionHeader";

import { whyChoose } from "@/data/why-choose";

import WhyChooseCard from "./WhyChooseCard";

export default function WhyChoose() {
  return (
    <section className="bg-slate-50 py-28">
      <Container>

        <SectionHeader
          badge="Why GlobalAtlas Exim"
          title="Built on Trust, Quality & Reliability"
          description="Our end-to-end export services help businesses source confidently from India with complete transparency."
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {whyChoose.map((item) => (
            <WhyChooseCard
              key={item.title}
              {...item}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}