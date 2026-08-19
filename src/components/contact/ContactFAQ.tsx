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
      "We typically respond to inquiries within 24–48 business hours.",
  },
  {
    question: "Can I request products not listed on your website?",
    answer:
      "Yes. Share your requirements and we can help identify suitable manufacturers.",
  },
  {
    question: "Do you work with international buyers?",
    answer:
      "Yes. We support buyers worldwide with sourcing and export coordination.",
  },
  {
    question: "Do you support OEM and private label manufacturing?",
    answer:
      "Yes. We can help connect you with manufacturers offering OEM, ODM, and private-label solutions.",
  },
];

export default function ContactFAQ() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <Container>
        <SectionHeader
          badge="FAQ"
          title="Common Questions"
          description="Quick answers about sourcing and working with GlobalAtlas Exim."
        />

        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion className="divide-y divide-slate-200">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`faq-${index}`}
                className="border-0"
              >
                <AccordionTrigger className="py-6 text-left text-base font-semibold text-[#132838] hover:text-[#2f7d5c]">
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent className="pb-6 pr-10 text-sm leading-7 text-slate-500">
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