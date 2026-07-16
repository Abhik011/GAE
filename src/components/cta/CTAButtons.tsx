import Link from "next/link";

import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/buttons/button";

export default function CTAButtons() {
  return (
    <div className="mt-10 flex flex-wrap justify-center gap-4">

      <Link href="/request-quote">
        <Button
          size="lg"
          className="h-12 rounded-2xl px-8"
        >
          Request Quote

          <ArrowRight className="ml-2 size-4" />
        </Button>
      </Link>

      <Link href="/become-supplier">
        <Button
          variant="outline"
          size="lg"
          className="h-12 rounded-2xl px-8"
        >
          Become Supplier
        </Button>
      </Link>

    </div>
  );
}