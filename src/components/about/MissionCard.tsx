import { Target } from "lucide-react";

export default function MissionCard() {
  return (
    <div
      className="
        group
        h-full

        rounded-[32px]

        border

        border-border

        bg-white

        p-10

        transition-all

        duration-300

        hover:-translate-y-1

        hover:border-primary/20

        hover:shadow-xl
      "
    >
      <div className="flex size-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
        <Target className="size-8" />
      </div>

      <h3 className="mt-8 text-3xl font-black">
        Our Mission
      </h3>

      <p className="mt-6 leading-8 text-muted-foreground">
        To simplify international trade by connecting verified
        Indian manufacturers with buyers worldwide through
        sourcing, quality assurance, export documentation,
        and reliable logistics support.
      </p>
    </div>
  );
}