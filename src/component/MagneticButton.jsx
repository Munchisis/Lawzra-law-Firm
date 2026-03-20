import { useState, useRef } from "react";
import { m } from "framer-motion";

const MagneticButton = ({ children, strength = 0.3 }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    
    // Calculate the center of the button
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    // Calculate distance from mouse to center
    const x = (clientX - centerX) * strength;
    const y = (clientY - centerY) * strength;

    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 }); // Snap back to center
  };

  return (
    <m.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="inline-block"
    >
      {children}
    </m.div>
  );
};

export default MagneticButton;
