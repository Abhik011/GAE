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

export interface Industry {
  slug: string;
  title: string;
  description: string;
  image: string;
  icon: typeof Wheat;
}

export const industries: Industry[] = [
  {
    slug: "agriculture",
    title: "Agriculture",
    description:
      "Food grains, seeds, spices, and agricultural products.",
    image: "/images/industries/agriculture.jpg",
    icon: Wheat,
  },

  {
    slug: "manufacturing",
    title: "Manufacturing",
    description:
      "Industrial machinery, engineering goods, and components.",
    image: "/images/industries/manufacturing.jpg",
    icon: Factory,
  },

  {
    slug: "construction",
    title: "Construction",
    description:
      "Building materials, granite, tiles, and hardware.",
    image: "/images/industries/construction.jpg",
    icon: Building2,
  },

  {
    slug: "retail",
    title: "Retail",
    description:
      "Consumer goods, FMCG, home products, and packaging.",
    image: "/images/industries/retail.jpg",
    icon: ShoppingBag,
  },

  {
    slug: "healthcare",
    title: "Healthcare",
    description:
      "Medical devices, pharmaceutical supplies, and wellness products.",
    image: "/images/industries/healthcare.jpg",
    icon: HeartPulse,
  },

  {
    slug: "automotive",
    title: "Automotive",
    description:
      "Auto parts, components, and engineering solutions.",
    image: "/images/industries/automotive.jpg",
    icon: Car,
  },

  {
    slug: "hospitality",
    title: "Hospitality",
    description:
      "Furniture, décor, kitchenware, and hotel supplies.",
    image: "/images/industries/hospitality.jpg",
    icon: Hotel,
  },

  {
    slug: "food-processing",
    title: "Food Processing",
    description:
      "Ingredients, packaged foods, beverages, and exports.",
    image: "/images/industries/food-processing.jpg",
    icon: UtensilsCrossed,
  },
];