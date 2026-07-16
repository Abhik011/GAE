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
    <section className="relative overflow-hidden bg-slate-50 pt-40 pb-28">

      {/* Background */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,.08),transparent_35%)]" />

      <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-primary/10 blur-[120px]" />

      <div className="absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-sky-500/10 blur-[120px]" />

      <Container>

        <div className="mx-auto max-w-5xl text-center">

          <span className="inline-flex rounded-full bg-primary/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Industries We Serve
          </span>

          <h1 className="mt-8 font-heading text-5xl font-black leading-tight lg:text-7xl">
            Export Solutions
            <span className="block text-primary">
              Across Multiple Industries
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-muted-foreground">
            GlobalAtlas Exim connects international buyers with trusted Indian
            manufacturers across agriculture, engineering, food processing,
            healthcare, construction, retail, hospitality, and many more
            industries.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <Link href="/products">
              <Button
                size="lg"
                className="h-14 rounded-2xl px-8"
              >
                Explore Products

                <ArrowRight className="ml-2 size-5" />
              </Button>
            </Link>

            <Link href="/request-quote">
              <Button
                variant="outline"
                size="lg"
                className="h-14 rounded-2xl px-8"
              >
                Request Quote
              </Button>
            </Link>

          </div>

        </div>

        {/* Stats */}

        <div className="mt-24 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="
                  rounded-[30px]
                  border
                  border-border
                  bg-white/70
                  p-8
                  text-center
                  shadow-sm
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-xl
                "
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="size-8" />
                </div>

                <h3 className="mt-6 text-4xl font-black">
                  {item.value}
                </h3>

                <p className="mt-2 text-muted-foreground">
                  {item.label}
                </p>

              </div>
            );
          })}

        </div>

      </Container>

    </section>
  );
}