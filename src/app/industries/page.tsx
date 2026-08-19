import IndustriesHero from "@/components/industries/IndustriesHero";
import IndustryGrid from "@/components/industries/IndustryGrid";
import IndustryOverview from "@/components/industries/IndustryOverview";
import IndustryProcess from "@/components/industries/IndustryProcess";
import IndustryFAQ from "@/components/industries/IndustryFAQ";
import IndustryCTA from "@/components/industries/IndustryCTA";

import { industries } from "@/data/industries";
import { industryDetails } from "@/data/industry-details";

export default function IndustriesPage() {
  const industry = industries[0];

  if (!industry) {
    return null;
  }

  const details = industryDetails[industry.slug];

  return (
    <>
      {/* Hero */}
      <IndustriesHero />

      {/* Browse Industries */}
      <IndustryGrid />

      {/* Featured Industry Overview */}
      <IndustryOverview industry={industry} />

      {/* How We Support This Industry */}
      {details?.process && (
        <IndustryProcess
          title={industry.title}
          process={details.process}
        />
      )}

      {/* Industry FAQ */}
      {details?.faq && (
        <IndustryFAQ
          title={industry.title}
          faq={details.faq}
        />
      )}

      {/* CTA */}
      <IndustryCTA industry={industry} />
    </>
  );
}