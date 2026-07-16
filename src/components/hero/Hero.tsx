import Container from "@/components/ui/container/Container";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-30 pb-24 min-h-screen flex items-center">
      <HeroBackground />

      <Container className="relative z-10">
        <HeroContent />
      </Container>
    </section>
  );
}