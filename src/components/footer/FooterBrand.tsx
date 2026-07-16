import Link from "next/link";

import {
  Globe,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export default function FooterBrand() {
  return (
    <div className="max-w-sm">

      <Link
        href="/"
        className="font-heading text-3xl font-black tracking-tight "
      >
        <h1
          className="
            font-heading
            text-xl
            font-black
            leading-none
            tracking-tight
            lg:text-xl
          "
        >
          <span className="text-white">
            GLOBAL
          </span>

          <span className="text-white">
            ATLAS
          </span>{" "}

          <span className="text-white">
             EXIM
          </span>

        </h1>
      </Link>

      <p className="mt-4 leading-7 text-slate-400">
        Connecting Indian manufacturers with global buyers through trusted
        sourcing, export documentation and worldwide logistics.
      </p>

      <div className="mt-8 space-y-4">

        <Link
          href="mailto:info@GlobalAtlas Exim.in"
          className="flex items-center gap-3 text-slate-400 transition hover:text-white"
        >
          <Mail className="size-4 shrink-0 text-primary" />
          <span>info@GlobalAtlas Exim.in</span>
        </Link>

        <Link
          href="tel:+919022468441"
          className="flex items-center gap-3 text-slate-400 transition hover:text-white"
        >
          <Phone className="size-4 shrink-0 text-primary" />
          <span>+91 9022464841</span>
        </Link>

        <div className="flex items-center gap-3 text-slate-400">

          <MapPin className="size-4 shrink-0 text-primary" />

          <address className="not-italic leading-6">
            D2 Tulip, Unit 808, Wadhwa Wise City, Panvel, Navi Mumbai
          </address>

        </div>

        <Link
          href="https://www.globalatlas.in"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-slate-400 transition hover:text-white"
        >
          <Globe className="size-4 shrink-0 text-primary" />
          <span>www.globalatlas.in</span>
        </Link>

      </div>

    </div>
  );
}