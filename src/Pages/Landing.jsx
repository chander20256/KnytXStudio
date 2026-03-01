import Hero from "../Component/Landing/Hero";
import Services from "../Component/Landing/Services";
import WhyChoose from "../Component/Landing/WhyChoose";
import FeaturedWork from "../Component/Landing/FeaturedWork";
import Process from "../Component/Landing/Process";
import Testimonials from "../Component/Landing/Testimonials";

export default function Landing() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChoose />
      <FeaturedWork />
      <Process />
      <Testimonials />
    </>
  );
}