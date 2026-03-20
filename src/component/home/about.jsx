import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { m } from "motion/react";

const AboutUs = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-10 max-md:px-4 mb-20 mt-20 pb-10">
      {/* Image Animation */}
      <m.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative shadow-2xl shadow-indigo-600/40 rounded-2xl overflow-hidden shrink-0"
      >
        <img
          className="max-w-md w-full object-cover rounded-2xl"
          src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?q=80&w=451&h=451&auto=format&fit=crop"
          alt=""
        />
      </m.div>

      {/* Text Animation */}
      <m.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-sm text-slate-600 max-w-lg dark:text-light-text"
      >
        <h1 className="text-3xl md:text-4xl uppercase font-semibold text-slate-700 dark:text-light-text">
          About Us
        </h1>

        <div className="w-38 h-0.75 rounded-full bg-linear-to-r from-indigo-600 to-[#DDD9FF] dark:bg-linear-to-r dark:from-gray-800 dark:to-gray-300"></div>

        <p className="mt-8">
          Lawzra is a premier legal services firm dedicated to providing expert
          legal guidance and trusted solutions to clients across various
          practice areas. With a team of experienced attorneys, we are committed
          to delivering exceptional service and achieving favorable outcomes for
          our clients.
        </p>

        <p className="mt-4">
          Our mission is to empower individuals and businesses alike by
          navigating the complexities of the legal landscape with integrity,
          professionalism, and personalized attention.
        </p>

        <p className="mt-4">
          At Lawzra, we believe in building lasting relationships with our
          clients based on trust and transparency. We take the time to
          understand each client's unique needs and tailor our legal strategies
          accordingly.
        </p>

        {/* Button Animation */}
        <m.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            to="/About-us"
            className="flex items-center w-max gap-2 mt-8 hover:-translate-y-0.5 transition duration-300 bg-linear-to-r from-indigo-600 to-[#8A7DFF] py-3 px-8 rounded-full text-white dark:border dark:border-dark-text dark:bg-gray-900 dark:hover:bg-gray-800 dark:hover:border-highlight cursor-pointer"
          >
            <span>Read more</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </m.div>
      </m.div>
    </section>
  );
};

export default AboutUs;
