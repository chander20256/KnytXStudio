import React from "react";

import PricingHero from "../Component/Pricing/PricingHero";
import PricingCards from "../Component/Pricing/PricingCards";
// import PricingFeatures from "../Component/Pricing/PricingCTA";
import PricingCTA from "../Component/Pricing/PricingCTA";
import PricingFAQ from "../Component/Pricing/PricingFAQ";


export default function Pricing() {
  return (
    <main className="bg-white dark:bg-black overflow-hidden">

      <PricingHero />

      <PricingCards />

      {/* <PricingFeatures /> */}

      <PricingFAQ />

      <PricingCTA />

    </main>
  );
}