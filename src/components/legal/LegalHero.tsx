import Container from "@/components/ui/container/Container";

interface LegalHeroProps {
  badge: string;
  title: string;
  description: string;
}

export default function LegalHero({
  badge,
  title,
  description,
}: LegalHeroProps) {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-32">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,.08),transparent_35%)]" />

      <div className="absolute -left-40 top-0 h-[400px] w-[400px] rounded-full bg-primary/10 blur-[120px]" />

      <div className="absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-sky-500/10 blur-[120px]" />

      <Container>

        <div className="mx-auto max-w-4xl text-center">

          <span className="inline-flex rounded-full bg-primary/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            {badge}
          </span>

          <h1 className="mt-8 font-heading text-5xl font-black lg:text-7xl">
            {title}
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-muted-foreground">
            {description}
          </p>

          <div className="mt-10 inline-flex rounded-full border border-border bg-white px-6 py-3 text-sm text-muted-foreground shadow-sm">
            Last Updated: July 2026
          </div>

        </div>

      </Container>

    </section>
  );
}