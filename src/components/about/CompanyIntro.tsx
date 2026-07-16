import Container from "@/components/ui/container/Container";

import CompanyFeatures from "./CompanyFeatures";
import CompanyImage from "./CompanyImage";

export default function CompanyIntro() {
  return (
    <section className="py-28">

      <Container>

        <div className="grid items-center gap-20 lg:grid-cols-2">

          <CompanyFeatures />

          <CompanyImage />

        </div>

      </Container>

    </section>
  );
}