import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";

interface CategoryCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}

export default function CategoryCard({
  title,
  description,
  href,
  icon: Icon,
}: CategoryCardProps) {
  return (
    <Link
      href={href}
      className="
        group
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-border
        bg-white
        p-8
        shadow-sm
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-primary/20
        hover:shadow-2xl
      "
    >
      {/* Hover Background */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-primary/5
          via-primary/[0.03]
          to-transparent
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      <div className="relative z-10">

        {/* Icon */}

        <div
          className="
            flex
            h-18
            w-18
            items-center
            justify-center
            rounded-3xl
            bg-primary/10
            text-primary
            transition-all
            duration-500
            group-hover:scale-110
            group-hover:bg-primary
            group-hover:text-white
          "
        >
          <Icon className="size-9" />
        </div>

        {/* Title */}

        <h3 className="mt-8 text-2xl font-bold text-slate-900">
          {title}
        </h3>

        {/* Description */}

        <p className="mt-4 leading-8 text-muted-foreground">
          {description}
        </p>

        {/* Footer */}

        <div className="mt-10 flex items-center justify-between">

          <span
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.18em]
              text-primary
            "
          >
            Explore Category
          </span>

          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              border
              border-border
              transition-all
              duration-300
              group-hover:bg-primary
              group-hover:text-white
              group-hover:border-primary
            "
          >
            <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
          </div>

        </div>

      </div>
    </Link>
  );
}