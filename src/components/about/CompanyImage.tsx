import Image from "next/image";
import { ArrowUpRight, Globe2 } from "lucide-react";

export default function AboutImage() {
  return (
    <div className="relative">
      {/* Image */}
      <div
        className="
          group
          relative
          aspect-[4/5]
          overflow-hidden
          rounded-[28px]
          bg-slate-100
        "
      >
        <Image
          src="/images/about/global-trade.jpg"
          alt="GlobalAtlas Exim international trade and global sourcing"
          fill
          priority
          className="
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-[1.03]
          "
        />

        {/* Subtle overlay */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-[#132838]/65
            via-transparent
            to-transparent
          "
        />

        {/* Top label */}
        <div
          className="
            absolute
            left-6
            top-6
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-white/20
            bg-[#132838]/20
            px-4
            py-2
            text-[10px]
            font-bold
            tracking-[0.2em]
            text-white
            backdrop-blur-md
          "
        >
          <Globe2 className="size-3.5 text-[#78d8a7]" />
          GLOBAL TRADE
        </div>

        {/* Bottom content */}
        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            p-6
            sm:p-8
          "
        >
          <div className="flex items-end justify-between gap-6">
            <div>
              <p
                className="
                  text-[10px]
                  font-bold
                  tracking-[0.24em]
                  text-[#78d8a7]
                "
              >
                GLOBALATLAS EXIM
              </p>

              <p
                className="
                  mt-3
                  max-w-xs
                  font-heading
                  text-2xl
                  font-bold
                  leading-tight
                  tracking-[-0.03em]
                  text-white
                  sm:text-3xl
                "
              >
                Beyond every border.
              </p>
            </div>

            <div
              className="
                flex
                size-11
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                bg-white/10
                text-white
                backdrop-blur-md
                transition-transform
                duration-300
                group-hover:rotate-45
              "
            >
              <ArrowUpRight className="size-5" />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative detail */}
      <div
        className="
          absolute
          -bottom-3
          -right-3
          -z-10
          h-32
          w-32
          rounded-br-[28px]
          border-b
          border-r
          border-[#2f7d5c]/25
        "
      />
    </div>
  );
}