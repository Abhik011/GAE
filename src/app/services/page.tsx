import ServicesHero from "@/components/services/ServicesHero";
import ServicesGrid from "@/components/services/ServicesGrid";
import WhyChooseUs from "@/components/services/WhyChooseUs";
import SourcingProcess from "@/components/services/SourcingProcess";
import IndustriesServed from "@/components/services/IndustriesServed";
import ServicesFAQ from "@/components/services/ServicesFAQ";
import ServicesCTA from "@/components/services/ServicesCTA";

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <WhyChooseUs />
      <SourcingProcess />
     
      <ServicesFAQ />
      <ServicesCTA />
    </>
  );
}