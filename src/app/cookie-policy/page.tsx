import Container from "@/components/ui/container/Container";
import SectionHeader from "@/components/sections/SectionHeader";

export default function CookiePolicyPage() {
  return (
    <main className="py-32">

      <Container>

        <SectionHeader
          badge="Legal"
          title="Cookie Policy"
          description="Learn how GlobalAtlas Exim uses cookies and similar technologies to improve your browsing experience while respecting your privacy."
        />

        <div className="mx-auto mt-16 max-w-4xl rounded-[32px] border border-border bg-white p-10 shadow-sm lg:p-14">

          <p className="text-sm text-muted-foreground">
            <strong>Effective Date:</strong> 08 July 2026
            <br />
            <strong>Last Updated:</strong> 08 July 2026
          </p>

          <div className="mt-10 space-y-10 leading-8 text-muted-foreground">

            <section>

              <h2 className="text-2xl font-bold text-foreground">
                1. Introduction
              </h2>

              <p className="mt-4">
                GlobalAtlas Exim ("GlobalAtlas Exim", "we", "our", or "us")
                respects your privacy and is committed to protecting your
                personal data. This Cookie Policy explains how cookies and
                similar technologies are used when you visit our website.
              </p>

              <p className="mt-4">
                This policy should be read together with our Privacy Policy and
                is intended to comply with applicable laws, including the
                Digital Personal Data Protection Act, 2023 (India).
              </p>

            </section>

            <section>

              <h2 className="text-2xl font-bold text-foreground">
                2. What Are Cookies?
              </h2>

              <p className="mt-4">
                Cookies are small text files stored on your computer, tablet,
                or mobile device when you visit a website. They help websites
                remember your preferences, improve performance, maintain
                security, and understand how visitors use the website.
              </p>

            </section>

            <section>

              <h2 className="text-2xl font-bold text-foreground">
                3. Types of Cookies We Use
              </h2>

              <div className="mt-6 space-y-6">

                <div>
                  <h3 className="font-semibold text-foreground">
                    Essential Cookies
                  </h3>

                  <p className="mt-2">
                    These cookies are required for the proper operation of our
                    website and cannot generally be disabled. They help provide
                    secure access, navigation, and basic functionality.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground">
                    Performance & Analytics Cookies
                  </h3>

                  <p className="mt-2">
                    These cookies help us understand how visitors interact with
                    our website so we can improve performance, usability, and
                    user experience.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground">
                    Functional Cookies
                  </h3>

                  <p className="mt-2">
                    Functional cookies remember your preferences, such as
                    language selection and previously entered information, to
                    provide a more personalized browsing experience.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground">
                    Marketing Cookies
                  </h3>

                  <p className="mt-2">
                    Where applicable, these cookies help us measure advertising
                    effectiveness and provide relevant business communications.
                    They are only used where legally required and with your
                    consent.
                  </p>
                </div>

              </div>

            </section>

            <section>

              <h2 className="text-2xl font-bold text-foreground">
                4. Third-Party Services
              </h2>

              <p className="mt-4">
                We may use trusted third-party service providers such as
                analytics platforms, embedded maps, video services, or customer
                communication tools. These providers may use their own cookies
                subject to their respective privacy policies.
              </p>

            </section>

            <section>

              <h2 className="text-2xl font-bold text-foreground">
                5. Managing Cookies
              </h2>

              <p className="mt-4">
                Most web browsers allow you to accept, reject, delete, or
                manage cookies through browser settings. Please note that
                disabling certain cookies may affect website functionality and
                user experience.
              </p>

            </section>

            <section>

              <h2 className="text-2xl font-bold text-foreground">
                6. Your Privacy Rights
              </h2>

              <p className="mt-4">
                Where cookies involve the processing of personal data,
                GlobalAtlas Exim processes such information in accordance with
                applicable privacy laws, including the Digital Personal Data
                Protection Act, 2023. We process personal data only for lawful
                purposes, apply reasonable security safeguards, and honour
                applicable rights available under law.
              </p>

            </section>

            <section>

              <h2 className="text-2xl font-bold text-foreground">
                7. Changes to This Policy
              </h2>

              <p className="mt-4">
                We may update this Cookie Policy from time to time to reflect
                changes in technology, legal requirements, or our business
                practices. Any updates will be published on this page together
                with the revised effective date.
              </p>

            </section>

            <section>

              <h2 className="text-2xl font-bold text-foreground">
                8. Contact Us
              </h2>

              <p className="mt-4">
                If you have any questions regarding this Cookie Policy or our
                privacy practices, please contact us:
              </p>

              <div className="mt-6 rounded-2xl border border-border bg-slate-50 p-6">

                <h3 className="font-bold text-foreground">
                  GlobalAtlas Exim
                </h3>

                <p className="mt-3">
                  Email: info@globalatlas.in
                </p>

                <p>
                  Website: https://www.globalatlas.in
                </p>

                <p>
                  Panvel, Navi Mumbai,
                  Maharashtra 410206, India
                </p>

              </div>

            </section>

          </div>

        </div>

      </Container>

    </main>
  );
}