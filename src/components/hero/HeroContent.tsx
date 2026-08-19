import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";

export default function HeroContent() {
  return (
    <div className="relative z-20 max-w-4xl">
      {/* Top label */}
      <div className="flex items-center gap-3">
        <span className="h-[2px] w-10 bg-primary" />

        <span
          className="
            text-[11px]
            font-extrabold
            uppercase
            tracking-[0.22em]
            text-primary
          "
        >
          Import · Export · Sourcing
        </span>
      </div>

      {/* Main heading */}
      <h1
        className="
          mt-7
          font-heading
          text-[clamp(3.5rem,7vw,7rem)]
          font-extrabold
          leading-[0.9]
          tracking-[-0.06em]
          text-[#132A3B]
        "
      >
        Connecting

        <span className="block text-[#132A3B]">
          Indian
        </span>

        <span
          className="
            block
            text-transparent
            [-webkit-text-stroke:2px_#132A3B]
          "
        >
          businesses
        </span>

        <span className="block text-primary">
          beyond borders.
        </span>
      </h1>

      {/* Description */}
      <div className="mt-10 flex max-w-2xl gap-5">
        <div
          className="
            mt-1
            hidden
            h-auto
            min-h-[80px]
            w-[2px]
            shrink-0
            bg-primary
            md:block
          "
        />

        <p
          className="
            text-[15px]
            font-medium
            leading-8
            text-[#657381]
            md:text-[17px]
            md:leading-9
          "
        >
          GlobalAtlas Exim connects international buyers with suitable Indian
          manufacturers and suppliers, helping businesses discover reliable
          sourcing opportunities and build meaningful trade connections across
          global markets.
        </p>
      </div>

      {/* Business categories */}
      <div
        className="
          mt-8
          flex
          flex-wrap
          items-center
          gap-x-3
          gap-y-3
          text-[10px]
          font-extrabold
          uppercase
          tracking-[0.16em]
          text-[#657381]
        "
      >
        <span>Global Sourcing</span>

        <span className="size-1.5 rounded-full bg-primary" />

        <span>Buyer Connections</span>

        <span className="size-1.5 rounded-full bg-primary" />

        <span>Indian Suppliers</span>
      </div>

      {/* Actions */}
      <div className="mt-10">
        <HeroButtons />
      </div>

      {/* Stats */}
      <div className="mt-14 border-t border-[#132A3B]/10 pt-8">
        <HeroStats />
      </div>
    </div>
  );
}