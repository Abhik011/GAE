import Image from "next/image";

export default function WorldMap() {
  return (
    <div
      className="
        relative
        aspect-square
        overflow-hidden
        rounded-[36px]
        border
        border-border
        shadow-xl
      "
    >
      <Image
        src="/images/about/world-map.jpg"
        alt="GlobalAtlas Exim Worldwide Export Network"
        fill
        priority
        className="
          object-cover
          transition-transform
          duration-700
          hover:scale-105
        "
      />

      {/* Overlay */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-slate-950/15
          via-transparent
          to-transparent
        "
      />
    </div>
  );
}