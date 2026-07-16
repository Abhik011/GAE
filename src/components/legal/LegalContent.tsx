import Container from "@/components/ui/container/Container";

interface Section {
  title: string;
  content: string;
}

interface LegalContentProps {
  sections: Section[];
}

export default function LegalContent({
  sections,
}: LegalContentProps) {
  return (
    <section className="py-28">

      <Container>

        <div className="mx-auto max-w-5xl rounded-[36px] border border-border bg-white p-12 shadow-sm">

          <div className="space-y-16">

            {sections.map((section) => (
              <div
                key={section.title}
              >
                <h2 className="text-3xl font-bold">
                  {section.title}
                </h2>

                <p className="mt-6 leading-9 text-muted-foreground">
                  {section.content}
                </p>

              </div>
            ))}

          </div>

        </div>

      </Container>

    </section>
  );
}