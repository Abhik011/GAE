import Link from "next/link";
import Image from "next/image";
import "../../app/abhijeet-kulkarni/abhijeet-kulkarni.css";
import { company } from "@/config/company";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex shrink-0 items-center gap-3"
      aria-label={`${company.shortName} Home`}
    >
      <Image
        src="/logos/logo.svg"
        alt={company.shortName}
        width={56}
        height={56}
        priority
        className="h-11 w-auto md:h-12 lg:h-14"
      />

      <div className="block">
        <span className="ak-brand-text">
          <strong>GLOBALATLAS</strong>
         <small style={{ color: "#2d9b68" }}>EXIM</small>
        </span>
      </div>
    </Link>
  );
}