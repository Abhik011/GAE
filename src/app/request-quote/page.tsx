import QuoteHero from "@/components/request-quote/QuoteHero";
import WhyRequestQuote from "@/components/request-quote/WhyRequestQuote";
import QuoteForm from "@/components/request-quote/QuoteForm";
import QuoteProcess from "@/components/request-quote/QuoteProcess";
import QuoteFAQ from "@/components/request-quote/QuoteFAQ";
import QuoteCTA from "@/components/request-quote/QuoteCTA";

export const metadata = {
  title: "Request a Quote | GlobalAtlas Exim",
  description:
    "Request a sourcing quote from GlobalAtlas Exim and connect with suitable Indian manufacturers for your product requirements.",
};

export default function RequestQuotePage() {
  return (
    <>
      <QuoteHero />

      <WhyRequestQuote />

      <QuoteForm />

      <QuoteProcess />

      <QuoteFAQ />


    </>
  );
}