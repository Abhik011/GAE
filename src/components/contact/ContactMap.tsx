import Link from "next/link";
import { ExternalLink, MapPin } from "lucide-react";

import Container from "@/components/ui/container/Container";
import SectionHeader from "@/components/sections/SectionHeader";
import { Button } from "@/components/ui/buttons/button";

export default function ContactMap() {
  return (
    <section className="border-t border-slate-200 bg-white py-20 lg:py-28">
      <Container>
        <SectionHeader
          badge="OUR LOCATION"
          title="Find us in India."
          description="Visit our office or connect with our team to discuss your sourcing and export requirements."
        />

        {/* Map */}
        <div className="mt-14 overflow-hidden border border-slate-200">
          <iframe
            title="GlobalAtlas Exim Business Address"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d894.3340957269118!2d73.19815345362815!3d18.96512096582607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e500356aa8e9%3A0x4d76833683dc6f49!2sTulip%20D2!5e0!3m2!1sen!2sin!4v1783467082864!5m2!1sen!2sin"
            className="h-[400px] w-full border-0 sm:h-[500px]"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Location Information */}
        <div className="mx-auto mt-10 flex max-w-2xl flex-col items-center text-center">
          <div className="flex size-11 items-center justify-center rounded-full bg-[#2f7d5c]/10 text-[#2f7d5c]">
            <MapPin className="size-5" />
          </div>

          <span className="mt-5 text-[10px] font-bold tracking-[0.22em] text-slate-400">
            BUSINESS ADDRESS
          </span>

          <h3 className="mt-2 font-heading text-xl font-bold text-[#132838]">
            GlobalAtlas Exim
          </h3>

          <address className="mt-3 not-italic text-sm leading-7 text-slate-500">
            D2 Tulip, Unit 808, Wadhwa Wise City
            <br />
            Panvel, Navi Mumbai, Maharashtra 410206
            <br />
            India
          </address>

          <Link
            href="https://maps.google.com/?q=Tulip+D2+Wadhwa+Wise+City+Panvel"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7"
          >
            <Button
              size="lg"
              className="h-11 rounded-xl bg-[#2f7d5c] px-5 text-white hover:bg-[#256b4e]"
            >
              Get Directions
              <ExternalLink className="ml-2 size-4" />
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}