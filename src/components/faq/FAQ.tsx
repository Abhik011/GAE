import Container from "@/components/ui/container/Container";
import SectionHeader from "@/components/sections/SectionHeader";

import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion";

import { faqs } from "@/data/faqs";

export default function FAQ() {
    return (
        <section className="py-28">
            <Container>

                <SectionHeader
                    badge="FAQ"
                    title="Frequently Asked Questions"
                    description="Find answers to the most common questions about sourcing, exports, logistics, and working with GlobalAtlas Exim."
                />

                <Accordion
                    className="mx-auto mt-12 max-w-4xl"
                >
                    {faqs.map((faq, index) => (
                        <AccordionItem
                            key={faq.question}
                            value={`item-${index}`}
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