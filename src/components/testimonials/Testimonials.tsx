import Container from "@/components/ui/container/Container";
import SectionHeader from "@/components/sections/SectionHeader";

import { testimonials } from "@/data/testimonials";

import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-28">

      <Container>

        <SectionHeader
          badge="Testimonials"
          title="Building Trust Across Borders"
          description="Our goal is to become the preferred sourcing and export partner for businesses worldwide."
        />

        <div className="grid gap-8 lg:grid-cols-3">

          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.company + testimonial.country}
              {...testimonial}
            />
          ))}

        </div>

      </Container>

    </section>
  );
}