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
    title: "Quality Support",
  },
  {
    icon: Globe2,
    title: "Global Export",
  },
  {
    icon: Truck,
    title: "Logistics Coordination",
  },
];

export default function ServicesCTA() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-[#132838] px-6 py-14 sm:px-10 lg:px-16 lg:py-16">
          {/* Subtle background */}

          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(47,125,92,0.22),transparent_40%)]" />

          <div className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-[#2f7d5c]/10 blur-3xl" />

          <div className="relative mx-auto max-w-4xl text-center">
            {/* Label */}

            <div className="flex items-center justify-center gap-4">
              <span className="text-[11px] font-bold tracking-[0.28em] text-[#72b596]">
                LET&apos;S WORK TOGETHER
              </span>

              <span className="h-px w-10 bg-[#72b596]/40" />
            </div>

            {/* Heading */}

            <h2 className="mt-6 font-heading text-3xl font-black leading-[1.1] tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
              Build a stronger supply chain
              <span className="block text-[#72b596]">
                with the right support.
              </span>
            </h2>

            {/* Description */}

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              From supplier sourcing and verification to export coordination,
              GlobalAtlas Exim supports key stages of your international
              sourcing journey from India.
            </p>

            {/* Buttons */}

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/request-quote">
                <Button
                  size="lg"
                  className="h-12 rounded-xl bg-[#2f7d5c] px-6 text-white hover:bg-[#256b4e]"
                >
                  Request a Quote

                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </Link>

              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-xl border-white/20 bg-transparent px-6 text-white hover:bg-white hover:text-[#132838]"
                >
                  Talk to Us
                </Button>
              </Link>
            </div>

            {/* Trust points */}

            <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3 border-t border-white/10 pt-7">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="flex items-center gap-2 text-xs font-medium text-slate-300 sm:text-sm"
                  >
                    <Icon className="size-4 text-[#72b596]" />

                    <span>{feature.title}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}