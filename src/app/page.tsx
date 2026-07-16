import About from "@/components/sections/About";
import Hero from "../components/hero/Hero";
import TrustedBy from "../components/sections/TrustedBy";
import ProductCategories from "@/components/products/ProductCategories";
import Industries from "@/components/industries/Industries";
import ExportProcess from "@/components/export-process/ExportProcess";
import WhyChoose from "@/components/why-choose/WhyChoose";
import Countries from "@/components/countries/Countries";
import Testimonials from "@/components/testimonials/Testimonials";
import FAQ from "@/components/faq/FAQ";
import CTA from "@/components/cta/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <About />
      <ProductCategories />
      <Industries />
      <ExportProcess />
      <WhyChoose />
      <Countries />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}