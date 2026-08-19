import Container from "@/components/ui/container/Container";

import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import FooterNewsletter from "./FooterNewsletter";
import FooterBottom from "./FooterBottom";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#132838] text-white">
      {/* Decorative circles */}
      <div
        className="
          pointer-events-none
          absolute
          -right-32
          -top-32
          h-[420px]
          w-[420px]
          rounded-full
          border
          border-white/[0.05]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-12
          -top-12
          h-[280px]
          w-[280px]
          rounded-full
          border
          border-white/[0.05]
        "
      />

      {/* Green glow */}
      <div
        className="
          pointer-events-none
          absolute
          -bottom-40
          -left-40
          h-[400px]
          w-[400px]
          rounded-full
          bg-[#2f7d5c]/10
          blur-[120px]
        "
      />

      <Container>
        <div className="relative py-16 lg:py-20">
          {/* Main footer */}
          <div className="grid gap-14 lg:grid-cols-[1.15fr_1.85fr] lg:gap-20">
            <FooterBrand />
            <FooterLinks />
          </div>

          {/* Newsletter */}
          <div className="mt-14 border-t border-white/10 pt-12 lg:mt-16 lg:pt-14">
            <FooterNewsletter />
          </div>
        </div>

        <div className="relative border-t border-white/10">
          <FooterBottom />
        </div>
      </Container>
    </footer>
  );
}