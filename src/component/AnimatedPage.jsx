import { m } from "framer-motion";

const AnimatedPage = ({ children }) => {
  // Define the animation styles
  const animations = {
    initial: { opacity: 0, y: 15 }, // Start slightly lower and invisible
    animate: { opacity: 1, y: 0 },  // Slide up to position and fade in
    exit: { opacity: 0, y: -15 },   // Slide further up and fade out on leave
  };

  return (
    <m.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ 
        duration: 0.5, 
        ease: [0.22, 1, 0.36, 1] // Custom "cubic-bezier" for a premium feel
      }}
    >
      {children}
    </m.div>
  );
};

export default AnimatedPage;
