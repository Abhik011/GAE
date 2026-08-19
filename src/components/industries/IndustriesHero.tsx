import Link from "next/link";

import {
  ArrowRight,
  Factory,
  Globe2,
  ShieldCheck,
  Truck,
} from "lucide-react";

import Container from "@/components/ui/container/Container";
import { Button } from "@/components/ui/buttons/button";

const stats = [
  {
    icon: Factory,
    value: "10+",
    label: "Industries",
  },
  {
    icon: Globe2,
    value: "Worldwide",
    label: "Export Support",
  },
  {
    icon: ShieldCheck,
    value: "Verified",
    label: "Manufacturers",
  },
  {
    icon: Truck,
    value: "End-to-End",
    label: "Logistics",
  },
];

export default function IndustriesHero() {
  return (
    <section className="relative overflow-hidden bg-[#f7f8f7]">
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

      <Container>
        <div
          className="
            relative
            flex
            min-h-screen
            flex-col
            justify-center
            py-28
            pt-36
            lg:py-20
            lg:pt-32
          "
        >
          {/* Hero Content */}
          <div className="mx-auto max-w-4xl text-center">
            {/* Label */}
            <div className="flex items-center justify-center gap-4">
              <span className="text-[11px] font-bold tracking-[0.28em] text-[#2f7d5c]">
                01
              </span>

              <span className="h-px w-10 bg-[#2f7d5c]/30" />

              <span className="text-[11px] font-bold tracking-[0.28em] text-slate-400">
                INDUSTRIES WE SERVE
              </span>
            </div>

            {/* Heading */}
            <h1
              className="
                mt-7
                font-heading
                text-4xl
                font-black
                leading-[1.02]
                tracking-[-0.045em]
                text-[#132838]
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
              "
            >
              Built for industry.
              <span
                className="
                  block
                  text-transparent
                  [-webkit-text-stroke:1.5px_#2f7d5c]
                "
              >
                Connect to markets.
              </span>
            </h1>

            {/* Description */}
            <p
              className="
                mx-auto
                mt-7
                max-w-2xl
                text-base
                leading-8
                text-slate-500
                lg:text-lg
              "
            >
              Explore sourcing and export opportunities across diverse
              industries, connecting global buyers with suitable Indian
              manufacturers and suppliers.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Link href="/products">
                <Button
                  size="lg"
                  className="
                    h-12
                    rounded-xl
                    bg-[#132838]
                    px-6
                    text-sm
                    font-semibold
                    transition-colors
                    hover:bg-[#2f7d5c]
                  "
                >
                  Explore Products
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </Link>

              <Link href="/request-quote">
                <Button
                  variant="outline"
                  size="lg"
                  className="
                    h-12
                    rounded-xl
                    border-slate-300
                    bg-transparent
                    px-6
                    text-sm
                    font-semibold
                    text-[#132838]
                    hover:border-[#2f7d5c]
                    hover:bg-transparent
                    hover:text-[#2f7d5c]
                  "
                >
                  Request Quote
                </Button>
              </Link>
            </div>
          </div>

          {/* Minimal Stats */}
          <div
            className="
              mx-auto
              mt-16
              grid
              w-full
              max-w-4xl
              grid-cols-2
              border-t
              border-slate-200
              md:grid-cols-4
            "
          >
            {stats.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="
                    group
                    border-b
                    border-slate-200
                    px-5
                    py-6
                    text-center
                    transition-colors
                    duration-300
                    md:border-b-0
                    md:border-r
                    md:last:border-r-0
                    hover:bg-[#2f7d5c]/[0.03]
                  "
                >
                  <Icon
                    className="
                      mx-auto
                      size-4
                      text-slate-400
                      transition-colors
                      duration-300
                      group-hover:text-[#2f7d5c]
                    "
                    strokeWidth={1.5}
                  />

                  <h3
                    className="
                      mt-3
                      text-lg
                      font-bold
                      tracking-[-0.02em]
                      text-[#132838]
                    "
                  >
                    {item.value}
                  </h3>

                  <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.14em] text-slate-400">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}