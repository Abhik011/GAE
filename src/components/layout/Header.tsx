"use client";

import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import HeaderActions from "./HeaderActions";
import MobileNav from "./MobileNav";

import Container from "@/components/ui/container/Container";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-4 lg:pt-5">

      <Container>

        <div
          className="
            flex
            h-16
            items-center
            justify-between
            rounded-[24px]
            border
            border-border/70
            bg-white/80
            px-4
            shadow-[0_12px_40px_rgba(15,61,122,.08)]
            backdrop-blur-2xl
            lg:h-[76px]
            lg:px-8
          "
        >
          <Logo />

          <div className="hidden xl:flex">
            <DesktopNav />
          </div>

          <div className="hidden xl:block">
            <HeaderActions />
          </div>

          <div className="xl:hidden">
            <MobileNav />
          </div>

        </div>

      </Container>

    </header>
  );
}