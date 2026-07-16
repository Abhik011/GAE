import Container from "@/components/ui/container/Container";
import SectionHeader from "@/components/sections/SectionHeader";

export default function DisclaimerPage() {
  return (
    <main className="py-32">

      <Container>

        <SectionHeader
          badge="Legal"
          title="Disclaimer"
          description="Please read this Disclaimer carefully before using the GlobalAtlas Exim website or our services."
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
                1. General Information
              </h2>

              <p className="mt-4">
                The information provided on the GlobalAtlas Exim website is
                published in good faith for general business and informational
                purposes only. While we strive to keep all information accurate,
                complete, and up to date, we make no representation or warranty
                regarding its accuracy, completeness, reliability, or
                suitability for any particular purpose.
              </p>

            </section>

            <section>

              <h2 className="text-2xl font-bold text-foreground">
                2. No Professional Advice
              </h2>

              <p className="mt-4">
                The content available on this website should not be considered
                legal, financial, customs, taxation, regulatory, or commercial
                advice. Users should consult qualified professionals before
                making business or commercial decisions.
              </p>

            </section>

            <section>

              <h2 className="text-2xl font-bold text-foreground">
                3. Product Information
              </h2>

              <p className="mt-4">
                Product descriptions, specifications, certifications,
                photographs, packaging details, pricing, availability, and lead
                times displayed on this website are for reference only and may
                change without prior notice.
              </p>

              <p className="mt-4">
                Final product specifications, commercial terms, pricing,
                quantities, and delivery schedules will be confirmed through
                formal quotations, contracts, or purchase agreements.
              </p>

            </section>

            <section>

              <h2 className="text-2xl font-bold text-foreground">
                4. Third-Party Suppliers
              </h2>

              <p className="mt-4">
                GlobalAtlas Exim works with manufacturers, exporters, logistics
                providers, inspection agencies, and other third-party partners.
                Although we conduct supplier verification and due diligence,
                we cannot guarantee the actions, performance, financial
                condition, or future conduct of any independent third party.
              </p>

            </section>

            <section>

              <h2 className="text-2xl font-bold text-foreground">
                5. International Trade
              </h2>

              <p className="mt-4">
                International trade involves commercial, regulatory,
                transportation, customs, currency, and geopolitical risks that
                may affect pricing, availability, delivery schedules, import
                requirements, and business operations. GlobalAtlas Exim cannot
                guarantee uninterrupted or risk-free international trade.
              </p>

            </section>

            <section>

              <h2 className="text-2xl font-bold text-foreground">
                6. External Links
              </h2>

              <p className="mt-4">
                This website may contain links to third-party websites for your
                convenience. GlobalAtlas Exim does not control or endorse the
                content, products, services, or privacy practices of external
                websites and accepts no responsibility for them.
              </p>

            </section>

            <section>

              <h2 className="text-2xl font-bold text-foreground">
                7. Limitation of Liability
              </h2>

              <p className="mt-4">
                To the maximum extent permitted by applicable law, GlobalAtlas
                Exim shall not be liable for any direct, indirect, incidental,
                consequential, special, or punitive damages arising from the use
                of this website, reliance on its content, or the inability to
                access the website.
              </p>

            </section>

            <section>

              <h2 className="text-2xl font-bold text-foreground">
                8. Intellectual Property
              </h2>

              <p className="mt-4">
                All content on this website, including text, graphics, logos,
                photographs, icons, designs, software, and other materials,
                unless otherwise stated, is the property of GlobalAtlas Exim and
                is protected under applicable intellectual property laws.
              </p>

            </section>

            <section>

              <h2 className="text-2xl font-bold text-foreground">
                9. Changes to this Disclaimer
              </h2>

              <p className="mt-4">
                We reserve the right to modify or update this Disclaimer at any
                time without prior notice. Continued use of this website after
                any changes constitutes acceptance of the updated Disclaimer.
              </p>

            </section>

            <section>

              <h2 className="text-2xl font-bold text-foreground">
                10. Contact Us
              </h2>

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
                  Maharashtra 410206,
                  India
                </p>

              </div>

            </section>

          </div>

        </div>

      </Container>

    </main>
  );
}