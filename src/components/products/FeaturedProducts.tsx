import Container from "@/components/ui/container/Container";

import { products } from "@/data/products";

import ProductCard from "./ProductCard";

export default function FeaturedProducts() {
  return (
    <section className="border-t border-slate-200 bg-[#f7f8f7] py-20 lg:py-28">
      <Container>
        {/* Section Header */}

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
              02
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
              FEATURED PRODUCTS
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
              Selected for
              <span className="text-[#2f7d5c]">
                {" "}global opportunities.
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
              Explore selected products and connect with suitable Indian
              manufacturers for your sourcing requirements.
            </p>
          </div>
        </div>

        {/* Products */}

        <div className="mt-10 grid gap-x-8 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
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