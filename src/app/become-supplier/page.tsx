import RequiredDocuments from "@/components/become-supplier/RequiredDocuments";
import SupplierCTA from "@/components/become-supplier/SupplierCTA";
import SupplierFAQ from "@/components/become-supplier/SupplierFAQ";
import SupplierForm from "@/components/become-supplier/SupplierForm";
import SupplierHero from "@/components/become-supplier/SupplierHero";

export default function BecomeSupplierPage() {
  return (
    <>
      <SupplierHero />

      <SupplierForm />

      <RequiredDocuments />

      <SupplierFAQ />

      <SupplierCTA />
    </>
  );
}