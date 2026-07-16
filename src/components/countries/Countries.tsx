import Container from "@/components/ui/container/Container";
import SectionHeader from "@/components/sections/SectionHeader";

import { countries } from "@/data/countries";

import CountryCard from "./CountryCard";
import WorldMap from "./WorldMap";

export default function Countries() {
  return (
    <section className="py-28">
      <Container>

        <SectionHeader
          badge="Global Presence"
          title="Serving Buyers Across the World"
          description="GlobalAtlas Exim connects verified Indian manufacturers with businesses in major international markets."
        />

        <div className="grid items-center gap-16 lg:grid-cols-2">

          <WorldMap />

          <div className="grid gap-4 sm:grid-cols-2">
            {countries.map((country) => (
              <CountryCard
                key={country.code}
                {...country}
              />
            ))}
          </div>

        </div>

      </Container>
    </section>
  );
}