import Container from "@/components/ui/container/Container";
import SectionHeader from "@/components/sections/SectionHeader";

import { qualitySteps } from "@/data/quality";

import QualityCard from "./QualityCard";

export default function QualityAssurance() {
  return (
    <section className="py-28">

      <Container>

        <SectionHeader
          badge="Quality"
          title="Committed to Quality at Every Step"
          description="Every shipment goes through a structured quality assurance process to ensure reliability, compliance, and customer satisfaction."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {qualitySteps.map((step) => (
            <QualityCard
              key={step.title}
              {...step}
            />
          ))}
        </div>

        <div
          className="
            mt-20
            rounded-[36px]
            border
            border-primary/10
            bg-gradient-to-r
            from-primary
            to-sky-700
            p-10
            text-white
          "
        >
          <div className="grid items-center gap-10 lg:grid-cols-2">

            <div>
              <h3 className="text-3xl font-bold">
                Quality is Our Commitment
              </h3>

              <p className="mt-5 text-lg leading-8 text-white/80">
                From supplier verification to export documentation,
                GlobalAtlas Exim follows a transparent quality process that
                helps buyers source confidently from India.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">

              <div>
                <h4 className="text-5xl font-black">100%</h4>
                <p className="mt-2 text-white/80">
                  Verified Suppliers
                </p>
              </div>

              <div>
                <h4 className="text-5xl font-black">24/7</h4>
                <p className="mt-2 text-white/80">
                  Export Assistance
                </p>
              </div>

            </div>

          </div>
        </div>

      </Container>
    </section>
  );
}