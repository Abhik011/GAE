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
      "Yes. Product samples can be arranged before placing bulk orders, subject to product availability and supplier terms.",
  },
  {
    question: "Do you offer OEM or private label?",
    answer:
      "Yes. Selected manufacturers and suppliers provide OEM and private-label options depending on the product.",
  },
  {
    question: "Can you export worldwide?",
    answer:
      "Yes. We support international buyers with supplier coordination, export documentation, and logistics assistance.",
  },
];

export const productDetails: Record<string, ProductDetails> = {
  // ============================================================
  // AGRICULTURE
  // ============================================================

  "basmati-rice": {
    overview:
      "Premium Indian Basmati Rice sourced from trusted suppliers. Known for its long grains, distinctive aroma, and excellent cooking quality for international food and retail markets.",

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
      "High-quality Indian turmeric available as powder and whole fingers, suitable for food processing, spice manufacturing, pharmaceutical, and Ayurvedic applications.",

    images: [
      "/images/products/turmeric.jpg",
    ],

    specifications: [
      ...defaultSpecifications,
      {
        label: "Form",
        value: "Powder / Whole Fingers",
      },
      {
        label: "Curcumin Content",
        value: "As per Grade Requirement",
      },
    ],

    applications: [
      "Food Industry",
      "Spice Manufacturing",
      "Pharmaceutical",
      "Ayurvedic Products",
    ],

    packaging: [
      "25 Kg Bags",
      "50 Kg Bags",
      "Custom Packaging",
    ],

    certifications: [
      "FSSAI",
      "ISO",
      "HACCP",
      "Organic Options Available",
    ],

    faq: defaultFAQ,
  },

  cumin: {
    overview:
      "Premium export-quality Indian cumin seeds with strong aroma and high purity, sourced from trusted growers and suppliers for international food markets.",

    images: [
      "/images/products/cumin-seeds.jpg",
    ],

    specifications: [
      ...defaultSpecifications,
      {
        label: "Purity",
        value: "As per Buyer Requirement",
      },
      {
        label: "Form",
        value: "Whole Seeds",
      },
    ],

    applications: [
      "Food Processing",
      "Seasoning",
      "Spice Blends",
      "Retail",
    ],

    packaging: [
      "25 Kg Bags",
      "50 Kg Bags",
      "Custom Packaging",
    ],

    certifications: [
      "FSSAI",
      "ISO",
      "HACCP",
    ],

    faq: defaultFAQ,
  },

  "red-chilli": {
    overview:
      "Premium Indian dried red chilli sourced from trusted growers and suppliers. Available in different varieties, grades, heat levels, and packaging options for international buyers.",

    images: [
      "/images/products/red-chilli.jpg",
      "/images/products/red-chilli-2.jpg",
      "/images/products/red-chilli-3.jpg",
    ],

    specifications: [
      ...defaultSpecifications,
      {
        label: "Product Type",
        value: "Whole Dried Red Chilli",
      },
      {
        label: "Colour",
        value: "Natural Red",
      },
      {
        label: "Heat Level",
        value: "Variety Dependent",
      },
      {
        label: "Stem",
        value: "With or Without Stem",
      },
    ],

    applications: [
      "Food Processing",
      "Spice Manufacturing",
      "Restaurants",
      "Seasoning",
      "Retail",
    ],

    packaging: [
      "10 Kg Bags",
      "20 Kg Bags",
      "25 Kg Bags",
      "Custom Packaging",
    ],

    certifications: [
      "FSSAI",
      "ISO",
      "HACCP",
      "Spice Board Registered Supplier Options",
    ],

    faq: defaultFAQ,
  },

  // ============================================================
  // FOOD PRODUCTS
  // ============================================================

  "coffee-beans": {
    overview:
      "Export-quality Indian coffee beans sourced from selected suppliers. Available in Arabica and Robusta varieties with options based on bean grade, processing method, roast requirements, and buyer specifications.",

    images: [
      "/images/products/coffee-beans.jpg",
      "/images/products/coffee-beans-2.jpg",
    ],

    specifications: [
      ...defaultSpecifications,
      {
        label: "Variety",
        value: "Arabica / Robusta",
      },
      {
        label: "Processing",
        value: "Natural / Washed / As Required",
      },
      {
        label: "Form",
        value: "Green Coffee Beans",
      },
      {
        label: "Grade",
        value: "As per Buyer Requirement",
      },
    ],

    applications: [
      "Coffee Roasters",
      "Cafes",
      "Food Service",
      "Retail",
      "Private Label",
    ],

    packaging: [
      "Jute Bags",
      "GrainPro Liner Options",
      "Custom Bulk Packaging",
    ],

    certifications: [
      "ISO",
      "HACCP",
      "Food Safety Certifications as Applicable",
    ],

    faq: defaultFAQ,
  },

  "natural-honey": {
    overview:
      "Pure export-quality natural honey sourced from trusted Indian producers. Available in selected floral varieties with quality, moisture level, packaging, and bulk supply options based on buyer requirements.",

    images: [
      "/images/products/natural-honey.jpg",
      "/images/products/natural-honey-2.jpg",
    ],

    specifications: [
      ...defaultSpecifications,
      {
        label: "Product Type",
        value: "Natural Honey",
      },
      {
        label: "Source",
        value: "Selected Indian Producers",
      },
      {
        label: "Moisture",
        value: "As per Export Standard / Buyer Requirement",
      },
      {
        label: "Variety",
        value: "Multi-Floral / Monofloral Options",
      },
    ],

    applications: [
      "Retail",
      "Food Processing",
      "Beverages",
      "Bakery",
      "Private Label",
    ],

    packaging: [
      "Glass Jars",
      "PET Jars",
      "Food Grade Drums",
      "Bulk Containers",
      "Private Label Packaging",
    ],

    certifications: [
      "FSSAI",
      "ISO",
      "HACCP",
      "Laboratory Testing as Required",
    ],

    faq: defaultFAQ,
  },

  // ============================================================
  // TEXTILES & APPAREL
  // ============================================================

  "cotton-yarn": {
    overview:
      "High-quality Indian cotton yarn suitable for textile manufacturing and export markets. Available in selected counts and specifications based on weaving, knitting, and garment production requirements.",

    images: [
      "/images/products/cotton-yarn.jpg",
    ],

    specifications: [
      ...defaultSpecifications,
      {
        label: "Material",
        value: "100% Cotton",
      },
      {
        label: "Count",
        value: "As per Buyer Requirement",
      },
      {
        label: "Application",
        value: "Weaving / Knitting",
      },
    ],

    applications: [
      "Textiles",
      "Garments",
      "Knitting",
      "Weaving",
      "Home Textiles",
    ],

    packaging: [
      "Bales",
      "Cartons",
      "Custom Export Packaging",
    ],

    certifications: [
      "OEKO-TEX Options",
      "ISO",
      "Supplier Certifications as Applicable",
    ],

    faq: defaultFAQ,
  },

  // ============================================================
  // BUILDING MATERIALS
  // ============================================================

  "ceramic-tiles": {
    overview:
      "Premium ceramic and vitrified tiles manufactured for residential, commercial, and hospitality projects. Available in multiple sizes, finishes, designs, and export packaging options.",

    images: [
      "/images/products/ceramic-tiles.jpg",
    ],

    specifications: [
      ...defaultSpecifications,
      {
        label: "Material",
        value: "Ceramic / Vitrified",
      },
      {
        label: "Finish",
        value: "Multiple Options Available",
      },
      {
        label: "Size",
        value: "As per Product Range",
      },
    ],

    applications: [
      "Residential",
      "Commercial",
      "Hospitality",
      "Interior Projects",
      "Construction",
    ],

    packaging: [
      "Export Cartons",
      "Pallets",
      "Container Load Packaging",
    ],

    certifications: [
      "ISO 9001",
      "CE Options",
      "Supplier Quality Certifications",
    ],

    faq: defaultFAQ,
  },
};