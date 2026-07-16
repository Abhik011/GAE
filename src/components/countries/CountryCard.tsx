interface CountryCardProps {
  name: string;
  code: string;
}

export default function CountryCard({
  name,
  code,
}: CountryCardProps) {
  return (
    <div
      className="
        flex
        items-center
        gap-4

        rounded-2xl

        border
        border-border

        bg-white

        p-5

        transition-all

        duration-300

        hover:-translate-y-1

        hover:border-primary/20

        hover:shadow-lg
      "
    >
      <img
        src={`https://flagcdn.com/w80/${code.toLowerCase()}.png`}
        alt={name}
        className="h-8 w-12 rounded object-cover"
      />

      <span className="font-medium">
        {name}
      </span>
    </div>
  );
}