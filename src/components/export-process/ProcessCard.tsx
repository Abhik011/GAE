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
    <div className="relative rounded-3xl border border-border bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      <span className="absolute right-6 top-6 text-5xl font-black text-primary/10">
        {step}
      </span>

      <div className="flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
        <Icon className="size-7" />
      </div>

      <h3 className="mt-6 text-xl font-bold">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-muted-foreground">
        {description}
      </p>

    </div>
  );
}