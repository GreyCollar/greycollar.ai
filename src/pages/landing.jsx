import Chat from "../sections/Chat";
import { Helmet } from "react-helmet-async";
import MarketingCaseStudyDetails from "../sections/marketing-case-study-details";
import MarketingLandingFaqs from "../sections/marketing-landing-faqs";
import MarketingLandingHero from "../sections/marketing-landing-hero";
import MarketingNewsletter from "../sections/marketing-newsletter";
import MarketingServices from "../sections/marketing-services";
import MarketingServicesHowItWorks from "../sections/marketing-services-how-it-works";
import MarketingServicesInclude from "../sections/marketing-services-include";
import gtag from "../gtag";
import { useEffect } from "react";

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
        <title>GreyCollar</title>
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
