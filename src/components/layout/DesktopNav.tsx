"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigation } from "@/config/navigation";
import { cn } from "@/lib/utils";

export default function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden items-center gap-8 xl:gap-10 lg:flex">
      {navigation.map((item) => {
        const isActive =
          pathname === item.href ||
          (item.href !== "/" && pathname.startsWith(item.href));

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "group relative py-2 text-[15px] font-medium transition-all duration-300",
              isActive
                ? "text-primary font-semibold"
                : "text-slate-600 hover:text-primary"
            )}
          >
            {item.title}

            <span
              className={cn(
                "absolute -bottom-1 left-0 h-0.5 rounded-full bg-primary transition-all duration-300",
                isActive
                  ? "w-full"
                  : "w-0 group-hover:w-full"
              )}
            />
          </Link>
        );
      })}
    </nav>
  );
}