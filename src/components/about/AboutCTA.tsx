import Link from "next/link";

import {
  ArrowRight,
  BadgeCheck,
  FileCheck2,
  Globe2,
  Ship,
} from "lucide-react";

import Container from "@/components/ui/container/Container";
import { Button } from "@/components/ui/buttons/button";

const features = [
  "Verified Manufacturers",
  "Export Documentation",
  "Global Logistics",
  "Dedicated Support",
];

const icons = [
  BadgeCheck,
  FileCheck2,
  Ship,
  Globe2,
];

export default function AboutCTA() {
  return (
    <section className="relative overflow-hidden py-32">

      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-br from-primary via-[#1B4D9A] to-[#0F3D7A]" />

      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

      <Container>

        <div className="relative text-center">

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
              tracking-[0.15em]
              text-white
            "
          >
            Let's Work Together
          </span>

          <h2
            className="
              mx-auto
              mt-8
              max-w-4xl
              font-heading
              text-5xl
              font-black
              leading-tight
              text-white
              lg:text-6xl
            "
          >
            Ready to Expand
            <br />

            Your Business Globally?
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
            Partner with GlobalAtlas Exim to source from verified
            Indian manufacturers, simplify international trade,
            and grow your business with confidence.
          </p>

          {/* Buttons */}

          <div className="mt-12 flex flex-wrap justify-center gap-5">

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
                Request Quote

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

          {/* Features */}

          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {features.map((feature, index) => {
              const Icon = icons[index];

              return (
                <div
                  key={feature}
                  className="
                    rounded-3xl

                    border

                    border-white/10

                    bg-white/10

                    p-6

                    backdrop-blur-xl
                  "
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">

                    <Icon className="size-7 text-white" />

                  </div>

                  <h3 className="mt-5 font-semibold text-white">
                    {feature}
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