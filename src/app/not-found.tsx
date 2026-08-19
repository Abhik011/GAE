"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import {
  Globe2,
  ArrowLeft,
  Search,
  MoveUpRight,
  Ship,
} from "lucide-react";

import Container from "@/components/ui/container/Container";
import { Button } from "@/components/ui/buttons/button";

export default function NotFound() {
  const [mounted, setMounted] = useState(false);
  const [position, setPosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden bg-white pt-28 pb-20"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();

        setPosition({
          x: ((event.clientX - rect.left) / rect.width) * 100,
          y: ((event.clientY - rect.top) / rect.height) * 100,
        });
      }}
    >
      {/* Interactive green glow */}

      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-70 transition-all duration-300"
        style={{
          background: `radial-gradient(
            500px circle at ${position.x}% ${position.y}%,
            rgba(47, 125, 92, 0.08),
            transparent 65%
          )`,
        }}
      />

      {/* Ocean Background */}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[45vh] min-h-[320px] overflow-hidden">
        {/* Water base */}

        <div className="absolute inset-0 bg-gradient-to-b from-[#2f7d5c]/0 via-[#2f7d5c]/5 to-[#132838]/10" />

        {/* Wave 1 */}

        <svg
          className="absolute bottom-0 left-0 h-full w-[200%] animate-[waveMove_18s_linear_infinite]"
          viewBox="0 0 2880 500"
          preserveAspectRatio="none"
        >
          <path
            d="
              M0,260
              C180,190 360,330 540,260
              C720,190 900,330 1080,260
              C1260,190 1440,330 1620,260
              C1800,190 1980,330 2160,260
              C2340,190 2520,330 2700,260
              C2790,220 2850,220 2880,240
              L2880,500
              L0,500
              Z
            "
            fill="rgba(47,125,92,0.08)"
          />
        </svg>

        {/* Wave 2 */}

        <svg
          className="absolute bottom-0 left-0 h-full w-[200%] animate-[waveMoveReverse_24s_linear_infinite]"
          viewBox="0 0 2880 500"
          preserveAspectRatio="none"
        >
          <path
            d="
              M0,320
              C200,250 400,390 600,320
              C800,250 1000,390 1200,320
              C1400,250 1600,390 1800,320
              C2000,250 2200,390 2400,320
              C2600,250 2780,370 2880,320
              L2880,500
              L0,500
              Z
            "
            fill="rgba(19,40,56,0.07)"
          />
        </svg>

        {/* Wave 3 */}

        <svg
          className="absolute bottom-0 left-0 h-full w-[200%] animate-[waveMove_30s_linear_infinite]"
          viewBox="0 0 2880 500"
          preserveAspectRatio="none"
        >
          <path
            d="
              M0,380
              C240,320 480,430 720,380
              C960,320 1200,430 1440,380
              C1680,320 1920,430 2160,380
              C2400,320 2640,430 2880,380
              L2880,500
              L0,500
              Z
            "
            fill="rgba(47,125,92,0.12)"
          />
        </svg>

        {/* Water highlight */}

        <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-[#2f7d5c]/5 to-transparent" />
      </div>

      <Container>
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          {/* Animated Ship */}

          <div
            className={`relative mx-auto h-24 transition-all duration-700 ${
              mounted
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }`}
          >
            <div className="absolute left-1/2 top-5 -translate-x-1/2 animate-[shipFloat_4s_ease-in-out_infinite]">
              <div className="relative flex h-20 w-20 items-center justify-center rounded-[24px] border border-[#2f7d5c]/15 bg-white/90 text-[#2f7d5c] shadow-lg shadow-[#132838]/5 backdrop-blur">
                <Ship className="size-9" strokeWidth={1.5} />

                {/* Route line */}

                <span className="absolute -left-16 top-1/2 h-px w-12 -translate-y-1/2 border-t border-dashed border-[#2f7d5c]/40" />

                <span className="absolute -right-16 top-1/2 h-px w-12 -translate-y-1/2 border-t border-dashed border-[#2f7d5c]/40" />
              </div>
            </div>
          </div>

          {/* 404 */}

          <div
            className={`relative mt-5 transition-all duration-700 delay-100 ${
              mounted
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <p className="font-heading text-[8rem] font-black leading-none tracking-[-0.08em] text-transparent [-webkit-text-stroke:1.5px_#2f7d5c] sm:text-[11rem] lg:text-[14rem]">
              404
            </p>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <span className="rounded-full border border-[#2f7d5c]/10 bg-white/90 px-4 py-2 text-[10px] font-bold tracking-[0.22em] text-[#2f7d5c] shadow-sm backdrop-blur">
                ROUTE NOT FOUND
              </span>
            </div>
          </div>

          {/* Content */}

          <div
            className={`transition-all duration-700 delay-200 ${
              mounted
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }`}
          >
            <h1 className="mt-2 font-heading text-3xl font-black tracking-[-0.04em] text-[#132838] sm:text-5xl">
              This route is blocked.
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-500 sm:text-lg">
              Looks like this destination doesn't exist or has moved.
              Let's help you find the right route.
            </p>
          </div>

          {/* Actions */}

          <div
            className={`mt-9 flex flex-wrap justify-center gap-3 transition-all duration-700 delay-300 ${
              mounted
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }`}
          >
            <Link href="/">
              <Button className="group h-11 rounded-xl bg-[#2f7d5c] px-5 text-white transition-all hover:-translate-y-0.5 hover:bg-[#256b4e] hover:shadow-lg hover:shadow-[#2f7d5c]/20">
                <ArrowLeft className="mr-2 size-4 transition-transform duration-300 group-hover:-translate-x-1" />
                Back to Home
              </Button>
            </Link>

            <Link href="/products">
              <Button
                variant="outline"
                className="group h-11 rounded-xl border-slate-200 bg-white px-5 text-[#132838] transition-all hover:-translate-y-0.5 hover:border-[#2f7d5c] hover:text-[#2f7d5c]"
              >
                <Search className="mr-2 size-4" />
                Browse Products
                <MoveUpRight className="ml-2 size-3.5 opacity-50 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
              </Button>
            </Link>
          </div>

          {/* Navigation */}

          <div
            className={`mt-12 flex flex-wrap justify-center gap-x-7 gap-y-3 text-sm transition-all duration-700 delay-500 ${
              mounted ? "opacity-100" : "opacity-0"
            }`}
          >
            <Link
              href="/services"
              className="text-slate-400 transition-colors hover:text-[#2f7d5c]"
            >
              Services
            </Link>

            <Link
              href="/industries"
              className="text-slate-400 transition-colors hover:text-[#2f7d5c]"
            >
              Industries
            </Link>

            <Link
              href="/become-supplier"
              className="text-slate-400 transition-colors hover:text-[#2f7d5c]"
            >
              Become a Supplier
            </Link>

            <Link
              href="/contact"
              className="text-slate-400 transition-colors hover:text-[#2f7d5c]"
            >
              Contact
            </Link>
          </div>
        </div>
      </Container>

      <style jsx>{`
        @keyframes waveMove {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @keyframes waveMoveReverse {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }

        @keyframes shipFloat {
          0%,
          100% {
            transform: translateY(0) rotate(-1deg);
          }

          50% {
            transform: translateY(-8px) rotate(1deg);
          }
        }
      `}</style>
    </section>
  );
}