import Container from "@/components/ui/container/Container";
import SectionHeader from "@/components/sections/SectionHeader";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is requesting a quotation free?",
    answer:
      "Yes. Requesting a quotation is completely free and comes with no obligation.",
  },
  {
    question: "How quickly will I receive a response?",
    answer:
      "Most requests receive an initial response within 24–48 business hours.",
  },
  {
    question: "Can you source custom or OEM products?",
    answer:
      "Yes. We can help source suitable manufacturers for OEM, ODM, and private-label requirements.",
  },
  {
    question: "Do you verify suppliers?",
    answer:
      "We evaluate suitable manufacturers based on factors such as capability, quality standards, certifications, and export readiness.",
  },
  {
    question: "Can you arrange product inspections?",
    answer:
      "Yes. We can support coordination of inspections and quality checks before shipment.",
  },
  {
    question: "Do you support export documentation?",
    answer:
      "Yes. We assist with coordinating export documentation and shipping requirements.",
  },
  {
    question: "Which countries do you serve?",
    answer:
      "We support international buyers, subject to destination regulations and logistics availability.",
  },
  {
    question: "What should I include in my quote request?",
    answer:
      "Include product details, quantity, destination, specifications, certifications, and any relevant reference files.",
  },
];

export default function QuoteFAQ() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        <SectionHeader
          badge="FAQ"
          title="Frequently Asked Questions"
          description="Everything you need to know before requesting a quote."
        />

        <div className="mx-auto mt-14 max-w-4xl">
          <Accordion className="border-t border-slate-200">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`faq-${index}`}
                className="border-b border-slate-200"
              >
                <AccordionTrigger
                  className="
                    py-6
                    text-left
                    font-heading
                    text-base
                    font-semibold
                    text-[#132838]
                    transition-colors
                    hover:text-[#2f7d5c]
                    sm:text-lg
                  "
                >
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent
                  className="
                    max-w-3xl
                    pb-6
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