"use client";

import { ArrowRight, Mail } from "lucide-react";

export default function FooterNewsletter() {
  return (
    <div className="max-w-md">
      {/* Label */}
      <div className="flex items-center gap-3">
        <span className="text-[11px] font-bold tracking-[0.25em] text-[#78d8a7]">
          NEWSLETTER
        </span>

        <span className="h-px w-8 bg-white/15" />
      </div>

      {/* Heading */}
      <h3 className="mt-5 font-heading text-2xl font-black leading-tight tracking-tight text-white">
        Stay connected to
        <span className="block text-[#78d8a7]">
          global opportunities.
        </span>
      </h3>

      {/* Description */}
      <p className="mt-4 text-sm leading-7 text-white/55">
        Get updates on international trade, sourcing opportunities, Indian
        products, and global markets.
      </p>

      {/* Form */}
      <form
        className="mt-7 flex flex-col gap-3 sm:flex-row"
        onSubmit={(event) => event.preventDefault()}
      >
        <div className="relative flex-1">
          <Mail
            className="
              pointer-events-none
              absolute
              left-4
              top-1/2
              size-4
              -translate-y-1/2
              text-white/35
            "
          />

          <input
            type="email"
            placeholder="Your email address"
            aria-label="Email address"
            required
            className="
              h-12
              w-full
              rounded-xl
              border
              border-white/10
              bg-white/[0.06]
              pl-11
              pr-4
              text-sm
              text-white
              outline-none
              placeholder:text-white/30
              transition-all
              duration-300
              focus:border-[#78d8a7]/50
              focus:bg-white/[0.09]
              focus:ring-2
              focus:ring-[#78d8a7]/10
            "
          />
        </div>

        <button
          type="submit"
          className="
            inline-flex
            h-12
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-[#2f7d5c]
            px-5
            text-sm
            font-semibold
            text-white
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:bg-[#25684c]
            active:translate-y-0
          "
        >
          Subscribe

          <ArrowRight className="size-4" />
        </button>
      </form>

      <p className="mt-4 text-[11px] leading-5 text-white/30">
        No spam. Only relevant updates and international business insights.
      </p>
    </div>
  );
}