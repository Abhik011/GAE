import { Mail, Phone, MapPin } from "lucide-react";

import Container from "@/components/ui/container/Container";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-28 lg:py-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,.08),transparent_35%)]" />

      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex rounded-full bg-primary/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            Contact Us
          </span>

          <h1 className="mt-8 text-5xl font-black leading-tight lg:text-7xl">
            Let's Grow Your
            <span className="block text-primary">
              Global Business
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-muted-foreground">
            Whether you're looking for reliable suppliers, export solutions, or
            business partnerships, our team is ready to help.
          </p>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border bg-white p-6 shadow-sm">
              <Mail className="mx-auto size-8 text-primary" />

              <h3 className="mt-5 font-bold">
                Email
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                info@GlobalAtlas Exim.com
              </p>
            </div>

            <div className="rounded-3xl border bg-white p-6 shadow-sm">
              <Phone className="mx-auto size-8 text-primary" />

              <h3 className="mt-5 font-bold">
                Call Us
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                +91 9022464841
              </p>
            </div>

            <div className="rounded-3xl border bg-white p-6 shadow-sm">
              <MapPin className="mx-auto size-8 text-primary" />

              <h3 className="mt-5 font-bold">
                Office
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                D2 Tulip, Unit 808
Wadhwa Wise City
Panvel, Navi Mumbai
Maharashtra 410206
India
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}