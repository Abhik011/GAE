import Image from "next/image";

export default function StoryImage() {
  return (
    <div
      className="
        group
        relative
        aspect-square
        overflow-hidden
        rounded-[36px]
        border
        border-border
        shadow-2xl
      "
    >
      <Image
        src="/images/about/manufacturing.jpg"
        alt="Indian Manufacturing"
        fill
        priority
        className="
          object-cover
          transition-transform
          duration-700
          group-hover:scale-105
        "
      />

      {/* Overlay */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-slate-950/80
          via-slate-950/20
          to-transparent
        "
      />

      {/* Floating Card */}

      <div
        className="
          absolute
          bottom-8
          left-8
          rounded-3xl
          border
          border-white/20
          bg-white/10
          px-6
          py-5
          backdrop-blur-xl
        "
      >
        <p className="text-3xl font-black text-white">
          Made in India
        </p>

        <p className="mt-2 max-w-xs text-sm leading-6 text-white/80">
          Connecting verified Indian manufacturers with buyers across global markets.
        </p>
      </div>
    </div>
  );
}