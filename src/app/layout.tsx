import type { Metadata } from "next";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";


import { inter, manrope } from "../lib/fonts";

import { company } from "../config/company";
import { site } from "../config/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),

  title: {
    default: site.title,
    template: `%s | ${company.shortName}`,
  },

  description: site.description,

  keywords: [...site.keywords],

  authors: [
    {
      name: company.shortName,
      url: company.website,
    },
  ],

  creator: company.shortName,

  publisher: company.shortName,

  applicationName: company.shortName,

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",

    locale: "en_US",

    url: site.url,

    siteName: company.shortName,

    title: site.title,

    description: site.description,

    images: [
      {
        url: site.ogImage,

        width: 1200,

        height: 630,

        alt: company.shortName,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: site.title,

    description: site.description,

    images: [site.ogImage],
  },

  icons: {
    icon: "/favicon.ico",

    shortcut: "/favicon.ico",

    apple: "/favicon.ico",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: Readonly<RootLayoutProps>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body
        className={`
          ${manrope.variable}
          ${inter.variable}
          min-h-screen
          bg-white
          font-sans
          antialiased
        `}
      >
<LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}