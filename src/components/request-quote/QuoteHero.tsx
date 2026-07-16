import Link from "next/link";

import {
  ArrowRight,
  BadgeCheck,
  Clock3,
  Globe2,
  ShieldCheck,
} from "lucide-react";

import Container from "@/components/ui/container/Container";
import { Button } from "@/components/ui/buttons/button";

const highlights = [
  "Verified Indian Manufacturers",
  "Fast & Competitive Quotations",
  "Quality Assurance",
  "Worldwide Export Support",
];

const stats = [
  {
    icon: Globe2,
    value: "50+",
    label: "Export Markets",
  },
  {
    icon: BadgeCheck,
    value: "500+",
    label: "Verified Suppliers",
  },
  {
    icon: Clock3,
    value: "24-48 hrs",
    label: "Quote Response",
  },
];

export default function QuoteHero() {
  return (
    <section className="relative overflow-hidden bg-slate-50 pt-40 pb-32">

      {/* Background */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,.08),transparent_35%)]" />

      <div className="absolute -left-48 top-0 h-[420px] w-[420px] rounded-full bg-primary/10 blur-[120px]" />

      <div className="absolute -right-48 bottom-0 h-[420px] w-[420px] rounded-full bg-sky-500/10 blur-[120px]" />

      <Container>

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* Left */}

          <div>

            <span
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-primary/10
                px-5
                py-2
                text-sm
                font-semibold
                uppercase
                tracking-[0.18em]
                text-primary
              "
            >
              <BadgeCheck className="size-4" />

              Request a Quote

            </span>

            <h1
              className="
                mt-8
                font-heading
                text-5xl
                font-black
                leading-tight
                lg:text-7xl
              "
            >
              Source Quality Products

              <span className="block text-primary">
                From Trusted Indian Manufacturers
              </span>

            </h1>

            <p
              className="
                mt-8
                max-w-2xl
                text-lg
                leading-8
                text-muted-foreground
              "
            >
              Share your sourcing requirements and receive competitive
              quotations from verified manufacturers. We manage supplier
              selection, quality assurance, documentation, and global
              logistics to simplify international procurement.
            </p>

            {/* Highlights */}

            <div className="mt-10 grid gap-4 sm:grid-cols-2">

              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <div className="rounded-full bg-primary/10 p-2 text-primary">
                    <ShieldCheck className="size-4" />
                  </div>

                  <span className="font-medium">
                    {item}
                  </span>

                </div>
              ))}

            </div>

            {/* CTA */}

            <div className="mt-12 flex flex-wrap gap-5">

              <Link href="#quote-form">

                <Button
                  size="lg"
                  className="h-14 rounded-2xl px-8"
                >
                  Get My Quote

                  <ArrowRight className="ml-2 size-5" />

                </Button>

              </Link>

              <Link href="/contact">

                <Button
                  variant="outline"
                  size="lg"
                  className="h-14 rounded-2xl px-8"
                >
                  Talk to an Expert
                </Button>

              </Link>

            </div>

          </div>

          {/* Right */}

          <div>

            <div
              className="
                rounded-[36px]
                border
                border-border
                bg-white
                p-10
                shadow-2xl
              "
            >
              <h2 className="text-3xl font-bold">
                Why Request a Quote?
              </h2>

              <div className="mt-10 space-y-8">

                {stats.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-6"
                    >
                      <div
                        className="
                          flex
                          h-16
                          w-16
                          items-center
                          justify-center
                          rounded-2xl
                          bg-primary/10
                          text-primary
                        "
                      >
                        <Icon className="size-8" />
                      </div>

                      <div>

                        <h3 className="text-3xl font-black">
                          {item.value}
                        </h3>

                        <p className="mt-1 text-muted-foreground">
                          {item.label}
                        </p>

                      </div>

                    </div>
                  );
                })}

              </div>

              <div
                className="
                  mt-10
                  rounded-3xl
                  bg-primary
                  p-8
                  text-white
                "
              >
                <h3 className="text-2xl font-bold">
                  Fast Response
                </h3>

                <p className="mt-4 leading-8 text-white/80">
                  Submit your sourcing request today. Our team will review
                  your requirements and connect you with suitable suppliers
                  as quickly as possible.
                </p>

              </div>

            </div>

          </div>

        </div>

      </Container>

    </section>
  );
}