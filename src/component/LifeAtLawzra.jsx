import { gallery } from "../assets/assets";

const LifeAtLawzra = () => {
  return (
    <section className="dark:bg-primary py-24 px-6 border-t">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold text-slate-700 dark:text-white mb-4 italic">
              Life at Lawzra
            </h2>
            <p className="text-slate-700 dark:text-slate-400 leading-relaxed">
              We believe in more than just legal excellence. We foster a culture
              of growth, well-being, and genuine connection. From our
              state-of-the-art office in Lagos to our community outreach in
              Abuja, this is how we work.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="text-center px-4">
              <p className="text-2xl font-bold text-slate-700 dark:text-green-500">25+</p>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest">
                Associates
              </p>
            </div>
            <div className="w-[1px] h-10 bg-black/30 dark:bg-white/10"></div>
            <div className="text-center px-4">
              <p className="text-2xl font-bold text-slate-700 dark:text-green-500">3</p>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest">
                Offices
              </p>
            </div>
          </div>
        </div>

        {/* Staggered Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-3 gap-4 h-[600px] md:h-[800px]">
          {gallery.map((img, index) => (
            <div
              key={index}
              className={`${img.size} relative group overflow-hidden rounded-2xl bg-slate-900 border border-white/5`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white text-xs font-medium tracking-wide">
                  {img.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default LifeAtLawzra;
