import Image from "next/image";
import Link from "next/link";

import { ArrowUpRight, Mail } from "lucide-react";

import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";

interface LeaderCardProps {
  name: string;
  role: string;
  bio: string;
  image: string;

  profileUrl: string;

  linkedin?: string;
  twitter?: string;
  instagram?: string;
  email?: string;
}

export default function LeaderCard({
  name,
  role,
  bio,
  image,
  profileUrl,
  linkedin,
  twitter,
  instagram,
  email,
}: LeaderCardProps) {
  return (
    <article
      className="
        group
        border-t
        border-slate-200
        py-6
        transition-colors
        duration-300
        hover:border-[#2f7d5c]
      "
    >
      <div className="grid gap-6 md:grid-cols-[180px_1fr] md:items-start lg:grid-cols-[200px_1fr]">
        {/* Portrait */}
        <div className="relative aspect-[4/5] overflow-hidden bg-[#edf4f0]">
          <Image
            src={image}
            alt={name}
            fill
            className="
              object-cover
              object-top
              transition-transform
              duration-700
              group-hover:scale-[1.04]
            "
          />

          <span
            className="
              absolute
              left-4
              top-4
              bg-white/90
              px-3
              py-1.5
              text-[10px]
              font-bold
              tracking-[0.2em]
              text-[#132838]
              backdrop-blur-md
            "
          >
            LEADERSHIP
          </span>
        </div>

        {/* Information */}
        <div className="flex min-h-full flex-col">
          {/* Top */}
          <div className="flex items-start justify-between gap-5">
            <div>
              <p
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.22em]
                  text-[#2f7d5c]
                "
              >
                {role}
              </p>

              <h3
                className="
                  mt-3
                  font-heading
                  text-3xl
                  font-black
                  leading-[1.05]
                  tracking-[-0.04em]
                  text-[#132838]
                  sm:text-4xl
                "
              >
                {name}
              </h3>
            </div>

            <span className="text-xs font-bold tracking-[0.18em] text-slate-300">
              01
            </span>
          </div>

          {/* Bio */}
          <p
            className="
              mt-6
              max-w-xl
              text-sm
              leading-7
              text-slate-500
              sm:text-base
            "
          >
            {bio}
          </p>

          {/* Areas */}
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
              Global Trade
            </span>

            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
              Export
            </span>

            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
              Business Development
            </span>
          </div>

          {/* Bottom */}
          <div
            className="
              mt-8
              flex
              flex-wrap
              items-center
              justify-between
              gap-5
              border-t
              border-slate-100
              pt-5
            "
          >
            {/* Social */}
            <div className="flex items-center gap-3">
              {linkedin && (
                <Link
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${name} on LinkedIn`}
                  className="text-slate-400 transition-colors hover:text-[#2f7d5c]"
                >
                  <FaLinkedinIn className="size-[18px]" />
                </Link>
              )}

              {twitter && (
                <Link
                  href={twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${name} on X`}
                  className="text-slate-400 transition-colors hover:text-[#132838]"
                >
                  <RiTwitterXFill className="size-[18px]" />
                </Link>
              )}

              {instagram && (
                <Link
                  href={instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${name} on Instagram`}
                  className="text-slate-400 transition-colors hover:text-[#2f7d5c]"
                >
                  <FaInstagram className="size-[18px]" />
                </Link>
              )}

              {email && (
                <Link
                  href={`mailto:${email}`}
                  aria-label={`Email ${name}`}
                  className="text-slate-400 transition-colors hover:text-[#2f7d5c]"
                >
                  <Mail className="size-[18px]" />
                </Link>
              )}
            </div>

            {/* Dynamic Profile */}
            <Link
              href={profileUrl}
              className="
                group/profile
                inline-flex
                items-center
                gap-2
                text-[10px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-[#132838]
                transition-colors
                hover:text-[#2f7d5c]
              "
            >
              Full Profile

              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover/profile:translate-x-1 group-hover/profile:-translate-y-1" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}