import React from "react";
import { motion } from "framer-motion";
import { navAnimation } from "../constants/animations";

export const Navbar: React.FC = () => {
  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navAnimation}
      className="fixed left-0 right-0 top-0 z-50 bg-transparent"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-8 md:px-16 xl:px-2">
        <a href="/" className="flex items-center gap-2 text-primary-dark">
          <img src="/assets/logo.png" alt="Logo" className="w-8" />
        </a>

        <ul className="flex items-center gap-8 font-semibold text-primary-dark/80">
          <li className="transition-colors duration-200 hover:text-primary-dark">
            <a href="#about">about</a>
          </li>
          <li className="transition-colors duration-200 hover:text-primary-dark">
            <a href="#experience">experience</a>
          </li>
          <li className="transition-colors duration-200 hover:text-primary-dark">
            <a href="#projects">projects</a>
          </li>
          <li>
            <a
              href="#contact"
              className="rounded-full bg-primary-dark px-6 py-2 font-semibold text-light-cream transition-colors duration-200 hover:bg-soft-green"
            >
              Let's Talk
            </a>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
};
