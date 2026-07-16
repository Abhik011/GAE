import Container from "@/components/ui/container/Container";
import SectionHeader from "@/components/sections/SectionHeader";

import { productCategories } from "@/data/product-categories";
import ProductCategoryCard from "./ProductCategoryCard";

export default function ProductCategories() {
  return (
    <section className="py-28">
      <Container>

        <SectionHeader
          badge="Products"
          title="Explore Our Export Categories"
          description="Source premium-quality products from verified Indian manufacturers across multiple industries."
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {productCategories.map((category) => (
            <ProductCategoryCard
              key={category.title}
              {...category}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}