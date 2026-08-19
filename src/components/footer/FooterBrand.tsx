import Link from "next/link";

import {
  Globe2,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export default function FooterBrand() {
  return (
    <div className="max-w-md">
      {/* Brand */}
      <Link
        href="/"
        className="inline-flex flex-col"
        aria-label="GlobalAtlas Exim Home"
      >
        <span
          className="
            text-xl
            font-black
            leading-none
            tracking-[0.08em]
            text-white
          "
        >
          GLOBALATLAS
        </span>

        <span
          className="
            mt-2
            text-[9px]
            font-bold
            tracking-[0.42em]
            text-[#78d8a7]
          "
        >
          EXIM
        </span>
      </Link>

      {/* Description */}
      <p className="mt-6 max-w-sm text-sm leading-7 text-white/55">
        Connecting Indian businesses with global opportunities through
        sourcing, trade connections, and reliable export support.
      </p>

      {/* Contact */}
      <div className="mt-8 space-y-5">
        <Link
          href="mailto:info@globalatlas.in"
          className="
            group
            flex
            items-start
            gap-3
            text-sm
            text-white/55
            transition-colors
            duration-300
            hover:text-white
          "
        >
          <Mail className="mt-0.5 size-4 shrink-0 text-[#78d8a7]" />

          <span className="transition-transform duration-300 group-hover:translate-x-0.5">
            info@globalatlas.in
          </span>
        </Link>

        <Link
          href="tel:+919022464841"
          className="
            group
            flex
            items-center
            gap-3
            text-sm
            text-white/55
            transition-colors
            duration-300
            hover:text-white
          "
        >
          <Phone className="size-4 shrink-0 text-[#78d8a7]" />

          <span className="transition-transform duration-300 group-hover:translate-x-0.5">
            +91 90224 64841
          </span>
        </Link>

        <div className="flex items-start gap-3 text-sm text-white/55">
          <MapPin className="mt-1 size-4 shrink-0 text-[#78d8a7]" />

          <address className="max-w-xs not-italic leading-6">
            D2 Tulip, Unit 808, Wadhwa Wise City,
            <br />
            Panvel, Navi Mumbai, India
          </address>
        </div>

        <Link
          href="https://www.globalatlas.in"
          target="_blank"
          rel="noopener noreferrer"
          className="
            group
            flex
            items-center
            gap-3
            text-sm
            text-white/55
            transition-colors
            duration-300
            hover:text-white
          "
        >
          <Globe2 className="size-4 shrink-0 text-[#78d8a7]" />

          <span className="transition-transform duration-300 group-hover:translate-x-0.5">
            globalatlas.in
          </span>
        </Link>
      </div>
    </div>
  );
}