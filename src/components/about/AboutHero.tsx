import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import Container from "@/components/ui/container/Container";
import { Button } from "@/components/ui/buttons/button";

export default function AboutHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f7f8f7]">
      {/* Subtle Grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-50
          [background-image:linear-gradient(rgba(19,40,56,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(19,40,56,0.04)_1px,transparent_1px)]
          [background-size:72px_72px]
        "
      />

      {/* Soft Green Glow */}
      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-0
          h-[500px]
          w-[500px]
          rounded-full
          bg-emerald-200/15
          blur-[140px]
        "
      />

      <Container>
        <div
          className="
            relative
            flex
            min-h-screen
            flex-col
            items-center
            justify-center
            pt-24
            pb-16
            text-center
          "
        >
          {/* Main Content */}
          <div className="flex w-full max-w-6xl flex-col items-center">
            {/* Section Label */}
            <div className="mb-8 flex items-center justify-center gap-4">
              <span className="text-[11px] font-bold tracking-[0.28em] text-[#2f7d5c]">
                01
              </span>

              <span className="h-px w-10 bg-[#2f7d5c]/40" />

              <span className="text-[11px] font-bold tracking-[0.28em] text-[#2f7d5c]">
                GLOBAL CONNECTIONS
              </span>
            </div>

            {/* Heading */}
            <h1
              className="
                font-heading
                text-5xl
                font-black
                leading-[0.92]
                tracking-[-0.065em]
                sm:text-6xl
                md:text-7xl
                lg:text-8xl
              "
            >
              <span className="block">
                <span className="text-[#132838]">
                  Beyond{" "}
                </span>

                <span
                  className="
                    text-transparent
                    [-webkit-text-stroke:1.5px_#132838]
                  "
                >
                  borders.
                </span>
              </span>

              <span className="mt-1 block">
                <span className="text-[#2f7d5c]">
                  Better{" "}
                </span>

                <span
                  className="
                    text-transparent
                    [-webkit-text-stroke:1.5px_#2f7d5c]
                  "
                >
                  connections.
                </span>
              </span>
            </h1>

            {/* Description */}
            <p
              className="
                mt-8
                max-w-2xl
                text-base
                leading-8
                text-slate-500
                lg:text-lg
              "
            >
              GlobalAtlas Exim connects businesses with suitable suppliers,
              buyers, and international trade opportunities across global
              markets.
            </p>

            {/* CTA */}
            <div className="mt-8">
              <Link href="/request-quote">
                <Button
                  size="lg"
                  className="
                    group
                    h-14
                    rounded-xl
                    bg-[#132838]
                    px-7
                    text-sm
                    font-bold
                    shadow-none
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-[#2f7d5c]
                  "
                >
                  Start a Conversation

                  <ArrowUpRight
                    className="
                      ml-3
                      size-4
                      transition-transform
                      duration-300
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                    "
                  />
                </Button>
              </Link>
            </div>
          </div>

          {/* Bottom Indicator */}
          <div
            className="
              absolute
              bottom-8
              left-0
              right-0
              flex
              items-center
              justify-between
              border-t
              border-slate-300/70
              pt-5
              text-[10px]
              font-bold
              tracking-[0.22em]
            "
          >
            <span className="text-slate-400">
              INDIA → GLOBAL MARKETS
            </span>

            <span className="hidden text-[#2f7d5c] sm:block">
              IMPORT · EXPORT · SOURCING
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}