import Container from "@/components/ui/container/Container";

import CompanyFeatures from "./CompanyFeatures";
import CompanyImage from "./CompanyImage";

export default function CompanyIntro() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-24">
      <Container>
        {/* Section heading */}
        <div className="mb-12 flex items-start gap-6 lg:mb-16 lg:gap-14">
          <span
            className="
              pt-1
              text-[11px]
              font-bold
              tracking-[0.28em]
              text-[#2f7d5c]
            "
          >
            02
          </span>

          <div>
            <p
              className="
                text-[11px]
                font-bold
                tracking-[0.28em]
                text-[#2f7d5c]
              "
            >
              WHO WE ARE
            </p>

            <h2
              className="
                mt-5
                max-w-3xl
                font-heading
                text-4xl
                font-black
                leading-[1.05]
                tracking-[-0.04em]
                text-[#132838]
                sm:text-5xl
                lg:text-6xl
              "
            >
              Built around meaningful
              <span className="text-[#2f7d5c]"> business connections.</span>
            </h2>
          </div>
        </div>

        {/* Content */}
        <div
          className="
            grid
            items-center
            gap-12
            border-t
            border-slate-200
            pt-12
            lg:grid-cols-[1.05fr_0.95fr]
            lg:gap-20
            lg:pt-16
          "
        >
          <CompanyFeatures />

          <CompanyImage />
        </div>
      </Container>
    </section>
  );
}