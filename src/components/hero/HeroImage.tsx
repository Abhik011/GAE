import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="relative hidden lg:block">

      <div
        className="
          overflow-hidden
          rounded-[32px]
          border
          border-border
          bg-white
          shadow-2xl
        "
      >

        <Image
          src="/images/hero/hero.jpg"
          alt="GlobalAtlas Exim"
          width={900}
          height={900}
          priority
          className="h-auto w-full object-cover"
        />

      </div>

    </div>
  );
}