import {
  Search,
  ClipboardCheck,
  Factory,
  ShieldCheck,
  Ship,
  PackageCheck,
} from "lucide-react";

export const sourcingProcess = [
  {
    step: "01",
    title: "Requirement Analysis",
    description:
      "Understand your product specifications, quantity, target market, and quality expectations.",
    icon: Search,
  },
  {
    step: "02",
    title: "Supplier Identification",
    description:
      "Match your requirements with verified manufacturers from our trusted supplier network.",
    icon: Factory,
  },
  {
    step: "03",
    title: "Quotation & Sampling",
    description:
      "Arrange quotations, product samples, pricing discussions, and commercial negotiations.",
    icon: ClipboardCheck,
  },
  {
    step: "04",
    title: "Quality Inspection",
    description:
      "Perform inspections and quality verification before production and shipment.",
    icon: ShieldCheck,
  },
  {
    step: "05",
    title: "Export & Logistics",
    description:
      "Handle export documentation, customs clearance, freight, and logistics coordination.",
    icon: Ship,
  },
  {
    step: "06",
    title: "Delivery & Support",
    description:
      "Ensure safe delivery and provide post-shipment assistance whenever required.",
    icon: PackageCheck,
  },
];