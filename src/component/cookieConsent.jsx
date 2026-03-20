import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Cookie, X } from "lucide-react"; // Optional: npm install lucide-react
import { m, AnimatePresence } from "framer-motion"; // Optional: npm install framer-motion

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      // Small delay makes it feel less intrusive
      const timer = setTimeout(() => setShowBanner(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <m.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:max-w-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl rounded-2xl z-100 p-5"
        >
          <div className="flex items-start gap-4">
            <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg text-green-600 shrink-0">
              <Cookie size={20} />
            </div>
            
            <div className="flex-1">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">Cookie Preferences</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                We use cookies to enhance your experience and analyze our traffic. 
                Read our <Link to="/cookie-policy" className="text-green-600 hover:underline font-medium">Cookie Policy</Link> for details.
              </p>
              
              <div className="flex items-center gap-3 mt-4">
                <button
                  onClick={acceptCookies}
                  className="bg-slate-900 dark:bg-green-600 hover:bg-slate-800 dark:hover:bg-green-500 text-white text-xs px-6 py-2.5 rounded-lg font-bold transition-all active:scale-95 cursor-pointer"
                >
                  Accept All
                </button>
                <button
                  onClick={() => setShowBanner(false)}
                  className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-xs font-medium px-2 py-2 transition-colors"
                >
                  Essential Only
                </button>
              </div>
            </div>

            <button 
              onClick={() => setShowBanner(false)}
              className="text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
