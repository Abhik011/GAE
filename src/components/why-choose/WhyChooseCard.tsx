import type { LucideIcon } from "lucide-react";

interface WhyChooseCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function WhyChooseCard({
  title,
  description,
  icon: Icon,
}: WhyChooseCardProps) {
  return (
    <div className="group rounded-3xl border border-border bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl">
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