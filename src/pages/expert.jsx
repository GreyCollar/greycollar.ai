import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

import ExpertHero from "src/sections/expert-hero";

import gtag from "../gtag";

export default function ExpertPage() {
  useEffect(() => {
    gtag("event", "page_view", {
      page_title: "Expert",
      page_location: "https://nucleoid.com/",
      page_path: "/expert",
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Expert - Nucleoid</title>
      </Helmet>

      <ExpertHero />
    </>
  );
}
