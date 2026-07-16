import Image from "next/image";
import Link from "next/link";

import { Mail, Quote } from "lucide-react";

import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";

interface LeaderCardProps {
  name: string;
  role: string;
  bio: string;
  image: string;

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
  linkedin,
  twitter,
  instagram,
  email,
}: LeaderCardProps) {
  return (
    <div
      className="
        group
        relative
        overflow-hidden

        rounded-[36px]

        border
        border-slate-200

        bg-gradient-to-br
        from-white
        via-white
        to-slate-50

        p-10

        transition-all
        duration-500

        hover:-translate-y-1
        hover:border-primary/20
        hover:shadow-[0_30px_80px_rgba(15,61,122,.12)]
      "
    >
      {/* Background Glow */}

      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative">

        {/* Image */}

        <div className="flex justify-center">

          <div
            className="
              relative

              h-52
              w-52

              overflow-hidden

              rounded-full

              border-8
              border-white

              shadow-xl
            "
          >
            <Image
              src={image}
              alt={name}
              fill
              className="
                object-cover
                object-top

                transition-transform
                duration-700

                group-hover:scale-105
              "
            />
          </div>

        </div>

        {/* Role */}

        <div className="mt-8 text-center">

          <span
            className="
              inline-flex

              rounded-full

              bg-primary/10

              px-5
              py-2

              text-xs

              font-semibold

              tracking-[0.2em]

              uppercase

              text-primary
            "
          >
            {role}
          </span>

        </div>

        {/* Name */}

        <h3
          className="
            mt-6

            text-center

            font-heading

            text-4xl

            font-black

            text-slate-900
          "
        >
          {name}
        </h3>

        {/* Expertise */}

        <div
          className="
            mt-5

            flex

            flex-wrap

            justify-center

            gap-2
          "
        >
          <span className="rounded-full bg-slate-100 px-4 py-2 text-sm">
            Global Trade
          </span>

          <span className="rounded-full bg-slate-100 px-4 py-2 text-sm">
            Export
          </span>

          <span className="rounded-full bg-slate-100 px-4 py-2 text-sm">
            Technology
          </span>
        </div>

        {/* Quote */}

        <div className="mt-10">

          <Quote className="mx-auto size-8 text-primary/30" />

          <p
            className="
              mx-auto
              mt-5
              max-w-md

              text-center

              text-lg

              italic

              leading-8

              text-slate-600
            "
          >
            {bio}
          </p>

        </div>

        {/* Social */}

        <div
          className="
            mt-10

            flex

            justify-center

            gap-4
          "
        >
          {linkedin && (
            <Link
              href={linkedin}
              target="_blank"
              className="
                flex

                h-12
                w-12

                items-center
                justify-center

                rounded-2xl

                bg-slate-100

                transition-all

                duration-300

                hover:bg-[#0A66C2]
                hover:text-white
              "
            >
              <FaLinkedinIn />
            </Link>
          )}

          {twitter && (
            <Link
              href={twitter}
              target="_blank"
              className="
                flex

                h-12
                w-12

                items-center
                justify-center

                rounded-2xl

                bg-slate-100

                transition-all

                duration-300

                hover:bg-black
                hover:text-white
              "
            >
              <RiTwitterXFill />
            </Link>
          )}

          {instagram && (
            <Link
              href={instagram}
              target="_blank"
              className="
                flex

                h-12
                w-12

                items-center
                justify-center

                rounded-2xl

                bg-slate-100

                transition-all

                duration-300

                hover:bg-pink-500
                hover:text-white
              "
            >
              <FaInstagram />
            </Link>
          )}

          {email && (
            <Link
              href={`mailto:${email}`}
              className="
                flex

                h-12
                w-12

                items-center
                justify-center

                rounded-2xl

                bg-slate-100

                transition-all

                duration-300

                hover:bg-primary
                hover:text-white
              "
            >
              <Mail className="size-5" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}