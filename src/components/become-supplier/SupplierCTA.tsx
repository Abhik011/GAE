import Link from "next/link";

import {
  ArrowRight,
  Globe2,
  ShieldCheck,
  Users,
  TrendingUp,
} from "lucide-react";

import Container from "@/components/ui/container/Container";
import { Button } from "@/components/ui/buttons/button";

const benefits = [
  {
    icon: Globe2,
    title: "Global Buyer Network",
    description: "Connect with qualified international buyers.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Supplier Program",
    description: "Build trust through supplier verification.",
  },
  {
    icon: TrendingUp,
    title: "Business Growth",
    description: "Expand your reach into new international markets.",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "Receive assistance throughout your partnership.",
  },
];

export default function SupplierCTA() {
  return (
    <section className="relative overflow-hidden py-32">

      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-br from-primary via-[#2563EB] to-[#1D4ED8]" />

      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-white/10 blur-[120px]" />

      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-white/10 blur-[120px]" />

      <Container>

        <div className="relative">

          {/* Heading */}

          <div className="mx-auto max-w-4xl text-center">

            <span
              className="
                inline-flex
                items-center
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
              Join GlobalAtlas Exim
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
              Grow Beyond Borders
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
              Become part of our verified supplier network and showcase your
              products to buyers across the world. We're looking for reliable
              manufacturers committed to quality, consistency, and long-term
              partnerships.
            </p>

          </div>

          {/* Buttons */}

          <div className="mt-14 flex flex-wrap justify-center gap-5">

            <Link href="#supplier-form">

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
                Complete Registration

                <ArrowRight className="ml-2 size-5" />

              </Button>

            </Link>

            <Link href="/contact">

              <Button
                variant="outline"
                size="lg"
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
                Contact Supplier Team
              </Button>

            </Link>

          </div>

          {/* Benefits */}

          <div className="mt-24 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            {benefits.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="
                    rounded-[30px]
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

                  <h3 className="mt-6 text-xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/75">
                    {item.description}
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