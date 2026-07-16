import Container from "@/components/ui/container/Container";
import SectionHeader from "@/components/sections/SectionHeader";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

import { serviceFaqs } from "@/data/service-faqs";

export default function ServicesFAQ() {
  return (
    <section className="py-28">

      <Container>

        <SectionHeader
          badge="FAQ"
          title="Frequently Asked Questions"
          description="Answers to common questions about our sourcing, supplier verification, export, and logistics services."
        />

        <Accordion
          className="mx-auto mt-16 max-w-5xl"
        >
          {serviceFaqs.map((faq, index) => (
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