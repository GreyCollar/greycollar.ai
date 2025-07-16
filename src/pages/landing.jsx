import { Helmet } from "react-helmet-async";
import MarketingCaseStudyDetails from "../sections/marketing-case-study-details";
import MarketingIntegrationsList from "src/sections/marketing-integrations-list";
import MarketingLandingFaqs from "../sections/marketing-landing-faqs";
import MarketingLandingPlatformHero from "../sections/marketing-landing-platform-hero.jsx";
import MarketingLandingPortfolio from "../sections/marketing-landing-portfolio";
import MarketingNewsletter from "../sections/marketing-newsletter";
import MarketingServices from "../sections/marketing-services";
import MarketingServicesHowItWorks from "../sections/marketing-services-how-it-works";
import MarketingServicesInclude from "../sections/marketing-services-include";
import MarketingServicesList from "../sections/marketing-services-list";

export default function MarketingLandingPage() {
  return (
    <>
      <Helmet>
        <title>GreyCollar - Supervised AI Agents</title>
      </Helmet>

      <MarketingLandingPlatformHero />

      <MarketingLandingPortfolio />

      <MarketingServicesList />

      <MarketingIntegrationsList />

      <MarketingServicesInclude />

      <MarketingServices />

      <MarketingServicesHowItWorks />

      <MarketingCaseStudyDetails />

      <MarketingLandingFaqs />

      <MarketingNewsletter />
    </>
  );
}
