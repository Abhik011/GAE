import Link from "next/link";

import {
  ArrowUpRight,
  BadgeCheck,
  FileCheck2,
  Globe2,
  Ship,
} from "lucide-react";

import Container from "@/components/ui/container/Container";
import { Button } from "@/components/ui/buttons/button";

const features = [
  {
    icon: BadgeCheck,
    label: "Verified Connections",
  },
  {
    icon: FileCheck2,
    label: "Trade Support",
  },
  {
    icon: Ship,
    label: "Global Opportunities",
  },
  {
    icon: Globe2,
    label: "International Network",
  },
];

export default function AboutCTA() {
  return (
    <section className="bg-[#f7faf8] py-20 lg:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[32px] bg-[#132838] px-6 py-12 sm:px-10 lg:px-16 lg:py-16">
          
          {/* Minimal decorative elements */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/[0.06]" />
          <div className="pointer-events-none absolute -right-8 -top-8 h-48 w-48 rounded-full border border-white/[0.06]" />

          <div className="relative">
            
            {/* Top label */}
            <div className="flex items-center gap-4">
              <span className="text-[11px] font-bold tracking-[0.28em] text-[#78d8a7]">
                06
              </span>

              <span className="h-px w-10 bg-white/15" />

              <span className="text-[11px] font-bold tracking-[0.22em] text-white/45">
                LET&apos;S CONNECT
              </span>
            </div>

            <div className="mt-10 grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
              
              {/* Content */}
              <div>
                <h2
                  className="
                    max-w-3xl
                    font-heading
                    text-4xl
                    font-black
                    leading-[1.05]
                    tracking-[-0.04em]
                    text-white
                    sm:text-5xl
                    lg:text-6xl
                  "
                >
                  Let&apos;s explore
                  <br />

                  <span className="text-[#78d8a7]">
                    global opportunities.
                  </span>
                </h2>

                <p className="mt-6 max-w-xl text-base leading-8 text-white/60 lg:text-lg">
                  Looking to connect with suitable suppliers, buyers, or
                  international business opportunities? Start a conversation
                  with GlobalAtlas Exim.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/request-quote">
                    <Button
                      size="lg"
                      className="
                        h-12
                        rounded-xl
                        bg-[#2f7d5c]
                        px-6
                        text-sm
                        font-semibold
                        text-white
                        shadow-none
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:bg-[#25684c]
                      "
                    >
                      Start a Conversation

                      <ArrowUpRight className="ml-2 size-4" />
                    </Button>
                  </Link>

                  <Link href="/contact">
                    <Button
                      size="lg"
                      variant="outline"
                      className="
                        h-12
                        rounded-xl
                        border-white/15
                        bg-transparent
                        px-6
                        text-sm
                        font-semibold
                        text-white
                        transition-all
                        duration-300
                        hover:border-white/30
                        hover:bg-white/5
                        hover:text-white
                      "
                    >
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Trust points */}
              <div className="grid grid-cols-2 gap-x-5 gap-y-6 border-t border-white/10 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                {features.map((feature) => {
                  const Icon = feature.icon;

                  return (
                    <div key={feature.label}>
                      <Icon className="size-5 text-[#78d8a7]" />

                      <p className="mt-3 text-sm font-semibold leading-6 text-white/80">
                        {feature.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}