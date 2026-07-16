const stats = [
  {
    value: "100%",
    label: "Verified Suppliers",
  },
  {
    value: "30+",
    label: "Countries Served",
  },
  {
    value: "24/7",
    label: "Export Support",
  },
];

export default function WhyStats() {
  return (
    <div className="mt-16 grid gap-8 text-center md:grid-cols-3">

      {stats.map((stat) => (
        <div key={stat.label}>

          <h3 className="text-5xl font-black text-primary">
            {stat.value}
          </h3>

          <p className="mt-3 text-muted-foreground">
            {stat.label}
          </p>

        </div>
      ))}

    </div>
  );
}