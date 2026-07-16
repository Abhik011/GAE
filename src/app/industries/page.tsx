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

  const details = industryDetails[industry.slug];

  return (
    <>
      <IndustriesHero />

      <IndustryGrid />

      <IndustryOverview
        industry={industry}
      />

      <IndustryProcess
        title={industry.title}
        process={details.process}
      />

      <IndustryFAQ
        title={industry.title}
        faq={details.faq}
      />

      <IndustryCTA
        industry={industry}
      />
    </>
  );
}