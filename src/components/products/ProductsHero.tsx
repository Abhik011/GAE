import Container from "@/components/ui/container/Container";

import HeroContent from "./HeroContent";
import HeroPreview from "./HeroPreview";

export default function ProductsHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#f7f8f7]">
      {/* Very subtle background grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-50
          [background-image:linear-gradient(rgba(19,40,56,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(19,40,56,0.04)_1px,transparent_1px)]
          [background-size:72px_72px]
        "
      />

      {/* Subtle green atmosphere */}
      <div
        className="
          pointer-events-none
          absolute
          -right-40
          -top-40
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#2f7d5c]/5
          blur-[140px]
        "
      />

      <Container>
        <div
          className="
            relative
            grid
            min-h-screen
            items-center
            gap-12
            pt-28
            pb-12
            lg:grid-cols-[1.1fr_0.9fr]
            lg:gap-20
            lg:pt-24
            lg:pb-10
          "
        >
          <HeroContent />

        
        </div>
      </Container>
    </section>
  );
}