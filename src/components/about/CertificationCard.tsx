import type { LucideIcon } from "lucide-react";

interface CertificationCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function CertificationCard({
  title,
  description,
  icon: Icon,
}: CertificationCardProps) {
  return (
    <div
      className="
        group
        relative
        overflow-hidden

        rounded-[32px]

        border
        border-border

        bg-white

        p-8

        transition-all
        duration-500

        hover:-translate-y-2
        hover:border-primary/20
        hover:shadow-[0_20px_60px_rgba(15,61,122,.10)]
      "
    >
      {/* Glow */}

      <div
        className="
          absolute
          -right-12
          -top-12

          h-40
          w-40

          rounded-full

          bg-primary/5

          blur-3xl

          transition-all

          duration-500

          group-hover:bg-primary/10
        "
      />

      <div className="relative">

        <div
          className="
            flex

            h-16
            w-16

            items-center
            justify-center

            rounded-2xl

            bg-primary/10

            text-primary
          "
        >
          <Icon className="size-8" />
        </div>

        <h3 className="mt-8 text-2xl font-bold text-slate-900">
          {title}
        </h3>

        <div className="mt-4 h-1 w-14 rounded-full bg-primary" />

        <p className="mt-6 leading-8 text-slate-600">
          {description}
        </p>

      </div>
    </div>
  );
}