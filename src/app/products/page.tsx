import ProductsHero from "@/components/products/ProductsHero";
import CategoryGrid from "@/components/products/CategoryGrid";
import FeaturedProducts from "@/components/products/FeaturedProducts";
import WhySource from "@/components/products/WhySource";
import SourcingProcess from "@/components/products/SourcingProcess";
import ProductsCTA from "@/components/products/ProductsCTA";
import ProductsFAQ from "@/components/products/ProductsFAQ";


export default function ProductsPage() {
  return (
    <>
      {/* 01 — Landing */}
      <ProductsHero />

      {/* 02 — Product Categories */}
      <CategoryGrid />

      {/* 03 — Featured Opportunities */}
      <FeaturedProducts />

      {/* 04 — Why Work With Us */}
      <WhySource />

      {/* 05 — How It Works */}
      <SourcingProcess />

      {/* 06 — Final CTA */}
      <ProductsCTA />
      <ProductsFAQ />
    </>
  );
}