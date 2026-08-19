import { Mail, MapPin, Phone } from "lucide-react";

import Container from "@/components/ui/container/Container";

const contactDetails = [
  {
    icon: Mail,
    label: "EMAIL US",
    title: "info@globalatlas.in",
    href: "mailto:info@globalatlas.in",
  },
  {
    icon: Phone,
    label: "CALL US",
    title: "+91 90224 64841",
    href: "tel:+919022464841",
  },
  {
    icon: MapPin,
    label: "OUR OFFICE",
    title: "Panvel, Navi Mumbai, India",
    description: "D2 Tulip, Unit 808, Wadhwa Wise City",
  },
];

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-white pt-36 pb-20 lg:min-h-screen lg:pt-40 lg:pb-24">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(47,125,92,0.08),transparent_35%)]" />

      <Container>
        <div className="relative">
          {/* Hero Content */}
          <div className="mx-auto max-w-4xl text-center">
            <div className="flex items-center justify-center gap-4">
              <span className="text-[11px] font-bold tracking-[0.28em] text-[#2f7d5c]">
                CONTACT US
              </span>

              <span className="h-px w-10 bg-[#2f7d5c]/30" />
            </div>

            <h1 className="mt-6 font-heading text-4xl font-black leading-[1.05] tracking-[-0.04em] text-[#132838] sm:text-5xl lg:text-6xl">
              Let's build better
              <span className="block text-transparent [-webkit-text-stroke:1.5px_#2f7d5c]">
  global connections.
</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-500 lg:text-lg">
              Looking for reliable suppliers, sourcing support, or export
              coordination? Our team is ready to discuss your requirements.
            </p>
          </div>

          {/* Contact Details */}
          <div className="mx-auto mt-16 grid max-w-5xl border-y border-slate-200 md:grid-cols-3">
            {contactDetails.map((item, index) => {
              const Icon = item.icon;

              const content = (
                <>
                  <div className="flex size-11 items-center justify-center rounded-full bg-[#2f7d5c]/10 text-[#2f7d5c]">
                    <Icon className="size-5" strokeWidth={1.8} />
                  </div>

                  <div className="mt-5">
                    <span className="text-[10px] font-bold tracking-[0.2em] text-slate-400">
                      {item.label}
                    </span>

                    <h3 className="mt-2 text-base font-bold text-[#132838]">
                      {item.title}
                    </h3>

                    {item.description && (
                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        {item.description}
                      </p>
                    )}
                  </div>
                </>
              );

              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  className={`group p-7 transition-colors duration-300 hover:bg-slate-50 lg:p-8 ${
                    index !== 0 ? "border-t border-slate-200 md:border-l md:border-t-0" : ""
                  }`}
                >
                  {content}
                </a>
              ) : (
                <div
                  key={item.label}
                  className={`p-7 lg:p-8 ${
                    index !== 0 ? "border-t border-slate-200 md:border-l md:border-t-0" : ""
                  }`}
                >
                  {content}
                </div>
              );
            })}
          </div>

          {/* Address */}
          <p className="mx-auto mt-8 max-w-xl text-center text-sm leading-7 text-slate-500">
            D2 Tulip, Unit 808, Wadhwa Wise City, Panvel, Navi Mumbai,
            Maharashtra 410206, India
          </p>
        </div>
      </Container>
    </section>
  );
}