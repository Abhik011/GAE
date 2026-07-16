import Container from "@/components/ui/container/Container";

import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import FooterBottom from "./FooterBottom";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-slate-950 text-white">

      <Container>

        <div className="py-20">

          <div className="grid gap-16 lg:grid-cols-[1.4fr_2fr]">

            <FooterBrand />

            <FooterLinks />

          </div>

        </div>

        <FooterBottom />

      </Container>

    </footer>
  );
}