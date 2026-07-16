import Container from "@/components/ui/container/Container";
import SectionHeader from "@/components/sections/SectionHeader";

import { leadership } from "@/data/leadership";

import LeaderCard from "./LeaderCard";

export default function Leadership() {
  return (
    <section className="py-28">

      <Container>

        <SectionHeader
          badge="Leadership Team"
          title="Meet the People Behind GlobalAtlas Exim"
          description="Our leadership team is committed to building trusted partnerships, driving innovation, and helping businesses connect with reliable manufacturing opportunities in India."
        />

        <div className="grid gap-10 lg:grid-cols-2">

          {leadership.map((leader) => (
            <LeaderCard
              key={leader.name}
              {...leader}
            />
          ))}

        </div>

      </Container>

    </section>
  );
}