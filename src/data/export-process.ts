import {
  FileText,
  Search,
  ShieldCheck,
  ClipboardCheck,
  Ship,
  MapPinned,
  PackageCheck,
} from "lucide-react";

export const exportProcess = [
  {
    step: "01",
    title: "Request Quote",
    description:
      "Share your product requirements and destination country.",
    icon: FileText,
  },
  {
    step: "02",
    title: "Supplier Matching",
    description:
      "We identify verified Indian manufacturers for your needs.",
    icon: Search,
  },
  {
    step: "03",
    title: "Quality Inspection",
    description:
      "Independent quality checks before shipment.",
    icon: ShieldCheck,
  },
  {
    step: "04",
    title: "Documentation",
    description:
      "Export documents and customs compliance.",
    icon: ClipboardCheck,
  },
  {
    step: "05",
    title: "International Shipping",
    description:
      "Sea, air or multimodal logistics.",
    icon: Ship,
  },
  {
    step: "06",
    title: "Live Tracking",
    description:
      "Track your shipment throughout the journey.",
    icon: MapPinned,
  },
  {
    step: "07",
    title: "Safe Delivery",
    description:
      "Products delivered on time with complete support.",
    icon: PackageCheck,
  },
];