import {
  Award,
  Globe2,
  BrainCircuit,
} from "lucide-react";

export default function FounderContent() {
  return (
    <div>

      <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-primary">
        Founder & Leadership
      </span>

      <h2 className="mt-6 font-heading text-5xl font-black">

        Abhijeet Kulkarni

      </h2>

      <p className="mt-2 text-xl font-semibold text-primary">
        Founder & CEO
      </p>

      <p className="mt-8 text-lg leading-8 text-muted-foreground">

        GlobalAtlas Exim was founded with the vision of making
        international sourcing simpler, more transparent,
        and more efficient. By combining technology with
        trusted supplier relationships, we help businesses
        around the world connect confidently with Indian
        manufacturers.

      </p>

      <div className="mt-10 space-y-6">

        <div className="flex items-center gap-4">
          <Award className="size-6 text-primary" />
          <span>Building trusted global partnerships.</span>
        </div>

        <div className="flex items-center gap-4">
          <BrainCircuit className="size-6 text-primary" />
          <span>Technology-driven sourcing & export solutions.</span>
        </div>

        <div className="flex items-center gap-4">
          <Globe2 className="size-6 text-primary" />
          <span>Connecting India with international markets.</span>
        </div>

      </div>

    </div>
  );
}