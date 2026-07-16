import Image from "next/image";

export default function AboutImage() {
  return (
    <div
      className="
        group
        relative
        aspect-square
        overflow-hidden
        rounded-[32px]
        border
        border-border
        shadow-2xl
      "
    >
      <Image
        src="/images/about/global-trade.jpg"
        alt="GlobalAtlas Exim Global Trade"
        fill
        priority
        className="
          object-cover
          transition-transform
          duration-700
          group-hover:scale-105
        "
      />

      {/* Dark Overlay */}

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
          rounded-2xl
          border
          border-white/20
          bg-white/10
          px-6
          py-5
          text-white
          backdrop-blur-xl
        "
      >
        <p className="text-4xl font-black">
          24/7
        </p>

        <p className="mt-1 text-sm text-white/80">
          Global Export Support
        </p>
      </div>
    </div>
  );
}