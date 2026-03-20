import { Link } from "react-router-dom";
import { m } from "framer-motion";
import { practiceAreas } from "../../assets/assets";

const Practice = () => {
  return (
    <section className="mt-20 mb-20 px-4 ">
      {/* Header Animation */}
      <m.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-center dark:text-slate-100">
          Practice Areas
        </h1>
        <p className="text-sm text-slate-500 text-center mt-4 max-w-lg mx-auto dark:text-slate-300 leading-relaxed">
          Explore our diverse practice areas, where our dedicated team of legal
          experts provides tailored solutions to meet your unique needs.
        </p>
      </m.div>

      {/* Grid Animation */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-w-6xl mx-auto">
        {practiceAreas.map((area, index) => (
          <m.div
            key={area.id || index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            // Staggered effect: cards appear one by one
            transition={{ delay: index * 0.1, duration: 0.4 }}
            whileHover={{ y: -5 }} // Subtle lift on hover
          >
            <Link
              to={`/practice-areas/${area.path}`}
              className="group block p-8 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-rose-500 dark:hover:border-rose-500 hover:shadow-xl transition-all duration-300 relative overflow-hidden h-full flex items-center justify-center"
            >
              {/* Decorative background element on hover */}
              <div className="absolute -right-4 -bottom-4 w-12 h-12 bg-rose-500/10 rounded-full group-hover:scale-[6] transition-transform duration-500" />

              <h3 className="relative z-10 text-lg font-bold text-slate-800 dark:text-slate-200 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors text-center">
                {area.title}
              </h3>
            </Link>
          </m.div>
        ))}
      </div>
    </section>
  );
};

export default Practice;
