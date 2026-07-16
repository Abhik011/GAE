"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import { navigation } from "@/config/navigation";

import { Button } from "@/components/ui/buttons/button";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function MobileNav() {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger
          render={
            <Button
              variant="ghost"
              size="icon"
            />
          }
        >
          <Menu className="size-6" />
        </SheetTrigger>

        <SheetContent side="right">
          <nav className="mt-12 flex flex-col gap-6">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-lg font-semibold"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}