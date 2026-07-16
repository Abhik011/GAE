import { CheckCircle2, XCircle } from "lucide-react";

interface ComparisonItemProps {
  traditional: string;
  GlobalAtlasExim: string;
}

export default function ComparisonItem({
  traditional,
  GlobalAtlasExim,
}: ComparisonItemProps) {
  return (
    <div className="grid items-center gap-6 border-b border-border py-6 lg:grid-cols-2">

      <div className="flex items-center gap-3 text-slate-500">

        <XCircle className="size-5 text-red-500" />

        <span>{traditional}</span>

      </div>

      <div className="flex items-center gap-3 font-medium text-slate-900">

        <CheckCircle2 className="size-5 text-primary" />

        <span>{GlobalAtlasExim}</span>

      </div>

    </div>
  );
}