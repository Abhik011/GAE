import Link from "next/link";

export default function FooterBottom() {
  return (
    <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 text-sm text-slate-400 lg:flex-row">

      <p>
        © 2026 GlobalAtlas Exim. All rights reserved.
      </p>

      <p>
        Designed & Developed by{" "}

        <Link
          href="https://www.creonox.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-white transition-colors hover:text-primary"
        >
          Creonox Technologies
        </Link>

        .
      </p>

    </div>
  );
}