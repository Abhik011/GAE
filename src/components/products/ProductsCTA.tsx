import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import Container from "@/components/ui/container/Container";
import { Button } from "@/components/ui/buttons/button";

export default function ProductsCTA() {
  return (
    <section className="py-20">
      <Container>
        <div className="border-y border-slate-200 py-16 text-center lg:py-20">
          {/* Label */}

          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#2f7d5c]">
            Start Sourcing
          </p>

          {/* Heading */}

          <h2
            className="
              mx-auto
              mt-5
              max-w-3xl
              font-heading
              text-4xl
              font-black
              leading-[1.05]
              tracking-[-0.04em]
              text-[#132838]
              sm:text-5xl
              lg:text-6xl
            "
          >
            Looking for the right
            <span className="block text-[#2f7d5c]">
              product or supplier?
            </span>
          </h2>

          {/* Description */}

          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-slate-500">
            Tell us what you are looking for, and we will help you explore
            suitable sourcing opportunities from India.
          </p>

          {/* Action */}

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link href="/request-quote">
              <Button
                size="lg"
                className="
                  group
                  h-12
                  rounded-xl
                  bg-[#132838]
                  px-6
                  text-sm
                  font-semibold
                  shadow-none
                  transition-all
                  hover:bg-[#2f7d5c]
                "
              >
                Request a Quote

                <ArrowUpRight
                  className="
                    ml-2
                    size-4
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </Button>
            </Link>

            <Link
              href="/become-supplier"
              className="
                inline-flex
                h-12
                items-center
                justify-center
                rounded-xl
                border
                border-slate-300
                px-6
                text-sm
                font-semibold
                text-[#132838]
                transition-colors
                hover:border-[#2f7d5c]
                hover:text-[#2f7d5c]
              "
            >
              Become a Supplier
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}