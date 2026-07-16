import Link from "next/link";

import {
  ArrowRight,
  Building2,
  Globe2,
  ShieldCheck,
  Truck,
} from "lucide-react";

import Container from "@/components/ui/container/Container";
import { Button } from "@/components/ui/buttons/button";

const features = [
  {
    icon: ShieldCheck,
    title: "Verified Manufacturers",
  },
  {
    icon: Globe2,
    title: "Worldwide Export",
  },
  {
    icon: Truck,
    title: "End-to-End Logistics",
  },
  {
    icon: Building2,
    title: "Dedicated Sourcing Team",
  },
];

export default function ProductsCTA() {
  return (
    <section className="relative overflow-hidden py-32">

      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-br from-primary via-[#1557B0] to-[#0F3D7A]" />

      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

      <Container>

        <div className="relative">

          <div className="mx-auto max-w-5xl text-center">

            <span
              className="
                inline-flex

                rounded-full

                border

                border-white/20

                bg-white/10

                px-5

                py-2

                text-sm

                font-semibold

                uppercase

                tracking-[0.18em]

                text-white
              "
            >
              Ready To Start?
            </span>

            <h2
              className="
                mt-8

                font-heading

                text-5xl

                font-black

                leading-tight

                text-white

                lg:text-7xl
              "
            >
              Let's Build Your
              <br />

              Global Supply Chain
            </h2>

            <p
              className="
                mx-auto

                mt-8

                max-w-3xl

                text-xl

                leading-9

                text-white/80
              "
            >
              Whether you're sourcing products from India or looking
              to expand your manufacturing business globally,
              GlobalAtlas Exim is ready to become your trusted export partner.
            </p>

            {/* Buttons */}

            <div className="mt-14 flex flex-wrap justify-center gap-5">

              <Link href="/request-quote">

                <Button
                  size="lg"
                  className="
                    h-14

                    rounded-2xl

                    bg-white

                    px-8

                    text-primary

                    hover:bg-white/90
                  "
                >
                  Request a Quote

                  <ArrowRight className="ml-2 size-5" />

                </Button>

              </Link>

              <Link href="/become-supplier">

                <Button
                  size="lg"
                  variant="outline"
                  className="
                    h-14

                    rounded-2xl

                    border-white/30

                    bg-transparent

                    px-8

                    text-white

                    hover:bg-white

                    hover:text-primary
                  "
                >
                  Become a Supplier
                </Button>

              </Link>

            </div>

          </div>

          {/* Trust Cards */}

          <div className="mt-24 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="
                    rounded-[28px]

                    border

                    border-white/10

                    bg-white/10

                    p-7

                    text-center

                    backdrop-blur-xl

                    transition-all

                    duration-300

                    hover:bg-white/15
                  "
                >
                  <div
                    className="
                      mx-auto

                      flex

                      h-16

                      w-16

                      items-center

                      justify-center

                      rounded-2xl

                      bg-white/10

                      text-white
                    "
                  >
                    <Icon className="size-8" />
                  </div>

                  <h3 className="mt-6 text-lg font-semibold text-white">
                    {feature.title}
                  </h3>

                </div>
              );
            })}

          </div>

        </div>

      </Container>

    </section>
  );
}