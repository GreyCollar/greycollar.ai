import Chat from "../sections/Chat";
import { Helmet } from "react-helmet-async";
import MarketingCaseStudyDetails from "../sections/marketing-case-study-details";
import MarketingIntegrationsList from "src/sections/marketing-integrations-list";
import MarketingLandingConsultingHero from "../sections/marketing-landing-consulting-hero.jsx";
import MarketingLandingFaqs from "../sections/marketing-landing-faqs";
import MarketingNewsletter from "../sections/marketing-newsletter";
import MarketingServices from "../sections/marketing-services";
import MarketingServicesHowItWorks from "../sections/marketing-services-how-it-works";
import MarketingServicesInclude from "../sections/marketing-services-include";
import MarketingServicesList from "../sections/marketing-services-list";

export default function ConsultingPage() {
  return (
    <>
      <Helmet>
        <title>GreyCollar - Supervised AI Agents</title>
      </Helmet>

      <MarketingLandingConsultingHero />

      <MarketingServicesList />

      <Chat />

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
