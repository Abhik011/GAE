export interface IndustryProduct {
  name: string;
  image: string;
  description: string;
}

export interface IndustryCapability {
  title: string;
  description: string;
}

export interface IndustryProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface IndustryFAQ {
  question: string;
  answer: string;
}

export interface IndustryDetails {
  overview: string;
  products: IndustryProduct[];
  capabilities: IndustryCapability[];
  process: IndustryProcessStep[];
  faq: IndustryFAQ[];
}

const defaultCapabilities: IndustryCapability[] = [
  {
    title: "Verified Manufacturers",
    description:
      "Access carefully verified Indian manufacturers with proven production capabilities.",
  },
  {
    title: "OEM & Private Label",
    description:
      "Custom manufacturing and branding according to your business requirements.",
  },
  {
    title: "Quality Inspection",
    description:
      "Independent quality inspections before shipment.",
  },
  {
    title: "Export Documentation",
    description:
      "Complete documentation support including customs and compliance.",
  },
  {
    title: "Global Logistics",
    description:
      "Sea, air and multimodal freight coordination worldwide.",
  },
  {
    title: "Dedicated Support",
    description:
      "A dedicated sourcing specialist throughout your project.",
  },
];

const defaultProcess: IndustryProcessStep[] = [
  {
    step: "01",
    title: "Requirement Analysis",
    description:
      "Understand your product specifications, certifications, quantity and destination market.",
  },
  {
    step: "02",
    title: "Supplier Matching",
    description:
      "Identify verified manufacturers that match your sourcing requirements.",
  },
  {
    step: "03",
    title: "Quotation & Sampling",
    description:
      "Arrange quotations, samples and commercial discussions.",
  },
  {
    step: "04",
    title: "Production",
    description:
      "Monitor production while ensuring quality and delivery timelines.",
  },
  {
    step: "05",
    title: "Inspection & Shipping",
    description:
      "Quality inspection, export documentation and logistics coordination.",
  },
  {
    step: "06",
    title: "Delivery",
    description:
      "Safe international delivery with post-shipment support.",
  },
];

const defaultFaq: IndustryFAQ[] = [
  {
    question: "Do you work with verified manufacturers?",
    answer:
      "Yes. We collaborate with verified manufacturers that meet our sourcing and export quality standards.",
  },
  {
    question: "Can you arrange quality inspections?",
    answer:
      "Yes. Independent inspections can be arranged before shipment.",
  },
  {
    question: "Do you support OEM and private label manufacturing?",
    answer:
      "Yes. Many of our manufacturing partners offer OEM and private label services.",
  },
  {
    question: "Can you handle export documentation?",
    answer:
      "Yes. We assist with export documentation, customs coordination and logistics.",
  },
];

export const industryDetails: Record<string, IndustryDetails> = {
  agriculture: {
    overview:
      "India is one of the world's largest producers of agricultural commodities. GlobalAtlas Exim connects international buyers with trusted suppliers of grains, spices, pulses, seeds and fresh produce.",

    products: [
      {
        name: "Basmati Rice",
        image: "/images/products/basmati-rice.jpg",
        description: "Premium export-quality basmati rice.",
      },
      {
        name: "Wheat",
        image: "/images/products/wheat.jpg",
        description: "High-quality milling and feed wheat.",
      },
      {
        name: "Spices",
        image: "/images/products/spices.jpg",
        description: "Authentic Indian spices for global markets.",
      },
    ],

    capabilities: defaultCapabilities,
    process: defaultProcess,
    faq: defaultFaq,
  },

  "food-processing": {
    overview:
      "India offers a diverse food processing industry with world-class manufacturing facilities and export-ready food products.",

    products: [
      {
        name: "Ready-to-Eat Foods",
        image: "/images/products/ready-food.jpg",
        description: "Shelf-stable packaged food products.",
      },
      {
        name: "Snacks",
        image: "/images/products/snacks.jpg",
        description: "Traditional and modern snack products.",
      },
      {
        name: "Beverages",
        image: "/images/products/beverages.jpg",
        description: "Tea, coffee and beverage solutions.",
      },
    ],

    capabilities: defaultCapabilities,
    process: defaultProcess,
    faq: defaultFaq,
  },

  manufacturing: {
    overview:
      "GlobalAtlas Exim connects buyers with Indian manufacturers producing engineering goods, machinery and industrial components.",

    products: [
      {
        name: "Industrial Machinery",
        image: "/images/products/machinery.jpg",
        description: "Industrial equipment and machinery.",
      },
      {
        name: "Fasteners",
        image: "/images/products/fasteners.jpg",
        description: "Industrial fasteners and hardware.",
      },
      {
        name: "Cast Components",
        image: "/images/products/casting.jpg",
        description: "Precision casting solutions.",
      },
    ],

    capabilities: defaultCapabilities,
    process: defaultProcess,
    faq: defaultFaq,
  },

  construction: {
    overview:
      "Construction materials sourced from trusted Indian manufacturers for infrastructure and commercial projects.",

    products: [
      {
        name: "Granite",
        image: "/images/products/granite.jpg",
        description: "Premium granite slabs and tiles.",
      },
      {
        name: "Ceramic Tiles",
        image: "/images/products/tiles.jpg",
        description: "Export-quality ceramic and vitrified tiles.",
      },
      {
        name: "Building Materials",
        image: "/images/products/building-materials.jpg",
        description: "Construction and infrastructure products.",
      },
    ],

    capabilities: defaultCapabilities,
    process: defaultProcess,
    faq: defaultFaq,
  },

  retail: {
    overview:
      "Retail sourcing solutions including consumer products, packaging and home essentials.",

    products: [
      {
        name: "Home Products",
        image: "/images/products/home-products.jpg",
        description: "Household and lifestyle products.",
      },
      {
        name: "Packaging",
        image: "/images/products/packaging.jpg",
        description: "Retail and industrial packaging.",
      },
      {
        name: "Consumer Goods",
        image: "/images/products/fmcg.jpg",
        description: "Everyday consumer products.",
      },
    ],

    capabilities: defaultCapabilities,
    process: defaultProcess,
    faq: defaultFaq,
  },

  healthcare: {
    overview:
      "Healthcare sourcing solutions including medical devices, wellness products and healthcare supplies.",

    products: [
      {
        name: "Medical Devices",
        image: "/images/products/medical.jpg",
        description: "Certified medical equipment.",
      },
      {
        name: "Wellness Products",
        image: "/images/products/wellness.jpg",
        description: "Health and wellness solutions.",
      },
      {
        name: "Healthcare Supplies",
        image: "/images/products/healthcare.jpg",
        description: "Hospital and clinical supplies.",
      },
    ],

    capabilities: defaultCapabilities,
    process: defaultProcess,
    faq: defaultFaq,
  },

  automotive: {
    overview:
      "India is a leading automotive manufacturing hub supplying OEMs and aftermarket buyers worldwide.",

    products: [
      {
        name: "Auto Components",
        image: "/images/products/auto-parts.jpg",
        description: "Precision automotive components.",
      },
      {
        name: "Bearings",
        image: "/images/products/bearings.jpg",
        description: "Industrial and automotive bearings.",
      },
      {
        name: "Engine Parts",
        image: "/images/products/engine-parts.jpg",
        description: "OEM engine components.",
      },
    ],

    capabilities: defaultCapabilities,
    process: defaultProcess,
    faq: defaultFaq,
  },

  hospitality: {
    overview:
      "Hospitality products including furniture, décor, hotel supplies and commercial kitchen solutions.",

    products: [
      {
        name: "Hotel Furniture",
        image: "/images/products/hotel-furniture.jpg",
        description: "Premium hospitality furniture.",
      },
      {
        name: "Kitchen Equipment",
        image: "/images/products/kitchen-equipment.jpg",
        description: "Commercial kitchen solutions.",
      },
      {
        name: "Decor Products",
        image: "/images/products/decor.jpg",
        description: "Interior décor and accessories.",
      },
    ],

    capabilities: defaultCapabilities,
    process: defaultProcess,
    faq: defaultFaq,
  },
};