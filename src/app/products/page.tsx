import ProductsHero from "@/components/products/ProductsHero";
import CategoryGrid from "@/components/products/CategoryGrid";
import FeaturedProducts from "@/components/products/FeaturedProducts";
import Industries from "@/components/products/Industries";
import WhySource from "@/components/products/WhySource";
import SourcingProcess from "@/components/products/SourcingProcess";
import QualityAssurance from "@/components/products/QualityAssurance";
import ExportCapabilities from "@/components/products/ExportCapabilities";
import ProductsFAQ from "@/components/products/ProductsFAQ";
import ProductsCTA from "@/components/products/ProductsCTA";

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <ProductsHero />

      {/* Browse Categories */}
      <CategoryGrid />

      {/* Featured Export Products */}
      <FeaturedProducts />

      {/* Industries We Serve */}
      <Industries />

      {/* Why Source Through GlobalAtlas Exim */}
      <WhySource />

      {/* Our Sourcing Process */}
      <SourcingProcess />

      {/* Quality Assurance */}
      <QualityAssurance />

      {/* Export Capabilities */}
      <ExportCapabilities />

      {/* Frequently Asked Questions */}
      <ProductsFAQ />

      {/* Call To Action */}
      <ProductsCTA />
    </>
  );
}