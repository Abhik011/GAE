// src/data/product-details.ts

export interface ProductSpecification {
  label: string;
  value: string;
}

export interface ProductFAQ {
  question: string;
  answer: string;
}

export interface ProductDetails {
  overview: string;
  images: string[];
  specifications: ProductSpecification[];
  applications: string[];
  packaging: string[];
  certifications: string[];
  faq: ProductFAQ[];
}

const defaultSpecifications: ProductSpecification[] = [
  {
    label: "Origin",
    value: "India",
  },
  {
    label: "Quality",
    value: "Export Grade",
  },
  {
    label: "Supply Capacity",
    value: "Custom Orders Available",
  },
  {
    label: "MOQ",
    value: "Depends on Product",
  },
];

const defaultFAQ: ProductFAQ[] = [
  {
    question: "Can I request samples?",
    answer:
      "Yes. Product samples can be arranged before placing bulk orders.",
  },
  {
    question: "Do you offer OEM or private label?",
    answer:
      "Yes. Selected manufacturers provide OEM and private-label manufacturing.",
  },
  {
    question: "Can you export worldwide?",
    answer:
      "Yes. We support international buyers with export documentation and logistics.",
  },
];

export const productDetails: Record<string, ProductDetails> = {
  "basmati-rice": {
    overview:
      "Premium Indian Basmati Rice sourced from trusted farmers and exporters. Known for its long grains, rich aroma, and excellent cooking quality.",

    images: [
      "/images/products/basmati-rice.jpg",
      "/images/products/basmati-rice-2.jpg",
      "/images/products/basmati-rice-3.jpg",
    ],

    specifications: [
      ...defaultSpecifications,
      {
        label: "Grain Length",
        value: "8.3 mm+",
      },
      {
        label: "Broken",
        value: "2% Max",
      },
    ],

    applications: [
      "Retail",
      "Wholesale",
      "Hotels",
      "Restaurants",
      "Food Processing",
    ],

    packaging: [
      "1 Kg",
      "5 Kg",
      "10 Kg",
      "25 Kg",
      "50 Kg PP Bags",
    ],

    certifications: [
      "FSSAI",
      "ISO 22000",
      "HACCP",
    ],

    faq: defaultFAQ,
  },

  turmeric: {
    overview:
      "High-curcumin Indian turmeric powder and whole fingers suitable for food processing, pharmaceutical, and spice industries.",

    images: [
      "/images/products/turmeric.jpg",
    ],

    specifications: defaultSpecifications,

    applications: [
      "Food Industry",
      "Pharmaceutical",
      "Ayurvedic",
      "Spices",
    ],

    packaging: [
      "25 Kg",
      "50 Kg",
    ],

    certifications: [
      "FSSAI",
      "Organic",
      "ISO",
    ],

    faq: defaultFAQ,
  },

  cumin: {
    overview:
      "Premium export-quality cumin seeds with high purity and strong aroma sourced from trusted Indian growers.",

    images: [
      "/images/products/cumin.jpg",
    ],

    specifications: defaultSpecifications,

    applications: [
      "Food Processing",
      "Seasoning",
      "Retail",
    ],

    packaging: [
      "25 Kg",
      "50 Kg",
    ],

    certifications: [
      "FSSAI",
      "ISO",
    ],

    faq: defaultFAQ,
  },

  "cotton-yarn": {
    overview:
      "High-quality cotton yarn suitable for textile manufacturing and export markets worldwide.",

    images: [
      "/images/products/cotton-yarn.jpg",
    ],

    specifications: defaultSpecifications,

    applications: [
      "Textiles",
      "Garments",
      "Knitting",
      "Weaving",
    ],

    packaging: [
      "Bales",
      "Cartons",
    ],

    certifications: [
      "OEKO-TEX",
      "ISO",
    ],

    faq: defaultFAQ,
  },

  "ceramic-tiles": {
    overview:
      "Premium ceramic and vitrified tiles manufactured using advanced technology for residential and commercial projects.",

    images: [
      "/images/products/ceramic-tiles.jpg",
    ],

    specifications: defaultSpecifications,

    applications: [
      "Residential",
      "Commercial",
      "Hospitality",
    ],

    packaging: [
      "Cartons",
      "Pallets",
    ],

    certifications: [
      "ISO 9001",
      "CE",
    ],

    faq: defaultFAQ,
  },
};