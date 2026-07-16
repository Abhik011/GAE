import Container from "@/components/ui/container/Container";

import WhySourceContent from "./WhySourceContent";
import WhySourcePreview from "./WhySourcePreview";

export default function WhySource() {
  return (
    <section className="bg-slate-50 py-28">

      <Container>

        <div className="grid items-center gap-20 lg:grid-cols-2">

          <WhySourceContent />

          <WhySourcePreview />

        </div>

      </Container>

    </section>
  );
}