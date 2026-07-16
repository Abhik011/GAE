interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
}

export default function SectionHeader({
  badge,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center">

      {badge && (
        <span
          className="
            inline-flex
            rounded-full
            border
            border-primary/10
            bg-primary/5
            px-4
            py-2
            text-xs
            font-semibold
            uppercase
            tracking-[0.15em]
            text-primary
          "
        >
          {badge}
        </span>
      )}

      <h2 className="mt-6 font-heading text-4xl font-extrabold text-slate-900 lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          {description}
        </p>
      )}

    </div>
  );
}