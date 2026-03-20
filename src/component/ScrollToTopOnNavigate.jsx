import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTopOnNavigate = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instantly jump to the top left of the window
    window.scrollTo(0, 0);
  }, [pathname]); // Fires every time the path changes

  return null;
};

export default ScrollToTopOnNavigate;
