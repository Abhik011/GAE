import Container from "@/components/ui/container/Container";

import PresenceContent from "./PresenceContent";
import WorldMap from "./WorldMap";

export default function GlobalPresence() {
  return (
    <section className="bg-slate-50 py-28">

      <Container>

        <div className="grid items-center gap-20 lg:grid-cols-2">

          <PresenceContent />

          <WorldMap />

        </div>

      </Container>

    </section>
  );
}