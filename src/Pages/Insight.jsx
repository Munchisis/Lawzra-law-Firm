import { insightsData } from "../assets/assets";
import bannerImg from "../assets/img/about-us-4.png";

const Insight = () => {
  return (
    <>
      {/* Hero Section - Fixed background path */}
      <div
        style={{ backgroundImage: `url(${bannerImg})` }}
        className="bg-cover bg-center h-64 mb-10 flex flex-col items-center justify-center relative"
      >
        {/* Added an overlay to ensure text is readable regardless of image brightness */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10">
          <h1 className="text-white text-6xl font-medium text-center">
            Insights
          </h1>
          <p className="text-center text-slate-100 mt-2 px-4">
            Learn from our deep perception on important legal issues happening
            around the globe.
          </p>
        </div>
      </div>

      {/* Insights Cards Container */}
      <div className="flex flex-wrap items-stretch justify-center gap-8 pt-12 mb-20 px-6 max-w-7xl mx-auto">
        {insightsData.map((area, index) => (
          <div
            key={area.id || index}
            className="max-w-72 w-full bg-white dark:bg-slate-800 hover:-translate-y-2 transition duration-300 p-4 rounded-xl shadow-lg cursor-pointer border border-transparent dark:border-slate-700 dark:hover:shadow-indigo-700/30 flex flex-col"
          >
            <img
              className="rounded-lg h-40 w-full object-cover"
              src={area.image}
              alt={area.title}
            />

            {/* Category Tag & Date */}
            <div className="flex items-center justify-between mt-4">
              <span className="text-[10px] uppercase tracking-wider text-indigo-600 font-bold bg-indigo-50 px-2 py-1 rounded">
                {area.title}
              </span>
              <span className="text-[10px] text-gray-400 font-normal">
                Jan 20, 2026
              </span>
            </div>

            {/* Description - Fixed text color for visibility */}
            <p className="text-left text-gray-700 dark:text-slate-200 mt-3 text-sm line-clamp-3 flex-grow">
              {area.description}
            </p>

            <div className="mt-4 pt-4 border-t border-gray-100 dark:border-slate-700">
              <span className="text-indigo-600 dark:text-indigo-400 text-xs font-semibold hover:underline">
                Read Article →
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Insight;
