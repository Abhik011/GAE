interface TestimonialCardProps {
  name: string;
  company: string;
  country: string;
  review: string;
}

export default function TestimonialCard({
  name,
  company,
  country,
  review,
}: TestimonialCardProps) {
  return (
    <div className="rounded-3xl border border-border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      <div className="mb-6 flex text-amber-400">
        ★★★★★
      </div>

      <p className="leading-8 text-muted-foreground">
        "{review}"
      </p>

      <div className="mt-8">
        <h4 className="font-bold">
          {name}
        </h4>

        <p className="text-sm text-muted-foreground">
          {company}
        </p>

        <p className="text-sm text-primary">
          {country}
        </p>
      </div>

    </div>
  );
}