import { memo } from "react";
import { motion } from "framer-motion";
import { pullUp } from "../constants/animations";

interface HeroTextProps {
  text: string;
}

const HeroText: React.FC<HeroTextProps> = ({ text }) => {
  return (
    <div className="relative z-10 mt-8 text-center">
      {[0.5, 0.8, 1.1].map((delay, index) => (
        <div className="flex h-48 items-end overflow-hidden">
          <motion.h1
            key={index}
            custom={delay}
            variants={pullUp}
            initial="initial"
            animate="animate"
            className={`overflow-hidden font-heading text-8xl font-bold ${
              index === 1 ? "hero-text-outline" : "text-primary-dark"
            }`}
          >
            {text}
          </motion.h1>
        </div>
      ))}
    </div>
  );
};

export default memo(HeroText);
