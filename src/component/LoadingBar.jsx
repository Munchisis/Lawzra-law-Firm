import { m, AnimatePresence } from "framer-motion"; // Changed to framer-motion for consistency
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const LoadingBar = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Start the bar
    setIsVisible(true);
    
    // Complete and hide after a short delay
    const timer = setTimeout(() => setIsVisible(false), 700);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className="fixed top-0 left-0 w-full z-9999 pointer-events-none">
      <AnimatePresence>
        {isVisible && (
          <m.div
            initial={{ width: "0%", opacity: 1 }}
            animate={{ width: "100%" }}
            exit={{ opacity: 0, transition: { duration: 0.4 } }}
            transition={{ 
              duration: 0.8, 
              ease: [0.16, 1, 0.3, 1] // Custom "Expo" ease for a snappy feel
            }}
            className="h-0.75 bg-linear-to-r from-transparent via-rose-500 to-rose-600 shadow-[0_0_15px_rgba(244,63,94,0.5)]"
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default LoadingBar;
