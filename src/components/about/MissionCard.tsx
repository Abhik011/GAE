import { Target } from "lucide-react";

export default function MissionCard() {
  return (
    <article
      className="
        group
        relative
        min-h-[420px]
        bg-white
        p-7
        transition-colors
        duration-300
        hover:bg-[#f8fbf9]
        sm:p-10
        lg:p-12
      "
    >
      {/* Number */}
      <span
        className="
          text-[11px]
          font-bold
          tracking-[0.28em]
          text-[#2f7d5c]
        "
      >
        02
      </span>

      {/* Icon */}
      <div
        className="
          mt-10
          flex
          size-16
          items-center
          justify-center
          rounded-full
          bg-[#eaf5ef]
          text-[#2f7d5c]
          transition-transform
          duration-300
          group-hover:scale-110
        "
      >
        <Target
          className="size-7"
          strokeWidth={1.7}
        />
      </div>

      {/* Content */}
      <div className="mt-12">
        <p
          className="
            text-[10px]
            font-bold
            tracking-[0.24em]
            text-slate-400
          "
        >
          WHAT DRIVES US
        </p>

        <h3
          className="
            mt-4
            font-heading
            text-3xl
            font-black
            tracking-[-0.035em]
            text-[#132838]
            sm:text-4xl
          "
        >
          Our Mission
        </h3>

        <p
          className="
            mt-5
            max-w-md
            text-sm
            leading-7
            text-slate-500
            sm:text-base
            sm:leading-8
          "
        >
          To simplify international trade by connecting Indian manufacturers
          with buyers worldwide and supporting sourcing, quality assurance,
          export documentation, and reliable logistics.
        </p>
      </div>

      {/* Bottom accent */}
      <div
        className="
          absolute
          bottom-0
          left-0
          h-1
          w-0
          bg-[#2f7d5c]
          transition-all
          duration-500
          group-hover:w-full
        "
      />
    </article>
  );
}