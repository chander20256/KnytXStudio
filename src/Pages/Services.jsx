import DevelopmentProcess from "../Component/Services/DevelopmentProcess";
import ServicesCTA from "../Component/Services/ServicesCTA";
import ServicesHero from "../Component/Services/ServicesHero";
import TechnologyDomains from "../Component/Services/TechnologyDomains";
import WhyDifferent from "../Component/Services/WhyDifferent";

import DomainWorkflow from "../Component/Services/DomainWorkflow";

export default function Services(){
  return(
    <main>

      <ServicesHero/>

      <TechnologyDomains/>

      <DomainWorkflow/>
     
      {/* <DevelopmentProcess/> */}

      <WhyDifferent/>

      {/* <ServicesCTA/> */}

    </main>
  )
}