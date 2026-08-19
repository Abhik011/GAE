import type { LucideIcon } from "lucide-react";

interface ProcessCardProps {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function ProcessCard({
  step,
  title,
  description,
  icon: Icon,
}: ProcessCardProps) {
  return (
    <div
      className="
        group
        border-t
        border-slate-200
        pt-7
        transition-colors
        duration-300
        hover:border-[#2f7d5c]
      "
    >
      {/* Top */}

      <div className="flex items-start justify-between gap-6">
        <span
          className="
            text-[11px]
            font-bold
            tracking-[0.2em]
            text-slate-400
            transition-colors
            duration-300
            group-hover:text-[#2f7d5c]
          "
        >
          {step}
        </span>

        <Icon
          className="
            size-5
            text-slate-400
            transition-all
            duration-300
            group-hover:text-[#2f7d5c]
          "
          strokeWidth={1.5}
        />
      </div>

      {/* Content */}

      <h3
        className="
          mt-10
          font-heading
          text-2xl
          font-bold
          tracking-[-0.03em]
          text-[#132838]
          transition-colors
          duration-300
          group-hover:text-[#2f7d5c]
        "
      >
        {title}
      </h3>

      <p
        className="
          mt-4
          max-w-sm
          text-sm
          leading-7
          text-slate-500
        "
      >
        {description}
      </p>
    </div>
  );
}