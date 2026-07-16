import {
  BadgeCheck,
  Building2,
  FileCheck2,
  FileText,
  ImageIcon,
  ShieldCheck,
} from "lucide-react";

import Container from "@/components/ui/container/Container";
import SectionHeader from "@/components/sections/SectionHeader";

const documents = [
  {
    icon: Building2,
    title: "Company Registration",
    description:
      "Certificate of Incorporation, GST registration or equivalent business registration.",
  },
  {
    icon: FileText,
    title: "Company Profile",
    description:
      "A PDF introducing your company, manufacturing capabilities and export experience.",
  },
  {
    icon: ImageIcon,
    title: "Product Catalogue",
    description:
      "Images, brochures or catalogues showcasing your products.",
  },
  {
    icon: BadgeCheck,
    title: "Certifications",
    description:
      "ISO, CE, FDA, HACCP, GMP, FSSAI or any other relevant certifications.",
  },
  {
    icon: ShieldCheck,
    title: "Factory Images",
    description:
      "Production line, warehouse, machinery and facility photographs.",
  },
  {
    icon: FileCheck2,
    title: "Export Documents",
    description:
      "Previous export records, IEC, shipping documents or compliance certificates (if available).",
  },
];

export default function RequiredDocuments() {
  return (
    <section className="bg-slate-50 py-28">

      <Container>

        <SectionHeader
          badge="Required Documents"
          title="Prepare Your Application"
          description="Having these documents ready will help us review your application faster."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {documents.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  group
                  rounded-[32px]
                  border
                  border-border
                  bg-white
                  p-8
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-primary/20
                  hover:shadow-xl
                "
              >
                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-2xl
                    bg-primary/10
                    text-primary
                    transition-all
                    duration-300
                    group-hover:bg-primary
                    group-hover:text-white
                  "
                >
                  <Icon className="size-8" />
                </div>

                <h3 className="mt-8 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-5 leading-8 text-muted-foreground">
                  {item.description}
                </p>

              </div>
            );
          })}

        </div>

      </Container>

    </section>
  );
}