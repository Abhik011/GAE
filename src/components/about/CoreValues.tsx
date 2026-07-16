import Container from "@/components/ui/container/Container";
import SectionHeader from "@/components/sections/SectionHeader";

import { values } from "@/data/values";

import ValueCard from "./ValueCard";

export default function CoreValues() {
  return (
    <section className="py-28">

      <Container>

        <SectionHeader
          badge="Core Values"
          title="The Principles Behind Every Partnership"
          description="These values shape every decision we make, every manufacturer we work with, and every buyer we serve."
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {values.map((value) => (
            <ValueCard
              key={value.title}
              {...value}
            />
          ))}

        </div>

      </Container>

    </section>
  );
}