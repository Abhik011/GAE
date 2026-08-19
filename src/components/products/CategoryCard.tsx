import Link from "next/link";
import { ArrowUpRight, type LucideIcon } from "lucide-react";

interface CategoryCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  index: number;
}

export default function CategoryCard({
  title,
  description,
  href,
  icon: Icon,
  index,
}: CategoryCardProps) {
  const number = String(index).padStart(2, "0");

  return (
    <Link
      href={href}
      className="
        group
        relative
        min-h-[260px]
        border-b
        border-r
        border-slate-200
        p-7
        transition-colors
        duration-300
        hover:bg-[#f7faf8]
        lg:p-8
      "
    >
      {/* Number */}

      <span
        className="
          text-[10px]
          font-bold
          tracking-[0.18em]
          text-slate-400
          transition-colors
          duration-300
          group-hover:text-[#2f7d5c]
        "
      >
        {number}
      </span>

      {/* Icon */}

      <div
        className="
          mt-8
          text-slate-400
          transition-all
          duration-300
          group-hover:text-[#2f7d5c]
          group-hover:-translate-y-1
        "
      >
        <Icon
          className="size-6"
          strokeWidth={1.5}
        />
      </div>

      {/* Content */}

      <div className="mt-6">
        <h3
          className="
            font-heading
            text-xl
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
            mt-3
            max-w-xs
            text-sm
            leading-6
            text-slate-500
          "
        >
          {description}
        </p>
      </div>

      {/* Bottom arrow */}

      <div className="absolute bottom-7 right-7 lg:bottom-8 lg:right-8">
        <ArrowUpRight
          className="
            size-5
            text-slate-300
            transition-all
            duration-300
            group-hover:-translate-y-1
            group-hover:translate-x-1
            group-hover:text-[#2f7d5c]
          "
          strokeWidth={1.7}
        />
      </div>
    </Link>
  );
}