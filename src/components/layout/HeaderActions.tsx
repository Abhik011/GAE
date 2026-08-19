"use client";

import Link from "next/link";

import { Button } from "@/components/ui/buttons/button";

export default function HeaderActions() {
  return (
    <div className="flex shrink-0 items-center gap-3">
      <Link href="/become-supplier" className="hidden lg:block">
        <Button
          variant="outline"
          className="
            h-12
            rounded-2xl
            border-slate-300
            px-7
            text-sm
            font-semibold
            tracking-[0.08em]
            transition-all
            duration-300
            hover:border-primary
            hover:bg-primary/5
            hover:text-primary
          "
        >
          Become Supplier
        </Button>
      </Link>

      <Link href="/request-quote">
        <Button
          className="
            h-12
            rounded-2xl
            px-8
            text-sm
            font-semibold
            tracking-[0.08em]
            shadow-lg
            shadow-primary/15
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:shadow-xl
            hover:shadow-primary/25
          "
        >
          Request Quote
        </Button>
      </Link>
    </div>
  );
}