import Link from "next/link";

import {
  ArrowRight,
  BadgeCheck,
  Globe2,
  ShieldCheck,
  Truck,
} from "lucide-react";

import Container from "@/components/ui/container/Container";
import { Button } from "@/components/ui/buttons/button";

const features = [
  {
    icon: BadgeCheck,
    title: "Verified Manufacturers",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assured",
  },
  {
    icon: Globe2,
    title: "Worldwide Export",
  },
  {
    icon: Truck,
    title: "End-to-End Logistics",
  },
];

export default function ServicesCTA() {
  return (
    <section className="relative overflow-hidden py-32">

      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-br from-primary via-[#1557B0] to-[#0F3D7A]" />

      <div className="absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-white/10 blur-[120px]" />

      <div className="absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-white/10 blur-[120px]" />

      <Container>

        <div className="relative">

          {/* Heading */}

          <div className="mx-auto max-w-4xl text-center">

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
              Let's Work Together
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
              Build a Smarter
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
              Whether you're sourcing products from India, expanding your
              supplier network, or launching an OEM product, GlobalAtlas Exim is
              ready to become your trusted sourcing and export partner.
            </p>

          </div>

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

            <Link href="/contact">

              <Button
                size="lg"
                variant="outline"
                className="
                  h-14
                  rounded-2xl
                  border-white/20
                  bg-transparent
                  px-8
                  text-white
                  hover:bg-white
                  hover:text-primary
                "
              >
                Schedule Consultation
              </Button>

            </Link>

          </div>

          {/* Trust Features */}

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
                    p-8
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