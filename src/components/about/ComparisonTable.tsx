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
    <div className="w-full overflow-hidden border border-slate-200 bg-white">
      {/* Header */}
      <div className="grid border-b border-slate-200 lg:grid-cols-2">
        <div className="bg-[#f8faf9] px-6 py-5 lg:px-8">
          <span className="text-[10px] font-bold tracking-[0.22em] text-slate-400">
            TRADITIONAL APPROACH
          </span>

          <p className="mt-2 font-heading text-lg font-bold tracking-[-0.02em] text-[#132838]">
            Traditional Sourcing
          </p>
        </div>

        <div className="border-t border-slate-200 bg-[#eef7f1] px-6 py-5 lg:border-l lg:border-t-0 lg:px-8">
          <span className="text-[10px] font-bold tracking-[0.22em] text-[#2f7d5c]">
            THE GLOBALATLAS WAY
          </span>

          <p className="mt-2 font-heading text-lg font-bold tracking-[-0.02em] text-[#132838]">
            GlobalAtlas Exim
          </p>
        </div>
      </div>

      {/* Rows */}
      {comparison.map((item, index) => (
        <ComparisonItem
          key={item.traditional}
          index={index + 1}
          traditional={item.traditional}
          GlobalAtlasExim={item.GlobalAtlasExim}
        />
      ))}
    </div>
  );
}