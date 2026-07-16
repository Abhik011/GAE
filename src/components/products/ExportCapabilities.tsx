import Container from "@/components/ui/container/Container";
import SectionHeader from "@/components/sections/SectionHeader";

import { capabilities } from "@/data/capabilities";

import CapabilityCard from "./CapabilityCard";

export default function ExportCapabilities() {
  return (
    <section className="bg-slate-50 py-28">

      <Container>

        <SectionHeader
          badge="Capabilities"
          title="Complete Export Solutions"
          description="From sourcing and manufacturing to logistics and delivery, GlobalAtlas Exim provides end-to-end export services for businesses worldwide."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {capabilities.map((item) => (
            <CapabilityCard
              key={item.title}
              {...item}
            />
          ))}

        </div>

        {/* Statistics */}

        <div
          className="
            mt-24

            rounded-[36px]

            bg-primary

            p-12

            text-white
          "
        >
          <div className="grid gap-10 text-center md:grid-cols-4">

            <div>
              <h3 className="text-5xl font-black">
                50+
              </h3>

              <p className="mt-3 text-white/80">
                Export Markets
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black">
                500+
              </h3>

              <p className="mt-3 text-white/80">
                Product Categories
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black">
                100%
              </h3>

              <p className="mt-3 text-white/80">
                Verified Suppliers
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black">
                24/7
              </h3>

              <p className="mt-3 text-white/80">
                Customer Support
              </p>
            </div>

          </div>
        </div>

      </Container>

    </section>
  );
}