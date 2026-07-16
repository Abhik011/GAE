import QuoteHero from "@/components/request-quote/QuoteHero";
import WhyRequestQuote from "@/components/request-quote/WhyRequestQuote";
import QuoteForm from "@/components/request-quote/QuoteForm";
import QuoteProcess from "@/components/request-quote/QuoteProcess";
import QuoteFAQ from "@/components/request-quote/QuoteFAQ";
import QuoteCTA from "@/components/request-quote/QuoteCTA";

export const metadata = {
  title: "Request a Quote | GlobalAtlas Exim",
  description:
    "Request a customized sourcing and export quotation from GlobalAtlas Exim. Connect with verified Indian manufacturers and receive competitive pricing for your products.",
};

export default function RequestQuotePage() {
  return (
    <>
      <QuoteHero />

      <WhyRequestQuote />

      <QuoteProcess />

      <QuoteForm />

      <QuoteFAQ />

      <QuoteCTA />
    </>
  );
}