import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function ServiceCard({
  title,
  description,
  icon: Icon,
}: ServiceCardProps) {
  return (
    <div
      className="
        group
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
          transition-all
          duration-300
          group-hover:bg-primary
          group-hover:text-white
        "
      >
        <Icon className="size-8" />
      </div>

      <h3 className="mt-8 text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-5 leading-8 text-muted-foreground">
        {description}
      </p>

      <div className="mt-8 flex items-center gap-2 font-semibold text-primary">
        Learn More

        <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </div>
  );
}