import Link from "next/link";
import { ExternalLink, MapPin } from "lucide-react";

import Container from "@/components/ui/container/Container";
import SectionHeader from "@/components/sections/SectionHeader";
import { Button } from "@/components/ui/buttons/button";

export default function ContactMap() {
  return (
    <section className="bg-slate-50 py-28">

      <Container>

        <SectionHeader
          badge="Our Location"
          title="Find Us"
          description="Visit our business address or connect with our team to discuss global sourcing, exports, manufacturing partnerships, and international trade."
        />

        <div
          className="
            mt-16
            overflow-hidden
            rounded-[36px]
            border
            border-border
            bg-white
            shadow-xl
          "
        >

          <iframe
            title="GlobalAtlas Exim Business Address"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d894.3340957269118!2d73.19815345362815!3d18.96512096582607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e500356aa8e9%3A0x4d76833683dc6f49!2sTulip%20D2!5e0!3m2!1sen!2sin!4v1783467082864!5m2!1sen!2sin"
            className="h-[520px] w-full"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />

        </div>

        <div className="mt-10 flex flex-col items-center text-center">

          <div className="flex items-center gap-3 text-primary">

            <MapPin className="size-5" />

            <span className="text-lg font-semibold">
              GlobalAtlas Exim Business Address
            </span>

          </div>

          <p className="mt-4 max-w-xl leading-8 text-muted-foreground">
            D2 Tulip, Unit 808,
            <br />
            Wadhwa Wise City,
            <br />
            Panvel, Navi Mumbai,
            <br />
            Maharashtra 410206, India
          </p>

          <Link
            href="https://maps.google.com/?q=Tulip+D2+Wadhwa+Wise+City+Panvel"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8"
          >

            <Button
              size="lg"
              className="rounded-2xl px-8"
            >
              Get Directions

              <ExternalLink className="ml-2 size-5" />

            </Button>

          </Link>

        </div>

      </Container>

    </section>
  );
}