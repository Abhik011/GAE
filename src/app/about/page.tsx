import AboutHero from "@/components/about/AboutHero";
import CompanyIntro from "@/components/about/CompanyIntro";
import OurStory from "@/components/about/OurStory";
import VisionMission from "@/components/about/VisionMission";
import WhyGlobalAtlas from "@/components/about/WhyGlobalAtlas";
import CoreValues from "@/components/about/CoreValues";
import GlobalPresence from "@/components/about/GlobalPresence";
import Leadership from "@/components/about/Leadership";
import Certifications from "@/components/about/Certifications";
import AboutCTA from "@/components/about/AboutCTA";

export default function AboutPage() {
  return (
    <>
      <AboutHero />

      <CompanyIntro />

      <OurStory />

      <VisionMission />

      <WhyGlobalAtlas />

      <CoreValues />

      <GlobalPresence />

      <Leadership />

      <Certifications />

      <AboutCTA />
    </>
  );
}