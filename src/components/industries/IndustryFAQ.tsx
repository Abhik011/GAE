import Container from "@/components/ui/container/Container";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
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
  if (!faq.length) {
    return null;
  }

  return (
    <section className="border-t border-slate-200 bg-slate-50/50 py-20 lg:py-24">
      <Container>
        <div className="max-w-3xl">
          {/* Label */}

          <div className="flex items-center gap-4">
            <span className="text-[11px] font-bold tracking-[0.28em] text-[#2f7d5c]">
              FAQ
            </span>

            <span className="h-px w-10 bg-[#2f7d5c]/30" />
          </div>

          {/* Heading */}

          <h2
            className="
              mt-5
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
            {title} export
            <span className="block text-[#2f7d5c]">
              questions, answered.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-500 lg:text-lg">
            Find answers about sourcing, manufacturers, quality checks,
            export documentation, logistics, and international delivery.
          </p>
        </div>

        {/* FAQ */}

        <Accordion className="mt-12 border-t border-slate-200">
          {faq.map((item, index) => (
            <AccordionItem
              key={item.question}
              value={`faq-${index}`}
              className="border-b border-slate-200"
            >
              <AccordionTrigger
                className="
                  py-6
                  text-left
                  font-heading
                  text-base
                  font-bold
                  tracking-[-0.01em]
                  text-[#132838]
                  hover:no-underline
                  sm:text-lg
                "
              >
                <span className="flex items-center gap-5">
                  <span className="text-[10px] font-bold tracking-[0.18em] text-[#2f7d5c]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span>{item.question}</span>
                </span>
              </AccordionTrigger>

              <AccordionContent className="pb-6 pl-9 pr-10 text-sm leading-7 text-slate-500 sm:text-base">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  );
}