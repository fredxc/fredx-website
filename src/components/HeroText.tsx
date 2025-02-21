import React from "react";
import { motion } from "framer-motion";
import { pullUp } from "../constants/animations";

interface HeroTextProps {
  text: string;
  subtitle?: string;
}

export const HeroText: React.FC<HeroTextProps> = ({ text, subtitle }) => {
  return (
    <div className="relative z-10 text-center">
      <div className="flex h-44 items-end overflow-hidden">
        <motion.h1
          custom={0.5}
          variants={pullUp}
          initial="initial"
          animate="animate"
          className="overflow-hidden font-heading text-8xl font-bold text-primary-dark"
        >
          {text}
        </motion.h1>
      </div>

      <div className="flex h-44 items-end overflow-hidden">
        <motion.h1
          custom={0.7}
          variants={pullUp}
          initial="initial"
          animate="animate"
          className="hero-text-outline overflow-hidden font-heading text-8xl font-bold"
        >
          {text}
        </motion.h1>
      </div>

      <div className="flex h-44 items-end overflow-hidden">
        <motion.h1
          custom={1.1}
          variants={pullUp}
          initial="initial"
          animate="animate"
          className="overflow-hidden font-heading text-8xl font-bold text-primary-dark"
        >
          {text}
        </motion.h1>
      </div>

      {subtitle && (
        <motion.p
          custom={1.2}
          variants={pullUp}
          initial="hidden"
          animate="visible"
          className="mt-8 text-2xl text-primary-dark/80"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
