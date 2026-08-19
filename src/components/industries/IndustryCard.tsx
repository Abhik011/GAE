import type { LucideIcon } from "lucide-react";

interface IndustryCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function IndustryCard({
  title,
  description,
  icon: Icon,
}: IndustryCardProps) {
  return (
    <div
      className="
        group
        relative
        bg-white
        p-7
        transition-colors
        duration-300
        sm:p-8
        hover:bg-[#f7f8f7]
      "
    >
      {/* Number / Accent */}
      <div className="flex items-start justify-between">
        <Icon
          className="
            size-6
            text-slate-400
            transition-colors
            duration-300
            group-hover:text-[#2f7d5c]
          "
          strokeWidth={1.5}
        />

        <span
          className="
            text-[10px]
            font-bold
            tracking-[0.16em]
            text-slate-300
            transition-colors
            duration-300
            group-hover:text-[#2f7d5c]/60
          "
        >
          INDUSTRY
        </span>
      </div>

      <h3
        className="
          mt-12
          font-heading
          text-xl
          font-bold
          tracking-[-0.02em]
          text-[#132838]
          transition-colors
          duration-300
          group-hover:text-[#2f7d5c]
        "
      >
        {title}
      </h3>

      <p className="mt-3 max-w-sm text-sm leading-7 text-slate-500">
        {description}
      </p>

      {/* Bottom Accent */}
      <div
        className="
          absolute
          bottom-0
          left-0
          h-px
          w-0
          bg-[#2f7d5c]
          transition-all
          duration-500
          group-hover:w-full
        "
      />
    </div>
  );
}