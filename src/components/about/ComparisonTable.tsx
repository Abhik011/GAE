// src/components/about/ComparisonItem.tsx

interface ComparisonItemProps {
  index: number;
  traditional: string;
  GlobalAtlasExim: string;
}

export default function ComparisonItem({
  index,
  traditional,
  GlobalAtlasExim,
}: ComparisonItemProps) {
  const formattedIndex = String(index).padStart(2, "0");

  return (
    <div
      className="
        grid
        border-b
        border-slate-200
        last:border-b-0
        lg:grid-cols-2
      "
    >
      {/* Traditional Approach */}
      <div
        className="
          flex
          items-center
          gap-4
          bg-white
          px-6
          py-5
          lg:px-8
        "
      >
        <span
          className="
            shrink-0
            text-[10px]
            font-bold
            tracking-[0.18em]
            text-slate-300
          "
        >
          {formattedIndex}
        </span>

        <p
          className="
            text-sm
            font-medium
            leading-6
            text-slate-500
          "
        >
          {traditional}
        </p>
      </div>

      {/* GlobalAtlas Exim Approach */}
      <div
        className="
          flex
          items-center
          gap-4
          border-t
          border-slate-200
          bg-[#f7fbf8]
          px-6
          py-5
          lg:border-l
          lg:border-t-0
          lg:px-8
        "
      >
        <span
          className="
            shrink-0
            text-[10px]
            font-bold
            tracking-[0.18em]
            text-[#2f7d5c]
          "
        >
          {formattedIndex}
        </span>

        <p
          className="
            text-sm
            font-semibold
            leading-6
            text-[#132838]
          "
        >
          {GlobalAtlasExim}
        </p>
      </div>
    </div>
  );
}