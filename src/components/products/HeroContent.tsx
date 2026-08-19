import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/buttons/button";

export default function HeroContent() {
  return (
    <div className="relative">
      {/* Section label */}
      <div className="mb-8 flex items-center gap-4">
        <span className="text-[11px] font-bold tracking-[0.28em] text-[#2f7d5c]">
          01
        </span>

        <span className="h-px w-10 bg-[#2f7d5c]/40" />

        <span className="text-[11px] font-bold tracking-[0.28em] text-slate-400">
          PRODUCTS · SOURCING
        </span>
      </div>

      <h1
        className="
          max-w-4xl
          font-heading
          text-5xl
          font-black
          leading-[0.95]
          tracking-[-0.055em]
          text-[#132838]
          sm:text-6xl
          lg:text-7xl
        "
      >
        <span className="text-[#2f7d5c]">
          Discover products.
        </span>

        <br />

        <span className="  text-transparent
                    [-webkit-text-stroke:1.5px_#2f7d5c]">
          Build connections.
        </span>
      </h1>

      <p
        className="
          mt-8
          max-w-xl
          text-base
          leading-8
          text-slate-500
          lg:text-lg
        "
      >
        Explore product opportunities from India and connect with suitable
        manufacturers for your sourcing and international trade requirements.
      </p>

      {/* Minimal capabilities */}
      <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
        {[
          "Supplier Discovery",
          "Product Sourcing",
          "Trade Support",
        ].map((item) => (
          <span
            key={item}
            className="
              text-[11px]
              font-bold
              uppercase
              tracking-[0.16em]
              text-[#2f7d5c]
            "
          >
            {item}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="mt-10 flex flex-wrap items-center gap-5">
        <Link href="/products/categories">
          <Button
            size="lg"
            className="
              group
              h-13
              rounded-xl
              bg-[#132838]
              px-6
              text-sm
              font-bold
              shadow-none
              transition-all
              duration-300
              hover:bg-[#2f7d5c]
            "
          >
            Browse Products

            <ArrowUpRight
              className="
                ml-3
                size-4
                transition-transform
                duration-300
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            />
          </Button>
        </Link>

        <Link
          href="/request-quote"
          className="
            text-sm
            font-bold
            text-[#132838]
            transition-colors
            hover:text-[#2f7d5c]
          "
        >
          Request a Quote →
        </Link>
      </div>
    </div>
  );
}