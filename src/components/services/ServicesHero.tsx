import Link from "next/link";

import { ArrowRight } from "lucide-react";

import Container from "@/components/ui/container/Container";
import { Button } from "@/components/ui/buttons/button";

const highlights = [
  "Verified Manufacturers",
  "Quality Support",
  "Export Documentation",
  "Logistics Coordination",
];

export default function ServicesHero() {
  return (
    <section className="relative flex min-h-screen overflow-hidden border-b border-slate-200 bg-slate-50">
      {/* Subtle Background */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(47,125,92,0.08),transparent_35%)]" />

      <div className="absolute -left-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[#2f7d5c]/5 blur-[100px]" />

      <Container>
        <div className="relative flex min-h-screen items-center justify-center py-28">
          <div className="mx-auto w-full max-w-4xl text-center">
            {/* Label */}

            <div className="flex items-center justify-center gap-4">
              <span className="text-[11px] font-bold tracking-[0.28em] text-[#2f7d5c]">
                SERVICES
              </span>

              <span className="h-px w-10 bg-[#2f7d5c]/30" />
            </div>

            {/* Heading */}

            <h1
              className="
                mt-6
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
              Sourcing and export
              <span
                className="
                  block
                  text-transparent
                  [-webkit-text-stroke:1.5px_#2f7d5c]
                "
              >
                support from India.
              </span>
            </h1>

            {/* Description */}

            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-500 lg:text-lg">
              We help international buyers connect with suitable Indian
              manufacturers and support key stages of the sourcing and export
              process.
            </p>

            {/* Actions */}

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link href="/request-quote">
                <Button
                  size="lg"
                  className="h-12 rounded-xl px-6"
                >
                  Request a Quote

                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </Link>

              <Link href="/become-supplier">
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 rounded-xl border-slate-300 px-6"
                >
                  Become a Supplier
                </Button>
              </Link>
            </div>

            {/* Highlights */}

            <div className="mx-auto mt-16 flex max-w-3xl flex-wrap justify-center gap-x-8 gap-y-4 border-t border-slate-200 pt-8">
              {highlights.map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-2 text-sm font-medium text-slate-500"
                >
                  <span className="size-1.5 shrink-0 rounded-full bg-[#2f7d5c]" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}