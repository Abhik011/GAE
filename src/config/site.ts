import { company } from "./company";
console.log(company.website);

export const site = {
  name: company.shortName,

  url: company.website,

  title: "GlobalAtlas Exim | Global Export & Sourcing Company",

  description: company.description,
  
  keywords: [
    "Export Company India",
    "Global Sourcing",
    "Indian Manufacturers",
    "Export Solutions",
    "Import Export",
    "OEM Manufacturing",
    "Private Label",
    "International Trade",
  ],

  author: "GlobalAtlas Exim",

  creator: "GlobalAtlas Exim",

  ogImage: "/images/og-image.jpg",
} as const;