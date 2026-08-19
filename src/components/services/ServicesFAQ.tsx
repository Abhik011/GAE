import Container from "@/components/ui/container/Container";
import SectionHeader from "@/components/sections/SectionHeader";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { serviceFaqs } from "@/data/service-faqs";

export default function ServicesFAQ() {
  return (
    <section className="bg-slate-50 py-20 lg:py-24">
      <Container>
        <SectionHeader
          badge="FAQ"
          title="Questions about our services."
          description="Find answers about supplier sourcing, manufacturer verification, quality support, export documentation, and logistics coordination from India."
        />

        <div className="mx-auto mt-12 max-w-4xl">
          <Accordion className="divide-y divide-slate-200 border-y border-slate-200">
            {serviceFaqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`service-faq-${index}`}
                className="border-0"
              >
                <AccordionTrigger
                  className="
                    py-6
                    text-left
                    text-base
                    font-semibold
                    text-[#132838]
                    transition-colors
                    hover:text-[#2f7d5c]
                  "
                >
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent className="max-w-3xl pb-6 pr-10 text-sm leading-7 text-slate-500">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* FAQPage Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: serviceFaqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
      </Container>
    </section>
  );
}