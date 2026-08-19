"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { navigation } from "@/config/navigation";
import { Button } from "@/components/ui/buttons/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <div className="xl:hidden">
      <Sheet>
        {/* Menu Button */}
        <SheetTrigger
          render={
            <Button
              variant="ghost"
              size="icon"
              className="
                size-10
                rounded-none
                border-0
                bg-transparent
                p-0
                text-[#132838]
                shadow-none
                hover:bg-transparent
                hover:text-[#2f7d5c]
              "
              aria-label="Open navigation menu"
            />
          }
        >
          <Menu className="size-6" />
        </SheetTrigger>

        {/* Minimal Mobile Menu */}
        <SheetContent
          side="right"
          className="
            z-[100]
            flex
            w-[min(85vw,360px)]
            flex-col
            border-l
            border-slate-100
            bg-white
            p-0
            shadow-none
          "
        >
          {/* Brand */}
          <div className="px-7 pb-8 pt-7">
            <p className="text-[10px] font-bold tracking-[0.2em] text-[#2f7d5c]">
              GLOBALATLAS EXIM
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col px-7">
            {navigation.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" &&
                  pathname.startsWith(`${item.href}/`));

              return (
                <SheetClose
                  key={item.href}
                  nativeButton={false}
                  render={
                    <Link
                      href={item.href}
                      className={`
                        border-b
                        border-slate-100
                        py-4
                        text-base
                        font-medium
                        transition-colors
                        duration-200
                        ${
                          isActive
                            ? "text-[#2f7d5c]"
                            : "text-[#132838] hover:text-[#2f7d5c]"
                        }
                      `}
                    />
                  }
                >
                  {item.title}
                </SheetClose>
              );
            })}
          </nav>

          {/* Simple Quote Link */}
          <div className="mt-auto px-7 pb-8 pt-8">
            <SheetClose
              nativeButton={false}
              render={
                <Link
                  href="/request-quote"
                  className="
                    text-sm
                    font-semibold
                    text-[#132838]
                    transition-colors
                    hover:text-[#2f7d5c]
                  "
                />
              }
            >
              Request a Quote
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}