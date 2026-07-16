import {
  ClipboardList,
  Search,
  Factory,
  FileCheck2,
  Ship,
  PackageCheck,
} from "lucide-react";

import Container from "@/components/ui/container/Container";
import SectionHeader from "@/components/sections/SectionHeader";

const steps = [
  {
    step: "01",
    title: "Share Your Requirements",
    description:
      "Tell us your product specifications, quantity, certifications, destination country, and delivery timeline.",
    icon: ClipboardList,
  },
  {
    step: "02",
    title: "Supplier Discovery",
    description:
      "Our team identifies verified Indian manufacturers that match your exact sourcing requirements.",
    icon: Search,
  },
  {
    step: "03",
    title: "Quotation & Sampling",
    description:
      "Receive competitive quotations, product samples, and technical discussions before placing an order.",
    icon: Factory,
  },
  {
    step: "04",
    title: "Quality Assurance",
    description:
      "We coordinate inspections, production monitoring, and compliance checks before shipment.",
    icon: FileCheck2,
  },
  {
    step: "05",
    title: "Export & Logistics",
    description:
      "Documentation, customs clearance, freight coordination, and international shipping are handled seamlessly.",
    icon: Ship,
  },
  {
    step: "06",
    title: "Delivery & Support",
    description:
      "Products reach your destination with continued communication and post-shipment assistance.",
    icon: PackageCheck,
  },
];

export default function SourcingProcess() {
  return (
    <section className="py-28">

      <Container>

        <SectionHeader
          badge="Our Workflow"
          title="Our End-to-End Sourcing Process"
          description="A transparent process designed to minimize risk, ensure quality, and simplify international procurement."
        />

        <div className="relative mx-auto mt-20 max-w-5xl">

          {/* Vertical Line */}

          <div className="absolute left-8 top-10 bottom-10 hidden w-px bg-border lg:block" />

          <div className="space-y-8">

            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.step}
                  className="relative flex gap-8"
                >
                  {/* Icon */}

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

                  {/* Content */}

                  <div
                    className="
                      flex-1
                      rounded-[30px]
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