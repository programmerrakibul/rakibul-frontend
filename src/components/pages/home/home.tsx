import Banner from "./banner";
import Benefits from "./benefits";
import CTA from "./cta";
import Curriculum from "./curriculum";
import PainPoints from "./pain-points";
import Testimonial from "./testimonial";

const HomePage = () => {
  return (
    <>
      <Banner />
      <PainPoints />
      <Benefits />
      <Curriculum />
      <Testimonial />
      <CTA />
    </>
  );
};

export default HomePage;
