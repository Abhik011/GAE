import LegalHero from "@/components/legal/LegalHero";
import LegalContent from "@/components/legal/LegalContent";

export const metadata = {
  title: "Terms & Conditions | GlobalAtlas Exim",
};

export default function TermsPage() {
  return (
    <>
      <LegalHero
        badge="Legal"
        title="Terms & Conditions"
        description="These Terms & Conditions govern your access to and use of the GlobalAtlas Exim website and services."
      />

      <LegalContent
        sections={[
          {
            title: "1. Acceptance of Terms",
            content:
              "By accessing or using the GlobalAtlas Exim website, you agree to comply with these Terms & Conditions and all applicable laws and regulations.",
          },
          {
            title: "2. Services",
            content:
              "GlobalAtlas Exim provides sourcing, supplier verification, export assistance, logistics coordination, and related business services. Product availability and services may vary by market and supplier.",
          },
          {
            title: "3. User Responsibilities",
            content:
              "Users must provide accurate information, comply with applicable laws, and refrain from using the platform for unlawful, fraudulent, or unauthorized purposes.",
          },
          {
            title: "4. Intellectual Property",
            content:
              "All website content, branding, logos, graphics, text, software, and other materials are owned by GlobalAtlas Exim or its licensors and are protected by applicable intellectual property laws.",
          },
          {
            title: "5. Limitation of Liability",
            content:
              "GlobalAtlas Exim acts as a sourcing and export partner. While we strive to connect users with reliable suppliers and provide quality services, we are not responsible for losses arising from independent agreements between buyers and suppliers, except where required by applicable law.",
          },
          {
            title: "6. Modifications",
            content:
              "We reserve the right to update these Terms & Conditions at any time. Continued use of the website after changes become effective constitutes acceptance of the revised terms.",
          },
          {
            title: "7. Contact",
            content:
              "For any questions regarding these Terms & Conditions, please contact us using the details available on our Contact page.",
          },
        ]}
      />
    </>
  );
}