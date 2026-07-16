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
        rounded-[28px]
        border
        border-border
        bg-white
        p-8
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-primary/20
        hover:shadow-xl
      "
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
        <Icon className="size-8" />
      </div>

      <h3 className="mt-8 text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-muted-foreground">
        {description}
      </p>
    </div>
  );
}