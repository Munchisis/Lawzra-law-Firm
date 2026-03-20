import { MoveLeft, Home, FileCheck, HardHat, Search, Gavel, Users, Globe, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

const RealEstate = () => {
  const expertise = [
    {
      title: "Property Transactions",
      desc: "Facilitating seamless buying, selling, and transfer of residential and commercial titles.",
      icon: <Home size={18} className="text-green-500" />,
    },
    {
      title: "Title Perfection",
      desc: "Drafting Deeds, Leases, and processing Governor's Consent and C of O.",
      icon: <FileCheck size={18} className="text-green-500" />,
    },
    {
      title: "Real Estate Development",
      desc: "Legal support for large-scale projects, zoning, permits, and joint ventures.",
      icon: <HardHat size={18} className="text-green-500" />,
    },
    {
      title: "Due Diligence",
      desc: "Conducting thorough searches at land registries to verify titles and prevent fraud.",
      icon: <Search size={18} className="text-green-500" />,
    },
    {
      title: "Property Management",
      desc: "Advising on landlord-tenant relations and legal compliance.",
      icon: <Users size={18} className="text-green-500" />,
    },
    {
      title: "Real Estate Litigation",
      desc: "Representation in boundary disputes and breach of property contracts.",
      icon: <Gavel size={18} className="text-green-500" />,
    },
    {
      title: "Estate Planning",
      desc: "Strategic structuring of real estate holdings for generational transfer.",
      icon: <CheckCircle2 size={18} className="text-green-500" />,
    },
    {
      title: "International Real Estate",
      desc: "Assisting diaspora clients and foreign investors with acquisitions.",
      icon: <Globe size={18} className="text-green-500" />,
    },
  ];

  return (
    <>
      {/* Header Hero */}
      <div
        className="relative px-4 bg-no-repeat bg-cover pt-40 pb-24 overflow-hidden"
        style={{ backgroundImage: `url(${assets.real_estate || assets.aboutUs4})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white font-serif uppercase tracking-tight">
            Real Estate
          </h1>
          <div className="h-1 w-20 bg-green-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-slate-200 text-lg md:text-xl font-light">
            Full-service legal expertise tailored to navigate complex regulatory and commercial landscapes.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center px-4 md:px-10 lg:px-20 -mt-10 mb-20 relative z-20">
        <div className="w-full max-w-6xl bg-white dark:bg-slate-900 p-8 md:p-16 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl transition-colors duration-300">
          
          {/* Navigation */}
          <div className="mb-10">
            <Link
              to="/practice-areas"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-green-600 transition-colors group px-4 py-2 bg-slate-50 dark:bg-slate-800 rounded-full border border-slate-100 dark:border-slate-700"
            >
              <MoveLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Back to Practice Areas
            </Link>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white text-center mb-6">
            Real Estate & Property Law
          </h2>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-16 leading-relaxed text-center max-w-4xl mx-auto">
            Our real estate practice provides comprehensive legal solutions for investors, developers, and individuals navigating the complexities of property acquisition, management, and disposal.
          </p>

          {/* Expertise Grid */}
          <div className="mt-8">
            <div className="flex items-center gap-4 mb-12">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white uppercase tracking-widest">
                Our Expertise
              </h3>
              <div className="flex-1 h-px bg-slate-100 dark:bg-slate-800"></div>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              {expertise.map((item, i) => (
                <li key={i} className="flex gap-4 group">
                  <div className="mt-1 p-2 bg-green-50 dark:bg-green-900/20 rounded-lg group-hover:scale-110 transition-transform h-fit">
                    {item.icon}
                  </div>
                  <div className="flex flex-col">
                    <strong className="text-slate-900 dark:text-slate-100 font-bold text-lg leading-tight">
                      {item.title}
                    </strong>
                    <span className="text-slate-600 dark:text-slate-400 text-sm mt-2 leading-relaxed">
                      {item.desc}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Call to Action */}
          <div className="mt-20 text-center border-t border-slate-100 dark:border-slate-800 pt-12">
            <h4 className="text-slate-900 dark:text-white font-bold text-xl mb-6">Securing a property or need title verification?</h4>
            <Link
              to="/appointment"
              className="inline-block bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-full font-bold transition-all active:scale-95 shadow-xl shadow-green-600/20 uppercase tracking-widest text-sm"
            >
              Verify a Property Title
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default RealEstate;
