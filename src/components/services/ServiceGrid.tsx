import Container from "@/components/ui/container/Container";
import SectionHeader from "@/components/sections/SectionHeader";

import { services } from "@/data/services";

import ServiceCard from "./ServiceCard";

export default function ServicesGrid() {
  return (
    <section className="py-28">

      <Container>

        <SectionHeader
          badge="What We Do"
          title="Comprehensive Export & Sourcing Services"
          description="From supplier discovery to global delivery, GlobalAtlas Exim manages every stage of your international sourcing journey."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {services.map((service) => (
            <ServiceCard
              key={service.title}
              {...service}
            />
          ))}

        </div>

      </Container>

    </section>
  );
}