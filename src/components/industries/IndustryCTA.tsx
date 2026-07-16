import Link from "next/link";

import {
  ArrowRight,
  Globe2,
  ShieldCheck,
  Factory,
  Truck,
} from "lucide-react";

import Container from "@/components/ui/container/Container";
import { Button } from "@/components/ui/buttons/button";

interface IndustryCTAProps {
  industry: {
    title: string;
  };
}

const features = [
  {
    icon: Factory,
    title: "Verified Manufacturers",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
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

export default function IndustryCTA({
  industry,
}: IndustryCTAProps) {
  return (
    <section className="relative overflow-hidden py-32">

      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-br from-primary via-[#1557B0] to-[#0F3D7A]" />

      <div className="absolute -left-48 top-0 h-[420px] w-[420px] rounded-full bg-white/10 blur-[120px]" />

      <div className="absolute -right-48 bottom-0 h-[420px] w-[420px] rounded-full bg-white/10 blur-[120px]" />

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
              Ready to Source?
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
              Source Premium
              <br />

              {industry.title} Products
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
              Connect with verified Indian manufacturers, receive
              competitive quotations, and let GlobalAtlas Exim manage
              quality assurance, export documentation, and international
              logistics from start to finish.
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
                Request Quote

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
                Talk to an Expert
              </Button>

            </Link>

          </div>

          {/* Features */}

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