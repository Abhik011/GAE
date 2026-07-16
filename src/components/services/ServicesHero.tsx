import Link from "next/link";

import {
  ArrowRight,
  BadgeCheck,
  Factory,
  Globe2,
  ShieldCheck,
  Truck,
} from "lucide-react";

import Container from "@/components/ui/container/Container";
import { Button } from "@/components/ui/buttons/button";

const highlights = [
  {
    icon: Factory,
    title: "Verified Manufacturers",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
  },
  {
    icon: Truck,
    title: "Global Logistics",
  },
  {
    icon: Globe2,
    title: "Worldwide Export",
  },
];

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-slate-50 pt-40 pb-28">

      {/* Background */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,.08),transparent_35%)]" />

      <div className="absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-primary/10 blur-[120px]" />

      <div className="absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-sky-500/10 blur-[120px]" />

      <Container>

        <div className="mx-auto max-w-5xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary">

            <BadgeCheck className="size-4" />

            Our Services

          </span>

          <h1 className="mt-8 font-heading text-5xl font-black leading-tight lg:text-7xl">

            End-to-End

            <span className="block text-primary">

              Export & Sourcing Solutions

            </span>

          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-muted-foreground">

            GlobalAtlas Exim simplifies international sourcing by connecting
            global buyers with verified Indian manufacturers while
            managing quality, documentation, logistics, and export
            operations from start to finish.

          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <Link href="/request-quote">

              <Button
                size="lg"
                className="h-14 rounded-2xl px-8"
              >
                Request Quote

                <ArrowRight className="ml-2 size-5" />

              </Button>

            </Link>

            <Link href="/become-supplier">

              <Button
                variant="outline"
                size="lg"
                className="h-14 rounded-2xl px-8"
              >
                Become Supplier
              </Button>

            </Link>

          </div>

        </div>

        {/* Highlights */}

        <div className="mt-24 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  rounded-[30px]
                  border
                  border-border
                  bg-white
                  p-8
                  text-center
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-primary/20
                  hover:shadow-xl
                "
              >

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">

                  <Icon className="size-8" />

                </div>

                <h3 className="mt-6 text-xl font-bold">

                  {item.title}

                </h3>

              </div>
            );
          })}

        </div>

      </Container>

    </section>
  );
}