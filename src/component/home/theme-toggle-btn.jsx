import { Moon, SunIcon } from "lucide-react";
import { useEffect, useState } from "react";

const ThemeToggleBtn = ({ theme, setTheme }) => {
  const [isFixed, setIsFixed] = useState(false);

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 48);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Set initial theme (ONLY once)
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const preferredTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme(preferredTheme ? "dark" : "light");
    }
  }, [setTheme]);

  // Apply theme to document
  useEffect(() => {
    if (!theme) return;

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={`p-2 rounded-full transition-all border duration-300 cursor-pointer
        ${!isFixed 
          ? "text-dark-text dark:hover:text-light-text hover:border-highlight hover:text-highlight" 
          : "text-dark-text hover:text-primary-dark hover:border-primary-dark border border-gray-400 dark:border-gray-800 dark:hover:border-highlight dark:hover:text-gray-300"}
        `}
    >
      {theme === "dark" ? <Moon size={18} /> : <SunIcon size={18} />}
    </button>
  );
};

export default ThemeToggleBtn;