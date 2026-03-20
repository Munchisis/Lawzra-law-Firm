import { ReactLenis } from 'lenis/react';

function SmoothScroll({ children }) {
  return (
    <ReactLenis root options={{ 
      lerp: 0.1,      // Handled between 0 and 1 (lower = smoother/slower)
      duration: 1.5,  // Duration of the scroll animation
      smoothWheel: true 
    }}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScroll;
