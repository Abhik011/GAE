import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ProductCategoryCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  href: string;
}

export default function ProductCategoryCard({
  title,
  description,
  icon: Icon,
  href,
}: ProductCategoryCardProps) {
  return (
    <Link
      href={href}
      className="
        group
        rounded-3xl
        border
        border-border
        bg-white
        p-8
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-primary/20
        hover:shadow-xl
      "
    >
      <div className="flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
        <Icon className="size-7" />
      </div>

      <h3 className="mt-6 text-xl font-bold">
        {title}
      </h3>

      <p className="mt-3 text-muted-foreground leading-7">
        {description}
      </p>

      <div className="mt-6 flex items-center gap-2 font-semibold text-primary">
        Explore
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}