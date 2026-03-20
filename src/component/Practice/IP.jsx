import { MoveLeft, Copyright, BookmarkCheck, ShieldCheck, Microscope, Globe, Gavel, Briefcase, FileSearch } from "lucide-react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

const IP = () => {
  const expertise = [
    {
      title: "Patent Law",
      desc: "Obtaining, defending, and enforcing rights for industrial inventions.",
      icon: <Microscope size={18} className="text-green-500" />,
    },
    {
      title: "Trademark Law",
      desc: "Registration, enforcement, and protection of brand identity and logos.",
      icon: <BookmarkCheck size={18} className="text-green-500" />,
    },
    {
      title: "Copyright Law",
      desc: "Legal support for literary, artistic, digital, and musical works.",
      icon: <Copyright size={18} className="text-green-500" />,
    },
    {
      title: "Trade Secret Law",
      desc: "Protecting confidential business information and proprietary assets.",
      icon: <ShieldCheck size={18} className="text-green-500" />,
    },
    {
      title: "Domain Disputes",
      desc: "Resolving conflicts over digital names and cyber-squatting usage.",
      icon: <Globe size={18} className="text-green-500" />,
    },
    {
      title: "International IP",
      desc: "Global protection strategies and cross-border enforcement protocols.",
      icon: <Globe size={18} className="text-green-500" />,
    },
    {
      title: "IP Litigation",
      desc: "Representation in infringement, piracy, and licensing conflicts.",
      icon: <Gavel size={18} className="text-green-500" />,
    },
    {
      title: "IP Transactions",
      desc: "Drafting licensing agreements, assignments, and technology JVs.",
      icon: <Briefcase size={18} className="text-green-500" />,
    },
  ];

  const services = [
    { title: "Portfolio Management", desc: "Maximizing the long-term value of your IP assets." },
    { title: "IP Audits", desc: "Assessing legal strength and current market value." },
    { title: "Due Diligence", desc: "Comprehensive IP review for M&A and tech transactions." },
    { title: "Strategy Development", desc: "Aligning IP protection with core business goals." },
  ];

  return (
    <>
      {/* Header Hero */}
      <div
        className="relative px-4 bg-no-repeat bg-cover pt-40 pb-24 overflow-hidden"
        style={{ backgroundImage: `url(${assets.ip || assets.aboutUs4})` }}
      >
        <div className="absolute inset-0 bg-black/75"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white font-serif uppercase tracking-tight">
            IP
          </h1>
          <div className="h-1 w-20 bg-green-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-slate-200 text-lg md:text-xl font-light">
            Comprehensive legal services dedicated to the protection and enforcement of your creative and industrial innovations.
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
            Intellectual Property Law
          </h2>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-16 leading-relaxed text-center max-w-4xl mx-auto">
            We safeguard the ideas that power your business, from initial registration to high-stakes enforcement and commercialization strategies.
          </p>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Expertise Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-10">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white uppercase tracking-widest">
                  Core Expertise
                </h3>
                <div className="flex-1 h-px bg-slate-100 dark:bg-slate-800"></div>
              </div>

              <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-10">
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

            {/* Services Sidebar */}
            <div className="bg-slate-50 dark:bg-slate-800/40 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 h-fit">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <FileSearch size={20} className="text-green-500" />
                Strategic Services
              </h3>
              <ul className="space-y-6">
                {services.map((service, i) => (
                  <li key={i} className="flex flex-col">
                    <strong className="text-slate-900 dark:text-slate-200 text-sm">
                      {service.title}
                    </strong>
                    <span className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      {service.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-20 text-center border-t border-slate-100 dark:border-slate-800 pt-12">
            <h4 className="text-slate-900 dark:text-white font-bold text-xl mb-6">Ready to secure your creative innovations?</h4>
            <Link
              to="/appointment"
              className="inline-block bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-full font-bold transition-all active:scale-95 shadow-xl shadow-green-600/20 uppercase tracking-widest text-sm"
            >
              Protect Your Assets
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default IP;
