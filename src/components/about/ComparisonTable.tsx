import ComparisonItem from "./ComparisonItem";

const comparison = [
  {
    traditional: "Unknown Suppliers",
    GlobalAtlasExim: "Verified Manufacturers",
  },
  {
    traditional: "Quality Uncertainty",
    GlobalAtlasExim: "Independent Quality Inspection",
  },
  {
    traditional: "Complex Documentation",
    GlobalAtlasExim: "Complete Export Documentation",
  },
  {
    traditional: "Multiple Service Providers",
    GlobalAtlasExim: "Single Point of Contact",
  },
  {
    traditional: "Logistics Coordination",
    GlobalAtlasExim: "End-to-End Logistics Support",
  },
  {
    traditional: "Limited Communication",
    GlobalAtlasExim: "Dedicated Export Assistance",
  },
];

export default function ComparisonTable() {
  return (
    <div className="overflow-hidden rounded-[32px] border border-border bg-white shadow-sm">

      <div className="grid bg-slate-50 p-6 font-bold lg:grid-cols-2">

        <div>Traditional Sourcing</div>

        <div className="text-primary">
          GlobalAtlas Exim
        </div>

      </div>

      <div className="px-8">

        {comparison.map((item) => (
          <ComparisonItem
            key={item.traditional}
            {...item}
          />
        ))}

      </div>

    </div>
  );
}