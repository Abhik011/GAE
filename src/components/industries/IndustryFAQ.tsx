import Container from "@/components/ui/container/Container";
import SectionHeader from "@/components/sections/SectionHeader";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface IndustryFAQProps {
  title: string;
  faq: FAQItem[];
}

export default function IndustryFAQ({
  title,
  faq,
}: IndustryFAQProps) {
  return (
    <section className="py-28">

      <Container>

        <SectionHeader
          badge="Frequently Asked Questions"
          title={`${title} Export FAQs`}
          description={`Everything you need to know about sourcing, manufacturing, quality assurance, logistics, and exporting ${title.toLowerCase()} products from India.`}
        />

        <div className="mx-auto mt-16 max-w-5xl">

          <Accordion
            className="space-y-5"
          >
            {faq.map((item, index) => (
              <AccordionItem
                key={item.question}
                value={`faq-${index}`}
                className="
                  overflow-hidden
                  rounded-3xl
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
                  {item.question}
                </AccordionTrigger>

                <AccordionContent
                  className="
                    pb-7
                    text-base
                    leading-8
                    text-muted-foreground
                  "
                >
                  {item.answer}
                </AccordionContent>

              </AccordionItem>
            ))}
          </Accordion>

        </div>

      </Container>

    </section>
  );
}