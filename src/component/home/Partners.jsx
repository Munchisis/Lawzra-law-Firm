import { m } from "framer-motion";
import { Linkedin, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { partnerInfo } from "../../assets/assets";

const Partners = () => {
  return (
    <section className="py-20 overflow-hidden px-4 md:px-20">
      <m.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-center dark:text-white">
          Our Partners
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 text-center mt-4 max-w-lg mx-auto px-4">
          Meet the leadership driving our commitment to legal excellence and
          strategic innovation.
        </p>
      </m.div>

      {/* Partners Accordion Container */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2 w-full max-w-7xl mt-12 mx-auto px-6 h-auto md:h-[550px]">
        {partnerInfo.map((partner, index) => (
          <m.div
            key={partner.id || index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            // Hover Expansion Logic
            whileHover={{ flex: 2 }}
            className="relative group w-full md:flex-1 h-80 md:h-full overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 ease-out"
          >
            <m.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8 }}
              className="h-full w-full object-cover object-top"
              src={partner.img}
              alt={partner.title}
            />

            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/90 via-black/30 to-transparent text-white md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
              <m.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-xl md:text-2xl font-bold leading-tight">
                  {partner.title}
                </h2>
                <p className="text-xs md:text-sm text-gray-300 mt-2 line-clamp-2 md:line-clamp-none">
                  {partner.desc}
                </p>

                <div className="flex gap-4 mt-6">
                  <a
                    href={partner.linkedin}
                    target="_blank"
                    rel="noopener"
                    className="p-2 bg-white/10 hover:bg-rose-500 rounded-full transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={`mailto:${partner.email}`}
                    className="p-2 bg-white/10 hover:bg-rose-500 rounded-full transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </m.div>
            </div>
          </m.div>
        ))}
      </div>

      {/* CTA Button */}
      <m.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="flex justify-center mt-16"
      >
        <Link
          to="/our-team"
          className="group flex items-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-4 rounded-full font-semibold transition-transform active:scale-95 shadow-lg"
        >
          Meet the Full Team
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </m.div>
    </section>
  );
};

export default Partners;
