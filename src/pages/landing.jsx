import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

import gtag from "../gtag";
import Chat from "../sections/Chat";
import MarketingServices from "../sections/marketing-services";
import MarketingNewsletter from "../sections/marketing-newsletter";
import MarketingLandingHero from "../sections/marketing-landing-hero";
import MarketingLandingFaqs from "../sections/marketing-landing-faqs";
import MarketingServicesInclude from "../sections/marketing-services-include";
import MarketingCaseStudyDetails from "../sections/marketing-case-study-details";
import MarketingServicesHowItWorks from "../sections/marketing-services-how-it-works";

export default function MarketingLandingPage() {
  useEffect(() => {
    gtag("event", "page_view", {
      page_title: "Neuro-Symbolic AI",
      page_location: "https://nucleoid.com/",
      page_path: "/neuro-symbolic-ai",
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>
          Nucleoid - Neuro-Symbolic AI with Knowledge Graph - Inspired by Nature
        </title>
      </Helmet>

      <MarketingLandingHero />

      <MarketingServicesInclude />

      <Chat />

      <MarketingServices />

      <MarketingServicesHowItWorks />

      <MarketingCaseStudyDetails />

      <MarketingLandingFaqs />

      <MarketingNewsletter />
    </>
  );
}
