import { m, AnimatePresence } from "framer-motion";
import { MessageCircle, Info, Moon, Sun, Calendar } from "lucide-react";
import { useState, useEffect } from "react";

const WhatsAppButton = () => {
  const [tipIndex, setTipIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  // New State: Check if the user has clicked the button before
  const [hasInteracted, setHasInteracted] = useState(true);

  useEffect(() => {
    // Check localStorage on mount
    const interacted = localStorage.getItem("wa_interacted");
    if (!interacted) setHasInteracted(false);
  }, []);

  const handleInteraction = () => {
    localStorage.setItem("wa_interacted", "true");
    setHasInteracted(true);
  };

  // 1. Timezone & Business Logic (Africa/Lagos)
  const now = new Date();
  const watDate = new Date(now.toLocaleString("en-US", { timeZone: "Africa/Lagos" }));
  const currentHour = watDate.getHours();
  const currentDay = watDate.getDay(); 

  const isWeekend = currentDay === 0 || currentDay === 6;
  const isBusinessHours = currentHour >= 8 && currentHour < 18 && !isWeekend;

  // 2. Scroll Logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 10) setIsVisible(true);
      else if (currentScrollY > lastScrollY && currentScrollY > 100) setIsVisible(false);
      else if (currentScrollY < lastScrollY) setIsVisible(true);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // 3. Tooltip Rotation
  useEffect(() => {
    const interval = setInterval(() => setTipIndex((prev) => (prev === 0 ? 1 : 0)), 4500);
    return () => clearInterval(interval);
  }, []);

  // 4. Dynamic Content
  const phoneNumber = "2348037333930";
  const getStatusConfig = () => {
    if (isBusinessHours) return { label: "Counsel Online", icon: <Sun size={12} className="text-yellow-500" />, color: "bg-white/90 text-slate-800", message: "Hello Lawzra LP, I'd like to book a consultation." };
    const isLateWeekend = currentDay === 0 || currentDay === 6;
    return { label: isLateWeekend ? "Responds Mon 8 AM" : "Responds at 8 AM", icon: isLateWeekend ? <Calendar size={12} /> : <Moon size={12} />, color: "bg-slate-100 text-slate-600", message: `Hello Lawzra LP, I'm reaching out ${isWeekend ? "over the weekend" : "after hours"} to inquire about your fees.` };
  };

  const status = getStatusConfig();

  return (
    <m.div 
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: isVisible ? 0 : 100, opacity: isVisible ? 1 : 0 }}
      className="fixed bottom-6 right-4 z-50 flex items-center gap-3 md:bottom-10 md:right-10 pb-[env(safe-area-inset-bottom)]"
    >
      {/* Tooltips */}
      <div className="hidden sm:flex items-center">
        <AnimatePresence mode="wait">
          <m.div 
            key={tipIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            className={`flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-[10px] font-bold uppercase tracking-widest shadow-2xl backdrop-blur-md dark:border-slate-700 dark:bg-slate-900 ${tipIndex === 0 ? status.color : "bg-indigo-600 text-white border-indigo-500"}`}
          >
            {tipIndex === 0 ? <>{status.icon} {status.label}</> : <><Info size={12} /> Consultation Fees Apply</>}
          </m.div>
        </AnimatePresence>
      </div>

      {/* Main WhatsApp Button */}
      <m.a 
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(status.message)}`}
        target="_blank" 
        rel="noopener noreferrer" 
        onClick={handleInteraction}
        whileHover={{ scale: 1.1 }} 
        whileTap={{ scale: 0.9 }} 
        className={`relative flex h-14 w-14 items-center justify-center rounded-full shadow-2xl transition-colors duration-700 ${isBusinessHours ? "bg-[#25D366]" : "bg-slate-700"}`}
      >
        {/* Pulsing Aura */}
        {isBusinessHours && (
          <m.span animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0, 0.4] }} transition={{ duration: 2, repeat: Infinity }} className="absolute inset-0 rounded-full bg-[#25D366]" />
        )}

        {/* Notification Badge */}
        {!hasInteracted && (
          <m.span 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white ring-4 ring-white dark:ring-slate-900"
          >
            1
          </m.span>
        )}
        
        <MessageCircle size={28} fill="white" className="relative z-10 text-white" />
      </m.a>
    </m.div>
  );
};

export default WhatsAppButton;
