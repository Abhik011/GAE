"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

import { navigation } from "@/config/navigation";
import { cn } from "@/lib/utils";

export default function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav
      className="hidden items-center gap-7 lg:flex xl:gap-9"
      aria-label="Primary navigation"
    >
      {navigation.map((item) => {
        const isActive =
          pathname === item.href ||
          (item.href !== "/" && pathname.startsWith(item.href));

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "relative text-[13px] font-semibold tracking-[0.02em] transition-colors duration-300",
              isActive
                ? "text-[#2f7d5c]"
                : "text-slate-500 hover:text-[#132838]"
            )}
          >
            {item.title}
          </Link>
        );
      })}

      {/* Request a Quote */}
      <Link
        href="/request-quote"
        className="
          group
          ml-2
          inline-flex
          items-center
          gap-2
          bg-[#132838]
          px-5
          py-3
          text-[11px]
          font-bold
          uppercase
          tracking-[0.12em]
          text-white
          transition-colors
          duration-300
          hover:bg-[#2f7d5c]
        "
      >
        Request a Quote

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
    </nav>
  );
}