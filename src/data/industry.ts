import {
  Wheat,
  Factory,
  Building2,
  ShoppingBag,
  HeartPulse,
  Car,
  Hotel,
  UtensilsCrossed,
} from "lucide-react";

export const industry = [
  {
    slug: "agriculture",
    title: "Agriculture",
    description:
      "Premium agricultural export solutions from India.",
    image: "/images/industries/agriculture.jpg",
    icon: Wheat,
    products: [
      {
        name: "Basmati Rice",
        image: "/images/products/basmati-rice.jpg",
        description: "Premium export-quality rice.",
      },
      {
        name: "Wheat",
        image: "/images/products/wheat.jpg",
        description: "High-quality wheat.",
      },
      {
        name: "Spices",
        image: "/images/products/spices.jpg",
        description: "Authentic Indian spices.",
      },
    ],
    capabilities: [
      {
        title: "Verified Manufacturers",
        description:
          "Work with trusted agricultural producers.",
      },
      {
        title: "Export Documentation",
        description:
          "Complete export paperwork and compliance.",
      },
    ],
    faq: [],
  },

  {
    slug: "manufacturing",
    title: "Manufacturing",
    description:
      "Industrial manufacturing and engineering exports.",
    image: "/images/industries/manufacturing.jpg",
    icon: Factory,
    products: [],
    capabilities: [],
    faq: [],
  },

  {
    slug: "construction",
    title: "Construction",
    description:
      "Construction materials and building products.",
    image: "/images/industries/construction.jpg",
    icon: Building2,
    products: [],
    capabilities: [],
    faq: [],
  },

  {
    slug: "retail",
    title: "Retail",
    description:
      "Consumer and retail product sourcing.",
    image: "/images/industries/retail.jpg",
    icon: ShoppingBag,
    products: [],
    capabilities: [],
    faq: [],
  },

  {
    slug: "healthcare",
    title: "Healthcare",
    description:
      "Healthcare and medical product exports.",
    image: "/images/industries/healthcare.jpg",
    icon: HeartPulse,
    products: [],
    capabilities: [],
    faq: [],
  },

  {
    slug: "automotive",
    title: "Automotive",
    description:
      "Automotive components and engineering products.",
    image: "/images/industries/automotive.jpg",
    icon: Car,
    products: [],
    capabilities: [],
    faq: [],
  },

  {
    slug: "hospitality",
    title: "Hospitality",
    description:
      "Hotel, restaurant and hospitality supplies.",
    image: "/images/industries/hospitality.jpg",
    icon: Hotel,
    products: [],
    capabilities: [],
    faq: [],
  },

  {
    slug: "food-processing",
    title: "Food Processing",
    description:
      "Processed foods and beverage exports.",
    image: "/images/industries/food-processing.jpg",
    icon: UtensilsCrossed,
    products: [],
    capabilities: [],
    faq: [],
  },
];