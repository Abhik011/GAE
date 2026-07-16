import LegalHero from "@/components/legal/LegalHero";
import LegalContent from "@/components/legal/LegalContent";

export const metadata = {
  title: "Privacy Policy | GlobalAtlas Exim",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <LegalHero
        badge="Legal"
        title="Privacy Policy"
        description="Learn how GlobalAtlas Exim collects, stores, uses, and protects your personal information."
      />

      <LegalContent
        sections={[
          {
            title: "1. Information We Collect",
            content:
              "We collect information that you voluntarily provide through contact forms, quote requests, supplier registrations, email communications, and website interactions. This may include your name, company name, email address, phone number, business information, product requirements, and uploaded documents.",
          },
          {
            title: "2. How We Use Your Information",
            content:
              "Your information is used to process requests, provide sourcing services, communicate with you, improve our services, verify suppliers, connect buyers with manufacturers, and comply with legal obligations.",
          },
          {
            title: "3. Cookies & Analytics",
            content:
              "We use cookies and analytics technologies to understand website usage, improve user experience, and maintain website performance. You can manage cookies through your browser settings.",
          },
          {
            title: "4. Information Sharing",
            content:
              "We do not sell your personal information. Information may be shared with verified suppliers, logistics providers, payment partners, or other service providers only when necessary to provide requested services.",
          },
          {
            title: "5. Data Security",
            content:
              "We implement appropriate technical and organizational measures to protect your information from unauthorized access, disclosure, alteration, or destruction.",
          },
          {
            title: "6. Your Rights",
            content:
              "Depending on applicable law, you may request access to, correction of, or deletion of your personal information. You may also object to certain processing activities where permitted by law.",
          },
          {
            title: "7. Contact Us",
            content:
              "If you have questions regarding this Privacy Policy or our data handling practices, please contact us through our Contact page.",
          },
        ]}
      />
    </>
  );
}