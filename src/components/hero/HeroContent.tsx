import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";

import { Badge } from "@/components/ui/badges/badge";

export default function HeroContent() {
  return (
    <div className="relative z-20 max-w-3xl">

      <Badge
        className="
          rounded-full
          border
          border-primary/30
          bg-primary/15
          px-5
          py-2
          text-white
          backdrop-blur-xl
        "
      >
        🌍 Trusted Global Export & Sourcing Partner
      </Badge>

      <h1
        className="
          mt-8
          font-heading
          text-5xl
          font-black
          leading-[1.05]
          tracking-tight
          text-white
          lg:text-7xl
        "
      >
        Connecting

        <span
          className="
            block
            bg-gradient-to-r
            from-white
            via-sky-300
            to-primary
            bg-clip-text
            text-transparent
          "
        >
          Indian Manufacturers
        </span>

        <span className="block">
          with Global Buyers
        </span>

      </h1>

      <p
        className="
          mt-8
          max-w-2xl
          text-lg
          leading-9
          text-slate-200
        "
      >
        Source premium-quality products directly from verified Indian
        manufacturers. From supplier discovery and quality inspections to
        export documentation and worldwide logistics, GlobalAtlas Exim simplifies
        global trade from start to finish.
      </p>

      <HeroButtons />

      <HeroStats />

    </div>
  );
}