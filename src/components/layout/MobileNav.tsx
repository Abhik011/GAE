"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ArrowUpRight } from "lucide-react";

import { navigation } from "@/config/navigation";
import { Button } from "@/components/ui/buttons/button";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <div className="xl:hidden">
      <Sheet>
        <SheetTrigger
          render={
            <Button
              variant="ghost"
              size="icon"
              className="
                size-10
                rounded-xl
                border
                border-slate-200
                bg-white
                text-[#132838]
                shadow-sm
                transition-all
                duration-300
                hover:border-[#2f7d5c]/30
                hover:bg-[#2f7d5c]/5
                hover:text-[#2f7d5c]
              "
              aria-label="Open navigation menu"
            />
          }
        >
          <Menu className="size-5" />
        </SheetTrigger>

        <SheetContent
          side="right"
          className="
            z-[100]
            flex
            w-[min(90vw,400px)]
            flex-col
            border-l
            border-slate-200
            bg-white
            p-0
            shadow-2xl
          "
        >
          {/* Top */}

          <div className="flex items-center justify-between border-b border-slate-100 px-7 py-6">
            <div>
              <p className="text-[10px] font-bold tracking-[0.22em] text-[#2f7d5c]">
                GLOBALATLAS EXIM
              </p>

              <p className="mt-1 text-xs text-slate-400">
                Navigate the world of trade
              </p>
            </div>
          </div>

          {/* Navigation */}

          <div className="flex-1 px-7 py-8">
            <p className="mb-5 text-[10px] font-bold tracking-[0.22em] text-slate-400">
              MENU
            </p>

            <nav className="flex flex-col">
              {navigation.map((item, index) => {
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
                          group
                          flex
                          items-center
                          justify-between
                          border-b
                          border-slate-100
                          py-5
                          transition-all
                          duration-300
                          ${
                            isActive
                              ? "text-[#2f7d5c]"
                              : "text-[#132838] hover:text-[#2f7d5c]"
                          }
                        `}
                      />
                    }
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`
                          text-[10px]
                          font-bold
                          tracking-wider
                          ${
                            isActive
                              ? "text-[#2f7d5c]"
                              : "text-slate-300"
                          }
                        `}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-lg font-semibold">
                        {item.title}
                      </span>
                    </div>

                    <ArrowUpRight
                      className={`
                        size-4
                        transition-all
                        duration-300
                        ${
                          isActive
                            ? "translate-x-0 translate-y-0 text-[#2f7d5c]"
                            : "text-slate-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#2f7d5c]"
                        }
                      `}
                    />
                  </SheetClose>
                );
              })}
            </nav>
          </div>

          {/* Bottom CTA */}

          <div className="border-t border-slate-100 p-7">
            <SheetClose
             nativeButton={false}
              render={
                <Link href="/request-quote" />
              }
            >
              <div
                className="
                  group
                  flex
                  h-14
                  items-center
                  justify-between
                  rounded-xl
                  bg-[#132838]
                  px-5
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#2f7d5c]
                "
              >
                <div>
                  <p className="text-sm font-bold">
                    Request a Quote
                  </p>

                  <p className="mt-0.5 text-[10px] text-white/60">
                    Start sourcing from India
                  </p>
                </div>

                <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </div>
            </SheetClose>

            <p className="mt-5 text-center text-[10px] font-medium tracking-[0.14em] text-slate-400">
              BEYOND EVERY BORDER
            </p>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}