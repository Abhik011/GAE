import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Container from "@/components/ui/container/Container";
import { Button } from "@/components/ui/buttons/button";

export default function QuoteCTA() {
  return (
    <section className="border-t border-slate-200 bg-white py-16 lg:py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-[11px] font-bold tracking-[0.25em] text-[#2f7d5c]">
            START SOURCING
          </span>

          <h2 className="mt-4 font-heading text-3xl font-black tracking-[-0.03em] text-[#132838] sm:text-4xl lg:text-5xl">
            Ready to source from India?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
            Share your requirements and we'll help you find suitable
            manufacturers.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link href="#quote-form">
              <Button
                size="lg"
                className="h-11 rounded-xl bg-[#2f7d5c] px-5 text-white hover:bg-[#256b4e]"
              >
                Request a Quote
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </Link>

            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="h-11 rounded-xl border-slate-300 bg-white px-5 text-[#132838] hover:border-[#2f7d5c] hover:text-[#2f7d5c]"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}