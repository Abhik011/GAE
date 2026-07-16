import Link from "next/link";
import Image from "next/image";

import { company } from "@/config/company";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex shrink-0 items-center gap-3"
    >
      <Image
        src="/logos/logo.svg"
        alt={company.shortName}
        width={56}
        height={56}
        priority
        className="h-11 w-auto md:h-12 lg:h-14"
      />

      <div className="hidden min-[480px]:block">

        <h1
          className="
            font-heading
            text-l
            font-black
            leading-none
            tracking-tight
            lg:text-l
          "
        >
          <span className="text-slate-900">
            GLOBAL
          </span>

          <span className="text-primary">
            ATLAS
          </span>{" "}

          <span className="text-slate-900">
            EXIM
          </span>

        </h1>

       

      </div>

    </Link>
  );
}