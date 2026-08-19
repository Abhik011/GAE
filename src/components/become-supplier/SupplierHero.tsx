import Link from "next/link";

import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Globe2,
  Handshake,
  TrendingUp,
} from "lucide-react";

import Container from "@/components/ui/container/Container";
import { Button } from "@/components/ui/buttons/button";

const benefits = [
  {
    icon: Globe2,
    title: "Global Opportunities",
    description: "Connect with international sourcing opportunities.",
  },
  {
    icon: TrendingUp,
    title: "Business Growth",
    description: "Expand your reach beyond domestic markets.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnerships",
    description: "Build lasting relationships with global buyers.",
  },
];

const highlights = [
  "No Registration Fees",
  "Global Buyer Access",
  "OEM & Private Label Opportunities",
  "Long-Term Partnerships",
];

export default function SupplierHero() {
  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-20 lg:pt-40 lg:pb-28">
      {/* Subtle background */}

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(47,125,92,0.08),transparent_35%)]" />

      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#2f7d5c]/5 blur-[100px]" />

      <Container>
        <div className="relative grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left Content */}

          <div>
            <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.22em] text-[#2f7d5c]">
              <BadgeCheck className="size-4" />
              BECOME A SUPPLIER
            </span>

            <h1 className="mt-5 font-heading text-4xl font-black leading-[1.1] tracking-[-0.04em] text-[#132838] sm:text-5xl lg:text-6xl">
              Take Your Products
              <span className="block text-transparent [-webkit-text-stroke:1.5px_#2f7d5c]">
  Beyond Borders.
</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-500 lg:text-lg">
              Join the GlobalAtlas Exim supplier network and explore
              opportunities to connect with international buyers looking for
              reliable Indian manufacturers.
            </p>

            {/* Highlights */}

            <div className="mt-8 grid gap-x-6 gap-y-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm font-medium text-[#132838]"
                >
                  <CheckCircle2 className="size-4 shrink-0 text-[#2f7d5c]" />

                  {item}
                </div>
              ))}
            </div>

            {/* Actions */}

            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="#supplier-form">
                <Button
                  size="lg"
                  className="h-11 rounded-xl bg-[#2f7d5c] px-5 text-white hover:bg-[#256b4e]"
                >
                  Apply Now
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </Link>

              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="h-11 rounded-xl border-slate-300 px-5 text-[#132838] hover:border-[#2f7d5c] hover:text-[#2f7d5c]"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Card */}

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8 lg:p-10">
            <span className="text-[11px] font-bold tracking-[0.2em] text-[#2f7d5c]">
              SUPPLIER NETWORK
            </span>

            <h2 className="mt-3 text-2xl font-bold tracking-[-0.02em] text-[#132838] sm:text-3xl">
              Why partner with us?
            </h2>

            <p className="mt-4 leading-7 text-slate-500">
              We help manufacturers explore new international business
              opportunities and build stronger export relationships.
            </p>

            <div className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <div
                    key={benefit.title}
                    className="flex items-start gap-4 py-5"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#2f7d5c]/10 text-[#2f7d5c]">
                      <Icon className="size-5" />
                    </div>

                    <div>
                      <h3 className="font-semibold text-[#132838]">
                        {benefit.title}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-7 rounded-2xl border border-[#2f7d5c]/15 bg-white p-5">
              <p className="text-sm font-semibold text-[#132838]">
                Ready to get started?
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Submit your company details and product information. Our team
                will review your application and contact you about suitable
                opportunities.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}