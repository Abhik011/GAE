import Container from "@/components/ui/container/Container";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { productFaqs } from "@/data/product-faqs";

import ProductsFAQSchema from "./ProductsFAQSchema";

export default function ProductsFAQ() {
  return (
    <section
      className="py-20 lg:py-24"
      aria-labelledby="products-faq-heading"
    >
      {/* SEO Structured Data */}

      <ProductsFAQSchema />

      <Container>
        <div className="mx-auto max-w-3xl">
          {/* Section Label */}

          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#2f7d5c]">
            Product Sourcing FAQ
          </p>

          {/* Heading */}

          <h2
            id="products-faq-heading"
            className="
              mt-4
              font-heading
              text-3xl
              font-black
              leading-[1.1]
              tracking-[-0.035em]
              text-[#132838]
              sm:text-4xl
              lg:text-5xl
            "
          >
            Product sourcing questions,
            <span className="block text-[#2f7d5c]">
              answered.
            </span>
          </h2>

          {/* Description */}

          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
            Find answers about sourcing products from India, supplier
            evaluation, OEM and private label opportunities, export
            documentation, logistics, and international trade support.
          </p>

          {/* FAQ Accordion */}

          <Accordion className="mt-10 border-t border-slate-200">
            {productFaqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`faq-${index}`}
                className="border-b border-slate-200"
              >
                <AccordionTrigger
                  className="
                    py-5
                    text-left
                    font-heading
                    text-base
                    font-bold
                    leading-6
                    tracking-[-0.015em]
                    text-[#132838]
                    transition-colors
                    duration-200
                    hover:text-[#2f7d5c]
                    sm:text-lg
                  "
                >
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent
                  className="
                    pb-5
                    pr-8
                    text-sm
                    leading-7
                    text-slate-500
                    sm:text-base
                  "
                >
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
}