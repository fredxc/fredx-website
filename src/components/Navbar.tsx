import { memo } from "react";
import { motion } from "framer-motion";
import useThemeStore from "../hooks/useThemeStore";
import { navAnimation } from "../constants/animations";

const Navbar: React.FC = () => {
  const { theme } = useThemeStore();
  const darkTheme = theme === "dark";

  const navBg = darkTheme ? "bg-primary-dark" : "bg-light-cream";
  const textColor = darkTheme ? "text-light-cream" : "text-primary-dark";
  const textColorMuted = darkTheme
    ? "text-light-cream/80"
    : "text-primary-dark/80";
  const hoverColor = darkTheme ? "hover:text-white" : "hover:text-primary-dark";
  const buttonBg = darkTheme
    ? "bg-light-cream text-primary-dark"
    : "bg-primary-dark text-light-cream";

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navAnimation}
      className={`fixed left-0 right-0 top-0 z-50 overflow-x-hidden transition-colors duration-700 ${navBg}`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-8 md:px-12 lg:px-16 xl:px-2">
        {/* Logo */}
        <a href="#" className={`flex items-center gap-2 ${textColor}`}>
          <img
            src={darkTheme ? "/assets/logo-light.png" : "/assets/logo.png"}
            alt="Logo"
            className="w-6 md:w-8"
          />
        </a>

        {/* Navigation Links */}
        <ul
          className={`flex items-center gap-8 text-lg font-semibold transition-colors duration-300 ${textColorMuted}`}
        >
          {/* Hide these links on mobile */}
          <li
            className={`transition-colors duration-200 ${hoverColor} hidden sm:block`}
          >
            <a href="#about">about</a>
          </li>
          <li
            className={`transition-colors duration-200 ${hoverColor} hidden sm:block`}
          >
            <a href="#experience">experience</a>
          </li>
          <li
            className={`transition-colors duration-200 ${hoverColor} hidden sm:block`}
          >
            <a href="#projects">projects</a>
          </li>

          {/* CTA Button - always visible */}
          <li className="block w-full sm:w-auto">
            <a
              href="#contact"
              className={`rounded-full px-6 py-1 font-semibold transition-colors duration-200 hover:bg-soft-green md:py-2 ${buttonBg} block text-center`}
            >
              Let's Talk
            </a>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default memo(Navbar);
