import Container from "@/components/ui/container/Container";

import { productCategories } from "@/data/product-categories";

import CategoryCard from "./CategoryCard";

export default function CategoryGrid() {
  return (
    <section className="border-t border-slate-200 bg-white py-20 lg:py-28">
      <Container>
        {/* Header */}

        <div
          className="
            grid
            gap-8
            border-b
            border-slate-200
            pb-10
            lg:grid-cols-[0.75fr_1.25fr]
            lg:gap-16
            lg:pb-14
          "
        >
          <div>
            <span
              className="
                text-[11px]
                font-bold
                tracking-[0.28em]
                text-[#2f7d5c]
              "
            >
              01
            </span>

            <p
              className="
                mt-3
                text-[11px]
                font-bold
                tracking-[0.28em]
                text-slate-400
              "
            >
              PRODUCT CATEGORIES
            </p>
          </div>

          <div>
            <h2
              className="
                max-w-3xl
                font-heading
                text-4xl
                font-black
                leading-[1.05]
                tracking-[-0.04em]
                text-[#132838]
                sm:text-5xl
                lg:text-6xl
              "
            >
              Products for
              <span className="text-[#2f7d5c]">
                {" "}global markets.
              </span>
            </h2>

            <p
              className="
                mt-6
                max-w-2xl
                text-base
                leading-8
                text-slate-500
                lg:text-lg
              "
            >
              Explore product categories and discover sourcing opportunities
              across India&apos;s diverse manufacturing and export sectors.
            </p>
          </div>
        </div>

        {/* Categories */}

        <div className="mt-8 grid border-t border-slate-200 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {productCategories.map((category, index) => (
            <CategoryCard
              key={category.slug}
              {...category}
              index={index + 1}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}