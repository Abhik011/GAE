import Container from "@/components/ui/container/Container";

import HeroContent from "./HeroContent";
import HeroPreview from "./HeroPreview";

export default function ProductsHero() {
  return (
    <section className="relative overflow-hidden bg-slate-50 pt-40 pb-28">

      {/* Background Glow */}

      <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />

      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-sky-500/10 blur-[120px]" />

      <Container>

        <div className="grid items-center gap-20 lg:grid-cols-2">

          <HeroContent />

          <HeroPreview />

        </div>

      </Container>

    </section>
  );
}