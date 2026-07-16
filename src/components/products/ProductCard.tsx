import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  Package,
} from "lucide-react";

interface ProductCardProps {
  slug: string;
  title: string;
  image: string;
  category: string;
  description: string;
}

export default function ProductCard({
  slug,
  title,
  image,
  category,
  description,
}: ProductCardProps) {
  return (
    <div
      className="
        group
        overflow-hidden
        rounded-[32px]
        border
        border-border
        bg-white
        shadow-sm
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-primary/20
        hover:shadow-2xl
      "
    >
      {/* Image */}

      <div className="relative h-64 overflow-hidden">

        <Image
          src={image}
          alt={title}
          fill
          className="
            object-cover
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        <span
          className="
            absolute
            left-5
            top-5
            rounded-full
            bg-white/90
            px-4
            py-2
            text-xs
            font-semibold
            uppercase
            tracking-[0.18em]
            text-primary
            backdrop-blur
          "
        >
          {category}
        </span>

      </div>

      {/* Content */}

      <div className="p-8">

        <div className="flex items-center gap-3 text-primary">

          <Package className="size-5" />

          <span className="text-sm font-semibold uppercase tracking-[0.15em]">
            Export Ready
          </span>

        </div>

        <h3 className="mt-5 text-2xl font-bold">
          {title}
        </h3>

        <p className="mt-5 leading-8 text-muted-foreground">
          {description}
        </p>

        <div className="mt-8 flex gap-3">

          <Link
            href={`/products/${slug}`}
            className="
              inline-flex
              flex-1
              items-center
              justify-center
              rounded-xl
              bg-primary
              px-5
              py-3
              font-semibold
              text-white
              transition
              hover:opacity-90
            "
          >
            View Details

            <ArrowRight className="ml-2 size-4" />
          </Link>

          <Link
            href="/request-quote"
            className="
              inline-flex
              items-center
              justify-center
              rounded-xl
              border
              border-border
              px-5
              py-3
              font-semibold
              transition
              hover:border-primary
              hover:text-primary
            "
          >
            Quote
          </Link>

        </div>

      </div>
    </div>
  );
}