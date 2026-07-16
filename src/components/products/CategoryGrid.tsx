import Container from "@/components/ui/container/Container";
import SectionHeader from "@/components/sections/SectionHeader";

import { productCategories } from "@/data/product-categories";

import CategoryCard from "./CategoryCard";

export default function CategoryGrid() {
  return (
    <section className="py-28">
      <Container>

        <SectionHeader
          badge="Product Categories"
          title="Explore Our Product Categories"
          description="Browse export-ready product categories and discover trusted Indian manufacturers across diverse industries."
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {productCategories.map((category) => (
            <CategoryCard
              key={category.slug}
              {...category}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}