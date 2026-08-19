import Image from "next/image";
import Link from "next/link";

import {
  ArrowUpRight,
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
    <article className="group">
      {/* Image */}

      <Link
        href={`/products/${slug}`}
        className="
          relative
          block
          aspect-[4/3]
          overflow-hidden
          bg-slate-200
        "
      >
        <Image
          src={image}
          alt={title}
          fill
          className="
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-[1.03]
          "
        />

        {/* Subtle image overlay */}

        <div
          className="
            absolute
            inset-0
            bg-[#132838]/0
            transition-colors
            duration-500
            group-hover:bg-[#132838]/10
          "
        />

        {/* Category */}

        <span
          className="
            absolute
            left-5
            top-5
            bg-white
            px-3
            py-1.5
            text-[10px]
            font-bold
            uppercase
            tracking-[0.18em]
            text-[#132838]
          "
        >
          {category}
        </span>
      </Link>

      {/* Content */}

      <div className="border-b border-slate-200 pb-7 pt-6">
        {/* Meta */}

        <div
          className="
            flex
            items-center
            gap-2
            text-[10px]
            font-bold
            uppercase
            tracking-[0.18em]
            text-[#2f7d5c]
          "
        >
          <Package
            className="size-3.5"
            strokeWidth={1.7}
          />

          Export Sourcing
        </div>

        {/* Title */}

        <Link href={`/products/${slug}`}>
          <h3
            className="
              mt-4
              font-heading
              text-2xl
              font-bold
              tracking-[-0.03em]
              text-[#132838]
              transition-colors
              duration-300
              group-hover:text-[#2f7d5c]
            "
          >
            {title}
          </h3>
        </Link>

        {/* Description */}

        <p
          className="
            mt-3
            min-h-[72px]
            text-sm
            leading-6
            text-slate-500
          "
        >
          {description}
        </p>

        {/* Bottom */}

        <div className="mt-6 flex items-center justify-between">
          <Link
            href={`/products/${slug}`}
            className="
              inline-flex
              items-center
              gap-2
              text-[11px]
              font-bold
              uppercase
              tracking-[0.16em]
              text-[#132838]
              transition-colors
              duration-300
              hover:text-[#2f7d5c]
            "
          >
            View Product

            <ArrowUpRight
              className="
                size-4
                transition-transform
                duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />
          </Link>

          <Link
            href="/request-quote"
            className="
              text-[10px]
              font-bold
              uppercase
              tracking-[0.16em]
              text-slate-400
              transition-colors
              duration-300
              hover:text-[#2f7d5c]
            "
          >
            Request Quote
          </Link>
        </div>
      </div>
    </article>
  );
}