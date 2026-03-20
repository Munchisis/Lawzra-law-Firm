import { m } from "framer-motion";
import TeamCard from "../component/teamCard";
import { assets } from "../assets/assets";
import AnimatedPage from "../component/AnimatedPage";

const OurTeam = () => {
  // Animation Variants
  const cardVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <AnimatedPage>
      <div className="pb-24 bg-white dark:bg-primary">
        {/* Hero Section */}
        <div
          className="bg-cover bg-center h-80 mb-16 flex flex-col items-center justify-center text-white relative"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${assets.aboutUs})`,
          }}
        >
          <m.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center z-10"
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4">
              Our Team
            </h1>
            <p className="text-lg text-slate-200 mt-3 max-w-md mx-auto px-4 italic">
              Meet the dedicated professionals driving excellence at Lawzra.
            </p>
          </m.div>
        </div>

        <div className="flex flex-col md:flex-1 gap-24 mx-auto max-w-7xl px-6">
          {/* -------- Mgboji Uchenna Emmanuel ---------- */}
          <section className="flex flex-col lg:flex-row items-center justify-center gap-16">
            <m.div
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="max-w-2xl text-base leading-relaxed text-gray-600 dark:text-slate-300"
            >
              <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-6">
                Mgboji Uchenna Emmanuel
              </h2>
              <p className="border-l-4 border-green-600 pl-6 mb-6 italic">
                Founder and Senior Partner of Lawzra LP
              </p>
              <p>
                With extensive experience in Intellectual Property Law, Media
                Law, and Corporate Transactions, Uchenna has played a central
                role in the firm’s notable successes, particularly within its
                ADR practice.
              </p>
              <p className="mt-4">
                He holds a Master’s degree from the East China University of
                Political Science and Law and is a registered member of the
                Nigerian Institute of Chartered Arbitrators and the WIPO
                Academy.
              </p>
            </m.div>

            <m.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <TeamCard
                image={assets.lawyer1}
                name="Mgboji Uchenna Emmanuel"
                position="Senior Partner"
              />
            </m.div>
          </section>

          {/* -------- Macsunny Ezikpe Nwoke (Reversed Layout) ---------- */}
          <section className="flex flex-col lg:flex-row-reverse items-center justify-center gap-16">
            <m.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="max-w-2xl text-base leading-relaxed text-gray-600 dark:text-slate-300"
            >
              <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-6 text-right lg:text-left">
                Macsunny Ezikpe Nwoke
              </h2>
              <p className="border-r-4 lg:border-r-0 lg:border-l-4 border-green-600 pr-6 lg:pr-0 lg:pl-6 mb-6 italic text-right lg:text-left">
                Family Law & Litigation Consultant
              </p>
              <p>
                Macsunny is distinguished by his analytical depth and six years
                of practical experience in Tax Law and Property transactions. He
                served as a prosecutor with the ASIRS, bringing unique public
                sector insight to private consultancy.
              </p>
              <p className="mt-4">
                His practice further encompasses Wills and Estate Law, providing
                structured legal support in probate applications and estate
                planning with unwavering precision.
              </p>
            </m.div>

            <m.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <TeamCard
                name="Macsunny Ezikpe Nwoke"
                position="Consultant"
                image={assets.lawyer2}
              />
            </m.div>
          </section>

          {/* -------- Emuchay Chigozie Kelechi ---------- */}
          <section className="flex flex-col lg:flex-row items-center justify-center gap-16 mb-12">
            <m.div
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="max-w-2xl text-base leading-relaxed text-gray-600 dark:text-slate-300"
            >
              <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-6">
                Emuchay Chigozie Kelechi
              </h2>
              <p className="border-l-4 border-green-600 pl-6 mb-6 italic">
                IT & Corporate Consultant
              </p>
              <p>
                Specializing in Corporate Law and Commercial Transactions,
                Emuchay provides meticulous legal research and practical
                solutions to complex challenges.
              </p>
              <p className="mt-4">
                A graduate of the Abia State University Uturu, his commitment to
                excellence in Technical Writing and Technology Law has earned
                him a reputation as a reliable strategic advisor.
              </p>
            </m.div>

            <m.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <TeamCard
                name="Emuchay Chigozie Kelechi"
                position="IT Consultant"
                image={assets.lawyer3}
              />
            </m.div>
          </section>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default OurTeam;
