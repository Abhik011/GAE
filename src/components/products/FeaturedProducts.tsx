import Container from "@/components/ui/container/Container";
import SectionHeader from "@/components/sections/SectionHeader";

import { products } from "@/data/products";

import ProductCard from "./ProductCard";

export default function FeaturedProducts() {
  return (
    <section className="bg-slate-50 py-28">
      <Container>

        <SectionHeader
          badge="Featured Products"
          title="Export-Ready Products"
          description="Explore premium export products sourced from verified Indian manufacturers."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={product.slug}
              {...product}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}