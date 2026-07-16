import {
  ClipboardList,
  Search,
  FileText,
  Factory,
  Ship,
  Handshake,
} from "lucide-react";

import Container from "@/components/ui/container/Container";
import SectionHeader from "@/components/sections/SectionHeader";

const steps = [
  {
    step: "01",
    title: "Submit Your Requirements",
    description:
      "Tell us about your product, quantity, specifications, destination country and delivery expectations.",
    icon: ClipboardList,
  },
  {
    step: "02",
    title: "Requirement Analysis",
    description:
      "Our sourcing specialists carefully review your inquiry and identify the best sourcing strategy.",
    icon: Search,
  },
  {
    step: "03",
    title: "Supplier Matching",
    description:
      "We connect your requirements with verified manufacturers that meet your quality and production needs.",
    icon: Factory,
  },
  {
    step: "04",
    title: "Receive Quotations",
    description:
      "You'll receive competitive quotations along with technical details, lead times and commercial terms.",
    icon: FileText,
  },
  {
    step: "05",
    title: "Production & Logistics",
    description:
      "After approval, we coordinate production, inspections, export documentation and international shipping.",
    icon: Ship,
  },
  {
    step: "06",
    title: "Delivery & Support",
    description:
      "Products are delivered safely while our team continues supporting you throughout the process.",
    icon: Handshake,
  },
];

export default function QuoteProcess() {
  return (
    <section className="py-28">

      <Container>

        <SectionHeader
          badge="Our Process"
          title="How Your Quote Request Works"
          description="A simple and transparent sourcing process designed to help you find the right suppliers with confidence."
        />

        <div className="relative mx-auto mt-20 max-w-6xl">

          {/* Timeline */}

          <div className="absolute left-8 top-10 bottom-10 hidden w-px bg-border lg:block" />

          <div className="space-y-8">

            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.step}
                  className="relative flex gap-8"
                >
                  <div
                    className="
                      relative
                      z-10
                      flex
                      h-16
                      w-16
                      shrink-0
                      items-center
                      justify-center
                      rounded-2xl
                      bg-primary
                      text-white
                      shadow-lg
                    "
                  >
                    <Icon className="size-7" />
                  </div>

                  <div
                    className="
                      flex-1
                      rounded-[32px]
                      border
                      border-border
                      bg-white
                      p-8
                      shadow-sm
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-primary/20
                      hover:shadow-xl
                    "
                  >
                    <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                      Step {step.step}
                    </span>

                    <h3 className="mt-3 text-2xl font-bold">
                      {step.title}
                    </h3>

                    <p className="mt-4 leading-8 text-muted-foreground">
                      {step.description}
                    </p>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </Container>

    </section>
  );
}