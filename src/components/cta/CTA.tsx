import {
  BadgeCheck,
  Globe2,
  Ship,
} from "lucide-react";

import Container from "@/components/ui/container/Container";

import CTAButtons from "./CTAButtons";

export default function CTA() {
  return (
    <section className="py-28">

      <Container>

        <div
          className="
            overflow-hidden

            rounded-[40px]

            bg-gradient-to-br

            from-primary

            via-blue-700

            to-sky-700

            px-8

            py-20

            text-center

            text-white

            lg:px-20
          "
        >

          <span className="inline-flex rounded-full bg-white/15 px-5 py-2 text-sm font-semibold backdrop-blur">
            Let's Work Together
          </span>

          <h2 className="mx-auto mt-8 max-w-4xl font-heading text-5xl font-extrabold leading-tight lg:text-6xl">

            Ready to Expand
            <br />
            Your Business Globally?

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/80">

            Connect with verified Indian manufacturers and simplify
            sourcing, exports, logistics, and international trade through
            GlobalAtlas Exim.

          </p>

          <CTAButtons />

          <div className="mt-14 flex flex-wrap justify-center gap-10">

            <div className="flex items-center gap-3">

              <BadgeCheck className="size-5" />

              Verified Suppliers

            </div>

            <div className="flex items-center gap-3">

              <Ship className="size-5" />

              Global Shipping

            </div>

            <div className="flex items-center gap-3">

              <Globe2 className="size-5" />

              Export Support

            </div>

          </div>

        </div>

      </Container>

    </section>
  );
}