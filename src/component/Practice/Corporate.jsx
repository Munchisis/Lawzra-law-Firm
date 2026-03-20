import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { MoveLeft, Building2, Handshake, Scale, Gavel, CheckCircle2 } from "lucide-react";

const Corporate = () => {
  const expertise = [
    {
      title: "Company Secretarial",
      desc: "Comprehensive board support and statutory compliance management.",
      icon: <Building2 size={18} className="text-green-500" />,
    },
    {
      title: "Mergers & Acquisitions",
      desc: "Strategic guidance through due diligence, valuations, and deal closures.",
      icon: <Handshake size={18} className="text-green-500" />,
    },
    {
      title: "Corporate Governance",
      desc: "Structuring internal policies to align with global best practices.",
      icon: <Scale size={18} className="text-green-500" />,
    },
    {
      title: "Commercial Litigation",
      desc: "Robust representation in complex business and shareholder disputes.",
      icon: <Gavel size={18} className="text-green-500" />,
    },
  ];

  const services = [
    { title: "Entity Formation", desc: "Setting up LLCs, NGOs, and foreign subsidiaries." },
    { title: "Contract Lifecycle", desc: "Drafting, reviewing, and managing vendor/client agreements." },
    { title: "Joint Ventures", desc: "Negotiating partnerships and shared equity structures." },
    { title: "Regulatory Filings", desc: "Handling all CAC, SEC, and industry-specific mandates." },
  ];

  return (
    <>
      {/* Header Hero */}
      <div
        className="relative px-4 bg-no-repeat bg-cover pt-40 pb-24 overflow-hidden"
        style={{ backgroundImage: `url(${assets.corporate || assets.aboutUs4})` }}
      >
        <div className="absolute inset-0 bg-black/75"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4 text-white font-serif uppercase tracking-tight">
            Corporate
          </h1>
          <div className="h-1 w-20 bg-green-500 mx-auto mb-6"></div>
          <p className="text-center max-w-2xl mx-auto text-slate-200 text-lg md:text-xl font-light">
            Providing high-stakes legal solutions for the modern corporate landscape.
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

          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Corporate & Commercial
          </h2>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-12 leading-relaxed max-w-4xl">
            We act as strategic partners to businesses of all sizes, offering 
            sophisticated legal counsel that balances commercial objectives 
            with rigorous risk management.
          </p>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Expertise Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-8">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white uppercase tracking-widest">
                  Core Expertise
                </h3>
                <div className="flex-1 h-px bg-slate-100 dark:bg-slate-800"></div>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-8">
                {expertise.map((item, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="mt-1 p-2 bg-green-50 dark:bg-green-900/20 rounded-lg group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-slate-100">{item.title}</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Services Sidebar */}
            <div className="bg-slate-50 dark:bg-slate-800/40 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 h-fit">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                Our Services
              </h3>
              <ul className="space-y-5">
                {services.map((service, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <CheckCircle2 size={18} className="text-green-500 mt-0.5 shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-400">
                      <strong className="text-slate-900 dark:text-slate-200">{service.title}:</strong> {service.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-20 text-center border-t border-slate-100 dark:border-slate-800 pt-12">
            <Link 
              to="/appointment" 
              className="inline-block bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-full font-bold transition-all active:scale-95 shadow-xl shadow-green-600/20 uppercase tracking-widest text-sm"
            >
              Elevate Your Business
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Corporate;
