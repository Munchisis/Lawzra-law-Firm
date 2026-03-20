import Hero from "../component/home/hero";
import About from "../component/home/about";
import Practice from "../component/home/practice";
import Testimonial from "../component/home/testimonial";
import Partners from "../component/home/Partners";
import Insight from "../component/home/insight";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Practice />
      <Partners />
      <Insight />
      <Testimonial />
    </div>
  );
};

export default Home;
