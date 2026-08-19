"use client";

import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header className="fixed z-50 w-full bg-transparent px-5 sm:px-5 sm:pt-4 lg:px-6 lg:pt-5 ">
      <div
        className="
          flex
          min-h-[68px]
          w-full
          items-center
          justify-between
          px-5
          sm:min-h-[72px]
          sm:px-6
          lg:min-h-[76px]
          lg:px-8
          xl:px-10
          2xl:px-14
        "
      >
        {/* Logo */}
        <div className="shrink-0">
          <Logo />
        </div>

        {/* Desktop Navigation + Request Quote */}
        <div className="hidden flex-1 justify-end lg:flex">
          <DesktopNav />
        </div>

        {/* Mobile Navigation */}
        <div className="shrink-0 lg:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}