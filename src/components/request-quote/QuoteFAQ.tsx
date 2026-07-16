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
      "Yes. Requesting a quotation from GlobalAtlas Exim is completely free with no obligation. Our team reviews your requirements and connects you with suitable verified manufacturers.",
  },
  {
    question: "How quickly will I receive a response?",
    answer:
      "Most quote requests receive an initial response within 24–48 business hours. Complex sourcing requirements may require additional time.",
  },
  {
    question: "Can you source custom or OEM products?",
    answer:
      "Yes. We work with manufacturers that offer OEM, ODM, and private-label manufacturing tailored to your specifications.",
  },
  {
    question: "Do you verify all suppliers?",
    answer:
      "Yes. We work with carefully selected manufacturers and evaluate them based on production capability, export readiness, certifications, and quality standards.",
  },
  {
    question: "Can you arrange product inspections?",
    answer:
      "Yes. We can coordinate pre-production, in-process, and pre-shipment inspections to help ensure products meet your quality expectations.",
  },
  {
    question: "Do you handle export documentation?",
    answer:
      "Yes. We assist with export documentation, customs paperwork, certificates, freight coordination, and international shipping support.",
  },
  {
    question: "Which countries do you export to?",
    answer:
      "We support buyers across the world, subject to destination-country regulations and logistics availability.",
  },
  {
    question: "What information should I include in my quote request?",
    answer:
      "Include product specifications, quantity, destination country, target price (if available), certifications, packaging requirements, and any drawings or reference images. The more information you provide, the more accurate your quotation will be.",
  },
];

export default function QuoteFAQ() {
  return (
    <section className="bg-slate-50 py-28">

      <Container>

        <SectionHeader
          badge="FAQ"
          title="Frequently Asked Questions"
          description="Everything you need to know before requesting a quotation from GlobalAtlas Exim."
        />

        <div className="mx-auto mt-16 max-w-5xl">

          <Accordion
           
            className="space-y-5"
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`faq-${index}`}
                className="
                  overflow-hidden
                  rounded-[30px]
                  border
                  border-border
                  bg-white
                  px-8
                  shadow-sm
                  transition-all
                  duration-300
                  hover:border-primary/20
                  hover:shadow-lg
                "
              >
                <AccordionTrigger
                  className="
                    py-7
                    text-left
                    text-lg
                    font-semibold
                  "
                >
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent
                  className="
                    pb-7
                    text-base
                    leading-8
                    text-muted-foreground
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