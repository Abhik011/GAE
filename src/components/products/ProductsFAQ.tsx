import Container from "@/components/ui/container/Container";
import SectionHeader from "@/components/sections/SectionHeader";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

import { productFaqs } from "@/data/product-faqs";

export default function ProductsFAQ() {
  return (
    <section className="py-28">

      <Container>

        <SectionHeader
          badge="FAQ"
          title="Frequently Asked Questions"
          description="Find answers to common questions about sourcing products, supplier verification, export services, and international trade."
        />

        <Accordion
          className="mx-auto mt-16 max-w-5xl"
        >
          {productFaqs.map((faq, index) => (
            <AccordionItem
              key={faq.question}
              value={`faq-${index}`}
            >
              <AccordionTrigger>
                {faq.question}
              </AccordionTrigger>

              <AccordionContent>
                {faq.answer}
              </AccordionContent>

            </AccordionItem>
          ))}
        </Accordion>

      </Container>
    </section>
  );
}