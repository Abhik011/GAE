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
    <div className="group relative">

      {/* Connector */}

      <div className="absolute left-8 top-20 hidden h-full w-px bg-border lg:block" />

      <div
        className="
          relative
          rounded-[30px]
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
        <div className="flex items-center justify-between">

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <Icon className="size-8" />
          </div>

          <span className="text-5xl font-black text-primary/10">
            {step}
          </span>

        </div>

        <h3 className="mt-8 text-2xl font-bold">
          {title}
        </h3>

        <p className="mt-5 leading-8 text-muted-foreground">
          {description}
        </p>

      </div>

    </div>
  );
}