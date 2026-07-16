import Container from "@/components/ui/container/Container";
import SectionHeader from "@/components/sections/SectionHeader";

import { certifications } from "@/data/certifications";

import CertificationCard from "./CertificationCard";

export default function Certifications() {
  return (
    <section
      className="
        relative
        overflow-hidden

        bg-slate-50

        py-28
      "
    >
      {/* Background */}

      <div
        className="
          absolute

          left-1/2
          top-0

          h-[500px]
          w-[500px]

          -translate-x-1/2

          rounded-full

          bg-primary/5

          blur-[120px]
        "
      />

      <Container>

        <SectionHeader
          badge="Compliance"
          title="Certifications & Compliance"
          description="
          We follow recognized compliance standards and export best
          practices to ensure secure, transparent, and reliable
          international trade.
          "
        />

        <div
          className="
            relative

            mt-16

            grid

            gap-8

            md:grid-cols-2

            xl:grid-cols-3
          "
        >
          {certifications.map((item) => (
            <CertificationCard
              key={item.title}
              {...item}
            />
          ))}
        </div>

        {/* Bottom Note */}

        <div
          className="
            mx-auto

            mt-20

            max-w-4xl

            rounded-[32px]

            border

            border-primary/10

            bg-white

            px-10

            py-8

            text-center

            shadow-lg
          "
        >
          <h3 className="text-2xl font-bold">
            Trusted Export Partner
          </h3>

          <p className="mt-4 leading-8 text-slate-600">
            Every shipment is supported with proper documentation,
            supplier verification, quality assurance, and
            international trade compliance to deliver a smooth
            sourcing experience for buyers worldwide.
          </p>
        </div>

      </Container>
    </section>
  );
}