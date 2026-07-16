import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";

import { Button } from "@/components/ui/buttons/button";

export default function HeroButtons() {
  return (
    <div className="mt-12 flex flex-wrap gap-5">

      <Link href="/request-quote">

        <Button
          size="lg"
          className="
            h-16
            rounded-2xl
            bg-primary
            px-8
            text-base
            font-semibold
            text-white
            shadow-[0_20px_40px_rgba(37,99,235,.35)]
            transition-all
            duration-300
            hover:scale-[1.03]
            hover:bg-primary/90
            hover:shadow-[0_25px_50px_rgba(37,99,235,.45)]
          "
        >
          Request Quote

          <ArrowRight className="ml-2 size-5" />

        </Button>

      </Link>

      <Link href="/products">

        <Button
          variant="outline"
          size="lg"
          className="
            h-16
            rounded-2xl
            border
            border-white/25
            bg-white/10
            px-8
            text-base
            font-semibold
            text-white
            backdrop-blur-xl
            transition-all
            duration-300
            hover:border-white/40
            hover:bg-white/20
            hover:text-white
          "
        >
          <PlayCircle className="mr-2 size-5" />

          Explore Products

        </Button>

      </Link>

    </div>
  );
}