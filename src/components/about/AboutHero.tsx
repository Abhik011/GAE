import Link from "next/link";

import Container from "@/components/ui/container/Container";
import { Button } from "@/components/ui/buttons/button";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-slate-50 pt-40 pb-24">
      <Container>

        <div className="mx-auto max-w-4xl text-center">

          <span className="inline-flex rounded-full bg-primary/10 px-5 py-2 text-sm font-semibold tracking-[0.15em] uppercase text-primary">
            About GlobalAtlas Exim
          </span>

          <h1 className="mt-8 font-heading text-5xl font-black leading-tight lg:text-7xl">

            Connecting Indian Excellence

            <span className="block text-primary">
              with Global Opportunities.
            </span>

          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-muted-foreground">

            GlobalAtlas Exim is a trusted export sourcing partner
            helping international buyers connect with verified
            Indian manufacturers through quality, transparency,
            and reliable logistics.

          </p>

          <div className="mt-10">
            <Link href="/request-quote">
              <Button
                size="lg"
                className="rounded-2xl px-8"
              >
                Request Quote
              </Button>
            </Link>
          </div>

        </div>

      </Container>
    </section>
  );
}