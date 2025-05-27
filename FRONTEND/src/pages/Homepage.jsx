import HeroSection from "../components/HeroSection";
import BusinessBanner from "../components/BusinessBanner";
import Partners from "../components/Partners";
import Testimonials from "../components/Testimonials";
import Collections from "../components/Collections";

const Homepage = () => {
  return (
    <>
      <HeroSection />
      <Collections />
      <BusinessBanner />
      <Partners />
      <Testimonials />

    </>
  );
};

export default Homepage;