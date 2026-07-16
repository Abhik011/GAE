import Container from "@/components/ui/container/Container";
import SectionHeader from "@/components/sections/SectionHeader";

import { products } from "@/data/products";

import ProductCard from "@/components/products/ProductCard";

interface RelatedProductsProps {
  currentSlug: string;
}

export default function RelatedProducts({
  currentSlug,
}: RelatedProductsProps) {
  const relatedProducts = products
    .filter((product) => product.slug !== currentSlug)
    .slice(0, 4);

  if (!relatedProducts.length) {
    return null;
  }

  return (
    <section className="bg-slate-50 py-28">

      <Container>

        <SectionHeader
          badge="Related Products"
          title="You May Also Like"
          description="Explore other export-ready products from our verified manufacturing network."
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">

          {relatedProducts.map((product) => (
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