import AboutHero from "@/components/about/AboutHero";
import CompanyIntro from "@/components/about/CompanyIntro";
import VisionMission from "@/components/about/VisionMission";
import WhyGlobalAtlas from "@/components/about/WhyGlobalAtlas";
import Leadership from "@/components/about/Leadership";
import AboutCTA from "@/components/about/AboutCTA";

export default function AboutPage() {
  return (
    <>
      {/* 01 — Introduction */}
      <AboutHero />

      {/* 02 — Who We Are */}
      <CompanyIntro />

      {/* 03 — Our Direction */}
      <VisionMission />

      {/* 04 — Why GlobalAtlas */}
      <WhyGlobalAtlas />

      {/* 05 — Leadership */}
      <Leadership />

      {/* 06 — Start a Conversation */}
      <AboutCTA />
    </>
  );
}