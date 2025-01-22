import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

import gtag from "../gtag";
import MarketingServices from "../sections/marketing-services";
import MarketingNewsletter from "../sections/marketing-newsletter";
import NaturalLanguageHero from "../sections/natural-language-hero";
import MarketingLandingFaqs from "../sections/marketing-landing-faqs";
import MarketingCaseStudyDetails from "../sections/marketing-case-study-details";
import MarketingServicesHowItWorks from "../sections/marketing-services-how-it-works";

export default function MarketingLandingPage() {
  useEffect(() => {
    gtag("event", "page_view", {
      page_title: "Nature Language",
      page_location: "https://nucleoid.com/",
      page_path: "/nature-language",
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>
          Nucleoid - Neuro-Symbolic AI with Knowledge Graph - Inspired by Nature
        </title>
      </Helmet>

      <NaturalLanguageHero />

      <MarketingServicesHowItWorks />

      <MarketingServices />

      <MarketingCaseStudyDetails />

      <MarketingLandingFaqs />

      <MarketingNewsletter />
    </>
  );
}
