import {
  ArrowRightLeft,
  Globe,
  Factory,
} from "lucide-react";

export default function StoryContent() {
  return (
    <div>

      <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-primary">
        Our Story
      </span>

      <h2 className="mt-6 font-heading text-5xl font-black leading-tight">

        Bridging India's Manufacturing

        <span className="block text-primary">
          with Global Markets.
        </span>

      </h2>

      <p className="mt-8 text-lg leading-8 text-muted-foreground">

        GlobalAtlas Exim was founded with one mission:
        to simplify international trade by connecting
        verified Indian manufacturers with buyers
        around the world through a transparent,
        efficient, and reliable sourcing process.

      </p>

      <div className="mt-10 space-y-8">

        <div className="flex gap-5">

          <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <Factory className="size-6" />
          </div>

          <div>

            <h3 className="font-bold">
              Empower Indian Manufacturers
            </h3>

            <p className="mt-2 text-muted-foreground">
              Helping manufacturers expand into international markets.
            </p>

          </div>

        </div>

        <div className="flex gap-5">

          <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <Globe className="size-6" />
          </div>

          <div>

            <h3 className="font-bold">
              Support Global Buyers
            </h3>

            <p className="mt-2 text-muted-foreground">
              Making sourcing from India easier, faster and more reliable.
            </p>

          </div>

        </div>

        <div className="flex gap-5">

          <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <ArrowRightLeft className="size-6" />
          </div>

          <div>

            <h3 className="font-bold">
              Build Long-Term Partnerships
            </h3>

            <p className="mt-2 text-muted-foreground">
              Creating sustainable trade relationships based on trust.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}