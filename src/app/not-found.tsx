import Link from "next/link";

import { Globe2, ArrowLeft, Search } from "lucide-react";

import Container from "@/components/ui/container/Container";
import { Button } from "@/components/ui/buttons/button";

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center bg-gradient-to-br from-slate-50 via-white to-primary/5 pt-32 pb-20">

      <Container>

        <div className="mx-auto max-w-4xl text-center">

          {/* Icon */}

          <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-primary/10 ring-8 ring-primary/5">

            <Globe2 className="size-14 text-primary" />

          </div>

          {/* 404 */}

          <p className="mt-10 text-8xl font-black tracking-tight text-primary/15 lg:text-9xl">
            404
          </p>

          {/* Heading */}

          <h1 className="mt-2 text-4xl font-black tracking-tight text-slate-900 lg:text-6xl">
            Page Not Found
          </h1>

          {/* Description */}

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            The page you're looking for doesn't exist, may have been moved,
            or the URL may be incorrect.
          </p>

          {/* Buttons */}

          <div className="mt-12 flex flex-wrap justify-center gap-4">

            <Link href="/">
              <Button
                size="lg"
                className="h-14 rounded-2xl px-8"
              >
                <ArrowLeft className="mr-2 size-5" />
                Back to Home
              </Button>
            </Link>

            <Link href="/products">
              <Button
                variant="outline"
                size="lg"
                className="h-14 rounded-2xl px-8"
              >
                <Search className="mr-2 size-5" />
                Browse Products
              </Button>
            </Link>

          </div>

          {/* Quick Links */}

          <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm font-medium text-slate-500">

            <Link
              href="/services"
              className="transition hover:text-primary"
            >
              Services
            </Link>

            <Link
              href="/industries"
              className="transition hover:text-primary"
            >
              Industries
            </Link>

            <Link
              href="/become-supplier"
              className="transition hover:text-primary"
            >
              Become a Supplier
            </Link>

            <Link
              href="/contact"
              className="transition hover:text-primary"
            >
              Contact Us
            </Link>

          </div>

        </div>

      </Container>

    </section>
  );
}