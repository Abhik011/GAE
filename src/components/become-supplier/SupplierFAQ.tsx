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
    <section className="py-28">

      <Container>

        <SectionHeader
          badge="Supplier FAQ"
          title="Frequently Asked Questions"
          description="Everything you need to know before joining the GlobalAtlas Exim supplier network."
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
                  rounded-[28px]
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