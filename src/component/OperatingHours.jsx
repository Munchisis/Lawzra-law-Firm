import { useState, useEffect } from "react";
import { Clock, CalendarX, MapPin, MessageSquare, Phone } from "lucide-react";
import { m, AnimatePresence } from "framer-motion";

const OperatingHours = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const checkStatus = () => {
      // Offset for WAT (UTC+1)
      const now = new Date();
      const watOffset = 1 * 60; // WAT is UTC+1
      const localTime = new Date(now.getTime() + (now.getTimezoneOffset() + watOffset) * 60000);
      
      const day = localTime.getDay(); // 0 is Sunday, 6 is Saturday
      const hour = localTime.getHours();
      
      // Open Monday (1) to Friday (5) from 8:00 (8) to 18:00 (18)
      const businessDay = day >= 1 && day <= 5;
      const businessHours = hour >= 8 && hour < 18;
      
      setIsOpen(businessDay && businessHours);
      setCurrentTime(localTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };

    checkStatus();
    const timer = setInterval(checkStatus, 60000); // Re-check every minute
    return () => clearInterval(timer);
  }, []);

  return (
    <m.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="p-8 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-2xl shadow-indigo-500/5 max-w-sm"
    >
      {/* Dynamic Status Header */}
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-xl font-serif font-bold text-slate-900 dark:text-white">Office Hours</h3>
        <AnimatePresence mode="wait">
          {isOpen ? (
            <m.span 
              key="open" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 px-3 py-1 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 text-[10px] font-black uppercase tracking-widest rounded-full border border-green-100 dark:border-green-800"
            >
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              Open Now
            </m.span>
          ) : (
            <m.span 
              key="closed" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 px-3 py-1 bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400 text-[10px] font-black uppercase tracking-widest rounded-full border border-rose-100 dark:border-rose-800"
            >
              <span className="w-1.5 h-1.5 bg-rose-500 rounded-full" />
              Closed
            </m.span>
          )}
        </AnimatePresence>
      </div>

      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <div className={`p-3 rounded-2xl transition-colors ${isOpen ? 'bg-indigo-50 text-indigo-600' : 'bg-slate-50 dark:bg-slate-800 text-slate-400'}`}>
            <Clock size={20} />
          </div>
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Monday – Friday</p>
            <p className="text-slate-800 dark:text-slate-200 font-bold">08:00 – 18:00 <span className="text-[10px] font-normal opacity-50 ml-1">WAT</span></p>
          </div>
        </div>

        <div className="flex items-center gap-4 opacity-50">
          <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-2xl text-slate-400">
            <CalendarX size={20} />
          </div>
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Saturday & Sunday</p>
            <p className="text-slate-500 dark:text-slate-400 font-bold tracking-tight">Closed</p>
          </div>
        </div>
      </div>

      {/* Interactive Action Area */}
      <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800">
        <AnimatePresence>
          {isOpen ? (
            <m.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-3">
              <button className="w-full flex items-center justify-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-4 rounded-2xl font-bold text-sm hover:scale-[1.02] transition-transform shadow-lg shadow-slate-200">
                <MessageSquare size={16} /> Live Legal Chat
              </button>
              <p className="text-center text-[10px] text-slate-400">Average response: 15 mins</p>
            </m.div>
          ) : (
            <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-dashed border-slate-200 dark:border-slate-700">
              <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed text-center italic">
                Our office is currently closed. Please use our <span className="text-indigo-600 font-bold">Appointment Form</span> to schedule a callback for the next business day.
              </p>
            </m.div>
          )}
        </AnimatePresence>
      </div>
    </m.div>
  );
};

export default OperatingHours;
