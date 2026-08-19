"use client";

import Logo from "./Logo";
import DesktopNav from "./DesktopNav";

import MobileNav from "./MobileNav";

import Container from "@/components/ui/container/Container";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4 lg:pt-5">
      <Container>
        <div
          className="
            group
            relative
            flex
            h-[68px]
            items-center
            justify-between
            gap-4
            overflow-hidden
            rounded-[22px]
            border
            border-slate-200/70
            bg-white/[0.82]
            px-4
            shadow-[0_8px_30px_rgba(10,31,51,0.08)]
            backdrop-blur-2xl
            transition-all
            duration-500
            hover:border-slate-200
            hover:shadow-[0_14px_45px_rgba(10,31,51,0.10)]
            sm:px-5
            lg:h-[76px]
            lg:rounded-[26px]
            lg:px-7
            xl:px-8
          "
        >
          {/* Subtle premium top highlight */}
          <div
            className="
              pointer-events-none
              absolute
              inset-x-0
              top-0
              h-px
              bg-gradient-to-r
              from-transparent
              via-white
              to-transparent
            "
          />

          {/* Soft brand glow */}
          <div
            className="
              pointer-events-none
              absolute
              -left-16
              top-1/2
              h-32
              w-32
              -translate-y-1/2
              rounded-full
              bg-primary/[0.035]
              blur-3xl
            "
          />

          {/* Logo */}
          <div className="relative z-10 shrink-0">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className="relative z-10 hidden flex-1 justify-center xl:flex">
            <DesktopNav />
          </div>

          {/* Desktop Actions */}
          {/* <div className="relative z-10 hidden shrink-0 xl:block">
            <HeaderActions />
          </div> */}

          {/* Mobile Navigation */}
          <div className="relative z-20 shrink-0 xl:hidden">
            <MobileNav />
          </div>
        </div>
      </Container>
    </header>
  );
}