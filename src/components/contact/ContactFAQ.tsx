import Container from "@/components/ui/container/Container";
import SectionHeader from "@/components/sections/SectionHeader";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How quickly will I receive a response?",
    answer:
      "We typically respond to all inquiries within 24–48 business hours.",
  },
  {
    question: "Can I request products that are not listed on your website?",
    answer:
      "Yes. We can source custom products and connect you with verified manufacturers based on your requirements.",
  },
  {
    question: "Do you work with international buyers?",
    answer:
      "Yes. We assist buyers worldwide with sourcing, export documentation, quality assurance, and logistics.",
  },
  {
    question: "Do you support OEM and private label manufacturing?",
    answer:
      "Yes. We work with manufacturers that provide OEM, ODM, and private label solutions for various industries.",
  },
];

export default function ContactFAQ() {
  return (
    <section className="py-28">

      <Container>

        <SectionHeader
          badge="FAQ"
          title="Frequently Asked Questions"
          description="Find quick answers to common questions about our sourcing and export services."
        />

        <div className="mx-auto mt-16 max-w-4xl">

          <Accordion
            className="space-y-5"
          >

            {faqs.map((faq, index) => (

              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="rounded-[28px] border border-border bg-white px-8 shadow-sm"
              >

                <AccordionTrigger className="py-6 text-left text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent className="pb-6 leading-8 text-muted-foreground">
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