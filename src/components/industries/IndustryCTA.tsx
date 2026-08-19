import Link from "next/link";

import { ArrowRight } from "lucide-react";

import Container from "@/components/ui/container/Container";
import { Button } from "@/components/ui/buttons/button";

interface IndustryCTAProps {
  industry: {
    title: string;
  };
}

export default function IndustryCTA({
  industry,
}: IndustryCTAProps) {
  return (
    <section className="border-t border-slate-200 bg-white py-20 lg:py-24">
      <Container>
        <div
          className="
            flex
            flex-col
            gap-10
            border
            border-slate-200
            bg-slate-50
            p-8
            lg:flex-row
            lg:items-end
            lg:justify-between
            lg:p-12
          "
        >
          {/* Content */}

          <div className="max-w-2xl">
            <div className="flex items-center gap-4">
              <span className="text-[11px] font-bold tracking-[0.28em] text-[#2f7d5c]">
                GET STARTED
              </span>

              <span className="h-px w-10 bg-[#2f7d5c]/30" />
            </div>

            <h2
              className="
                mt-5
                font-heading
                text-3xl
                font-black
                leading-[1.1]
                tracking-[-0.035em]
                text-[#132838]
                sm:text-4xl
              "
            >
              Looking to source
              <span className="block text-[#2f7d5c]">
                {industry.title} products?
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-500">
              Share your product requirements, quantity, specifications, and
              destination market. Our team will review your inquiry and help
              identify suitable sourcing options.
            </p>
          </div>

          {/* Actions */}

          <div className="flex flex-wrap gap-3 lg:shrink-0">
            <Link href="/request-quote">
              <Button
                size="lg"
                className="h-12 rounded-xl px-6"
              >
                Request a Quote

                <ArrowRight className="ml-2 size-4" />
              </Button>
            </Link>

            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="h-12 rounded-xl border-slate-300 px-6"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}