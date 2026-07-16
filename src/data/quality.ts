import {
  ShieldCheck,
  SearchCheck,
  Factory,
  PackageCheck,
  Microscope,
  FileCheck2,
} from "lucide-react";

export const qualitySteps = [
  {
    title: "Supplier Verification",
    description:
      "We partner only with carefully verified manufacturers that meet our sourcing standards.",
    icon: Factory,
  },
  {
    title: "Product Inspection",
    description:
      "Every order undergoes quality inspections before shipment.",
    icon: SearchCheck,
  },
  {
    title: "Quality Testing",
    description:
      "Products are checked for compliance with buyer specifications and applicable standards.",
    icon: Microscope,
  },
  {
    title: "Export Packaging",
    description:
      "Goods are packed using export-grade materials to ensure safe transportation.",
    icon: PackageCheck,
  },
  {
    title: "Documentation",
    description:
      "Complete export documentation is prepared for customs and international trade.",
    icon: FileCheck2,
  },
  {
    title: "Final Approval",
    description:
      "Final quality verification before dispatch to ensure buyer satisfaction.",
    icon: ShieldCheck,
  },
];