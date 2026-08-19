"use client";

import { usePathname } from "next/navigation";

import Header from "../components/layout/Header";
import Footer from "../components/footer/Footer";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const hideLayout =
    pathname === "/abhijeet-kulkarni" || 
    pathname === "/yash-kadam" ||
    pathname === "/404";

  return (
    <>
      {!hideLayout && <Header />}

      {children}

      {!hideLayout && <Footer />}
    </>
  );
}