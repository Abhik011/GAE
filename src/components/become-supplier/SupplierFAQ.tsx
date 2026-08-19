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
    question: "Who can become a GlobalAtlas Exim supplier?",
    answer:
      "Manufacturers, exporters, OEM/ODM companies, wholesalers, and production facilities that meet our quality and compliance standards can apply to join our supplier network.",
  },
  {
    question: "Is there any registration fee?",
    answer:
      "No. Applying to become a GlobalAtlas Exim supplier is completely free. Applications are reviewed based on quality, manufacturing capability, certifications, and export readiness.",
  },
  {
    question: "How long does the approval process take?",
    answer:
      "Most applications are reviewed within 5–10 business days. Additional verification may be required depending on your industry and documentation.",
  },
  {
    question: "What documents are required?",
    answer:
      "Typically, you'll need your company profile, business registration, product catalogue, certifications, and factory photographs. Additional documents may be requested during verification.",
  },
  {
    question: "Do I need export experience?",
    answer:
      "No. Existing export experience is beneficial but not mandatory. Manufacturers with strong production capabilities are also encouraged to apply.",
  },
  {
    question: "Can I supply under my own brand or private label?",
    answer:
      "Yes. We work with manufacturers offering branded products, OEM manufacturing, ODM solutions, and private-label production.",
  },
  {
    question: "How will I receive buyer inquiries?",
    answer:
      "After successful verification, qualified buyer inquiries will be shared with you based on your product categories, production capacity, and target markets.",
  },
  {
    question: "Can I update my supplier profile later?",
    answer:
      "Yes. Once approved, you'll be able to update your company information, certifications, product catalogue, and manufacturing capabilities whenever required.",
  },
];

export default function SupplierFAQ() {
  return (
    <section className="border-t border-slate-100 bg-white py-20 lg:py-28">
      <Container>
        <SectionHeader
          badge="SUPPLIER FAQ"
          title="Questions, answered."
          description="Everything you need to know before joining our supplier network."
        />

        <div className="mx-auto mt-14 max-w-4xl">
          <Accordion className="border-y border-slate-200">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`faq-${index}`}
                className="group border-b border-slate-200 last:border-b-0"
              >
                <AccordionTrigger
                  className="
                    flex w-full items-center gap-5 py-6 text-left
                    hover:no-underline
                  "
                >
                  {/* Number */}

                  <span
                    className="
                      shrink-0 text-xs font-bold tracking-[0.15em]
                      text-[#2f7d5c]
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Question */}

                  <span
                    className="
                      flex-1 text-base font-semibold leading-6
                      text-[#132838] transition-colors
                      group-hover:text-[#2f7d5c]
                      sm:text-lg
                    "
                  >
                    {faq.question}
                  </span>
                </AccordionTrigger>

                <AccordionContent>
                  <div className="grid grid-cols-[48px_1fr] pb-7">
                    <div />

                    <p className="max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Bottom note */}

        <div className="mx-auto mt-10 max-w-4xl border-l-2 border-[#2f7d5c] pl-5">
          <p className="text-sm leading-7 text-slate-500">
            Still have questions? Our team is available to help you understand
            the supplier verification and onboarding process.
          </p>
        </div>
      </Container>
    </section>
  );
}