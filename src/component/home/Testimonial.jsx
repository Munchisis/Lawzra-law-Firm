import { m } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

// 1. Ensure these paths match your file structure exactly
import profile from "../../assets/img/profile.png";
import profile1 from "../../assets/img/profile1.png";
import profile2 from "../../assets/img/profile2.png";
import profile3 from "../../assets/img/profile3.png";

const cardsData = [
  {
    image: profile,
    name: "Kelechi Imo",
    handle: "@meetImo",
    testimonial:
      "Lawzra's legal expertise and personalized service helped us navigate complex challenges with confidence.",
  },
  {
    image: profile1,
    name: "Ochulo Okoro",
    handle: "@OkoroTalks",
    testimonial:
      "The team at Lawzra provided exceptional legal support, guiding us through every step of our case with care.",
  },
  {
    image: profile2,
    name: "Olawale Adeyemi",
    handle: "@OlawaleWrites",
    testimonial:
      "Their strategic approach and attention to detail made all the difference in achieving a favorable outcome.",
  },
  {
    image: profile3,
    name: "Avery Enigwe",
    handle: "@AveryEnigwe",
    testimonial:
      "Professionalism and excellence define Lawzra. I highly recommend them for corporate litigation.",
  },
];

const CreateCard = ({ card }) => (
  <div className="p-6 rounded-2xl mx-4 shadow-md bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-all duration-300 w-80 shrink-0 flex flex-col justify-between">
    <div>
      <div className="flex gap-3">
        <img
          className="size-12 rounded-full object-cover ring-2 ring-rose-500/20"
          src={card.image}
          alt={card.name}
        />
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <p className="font-bold text-slate-900 dark:text-white">
              {card.name}
            </p>
            <CheckCircle2 className="h-4 w-4 text-blue-500 fill-blue-500/10" />
          </div>
          <span className="text-xs text-slate-500 dark:text-slate-400">
            {card.handle}
          </span>
        </div>
      </div>
      <p className="text-sm mt-4 text-slate-600 dark:text-slate-300 italic leading-relaxed">
        "{card.testimonial}"
      </p>
    </div>

    <div className="flex gap-1 mt-4">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="text-amber-400 text-lg">
          ★
        </span>
      ))}
    </div>
  </div>
);

const Testimonial = () => {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors overflow-hidden">
      {/* Animated Header */}
      <m.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="px-6 text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
          What Our Clients Say
        </h2>
        <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-2xl mx-auto">
          Hear from our satisfied clients who have experienced the difference
          with Lawzra Lawfirm.
        </p>
      </m.div>

      {/* Animated Marquee Container */}
      <m.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="relative w-full overflow-hidden"
      >
        {/* Tailwind v4 Linear Gradients for Side Blurs */}
        <div className="absolute left-0 top-0 h-full w-20 md:w-40 z-20 pointer-events-none bg-linear-to-r from-slate-50 to-transparent dark:from-slate-900"></div>
        <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-20 pointer-events-none bg-linear-to-l from-slate-50 to-transparent dark:from-slate-900"></div>

        <div className="flex animate-marquee-scroll hover:[animation-play-state:paused] py-4">
          {/* Triple the data for a perfect seamless loop on all screen sizes */}
          {[...cardsData, ...cardsData, ...cardsData].map((card, index) => (
            <CreateCard key={index} card={card} />
          ))}
        </div>
      </m.div>

      {/* Marquee Keyframes */}
      <style>{`
            @keyframes marqueeScroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(-33.33%); }
            }

            .animate-marquee-scroll {
                animation: marqueeScroll 45s linear infinite;
                display: flex;
                width: max-content;
            }
        `}</style>
    </section>
  );
};

export default Testimonial;
