import type { LucideIcon } from "lucide-react";

interface ValueCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function ValueCard({
  title,
  description,
  icon: Icon,
}: ValueCardProps) {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-[28px]
        border
        border-slate-200
        bg-white
        p-8
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-primary/20
        hover:shadow-2xl
      "
    >
      <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-primary/5 blur-3xl transition-all duration-500 group-hover:bg-primary/10" />

      <div className="relative">
        <div className="flex size-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <Icon className="size-8" />
        </div>

        <h3 className="mt-8 text-2xl font-bold">
          {title}
        </h3>

        <p className="mt-4 leading-8 text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
}