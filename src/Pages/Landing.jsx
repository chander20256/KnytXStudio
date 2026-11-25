import Hero from "../Component/Landing/Hero";
import Services from "../Component/Landing/Services";
import InternshipSection from "../Component/Landing/InternshipSection";
import WhyChoose from "../Component/Landing/WhyChoose";
import FeaturedWork from "../Component/Landing/FeaturedWork";
import Process from "../Component/Landing/Process";
import Testimonials from "../Component/Landing/Testimonials";

export default function Landing() {
  return (
    <>
      <Hero />
      <Services />
      <InternshipSection />
      <WhyChoose />
      <FeaturedWork />
      <Process />
      <Testimonials />
    </>
  );
}