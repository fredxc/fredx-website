import { memo } from "react";
import { motion } from "framer-motion";
import { pullUp } from "../../constants/animations";

interface HeroTextProps {
  text: string;
}

const HeroText: React.FC<HeroTextProps> = ({ text }) => {
  return (
    <div className="relative z-10 text-center lg:mt-8">
      {[0.5, 0.8, 1.1].map((delay, index) => (
        <div
          key={index}
          className="flex h-24 items-end overflow-hidden md:h-32 lg:h-40 xl:h-48"
        >
          <motion.h1
            key={index}
            custom={delay}
            variants={pullUp}
            initial="initial"
            animate="animate"
            className={`overflow-hidden text-[3.5rem] font-bold leading-normal md:text-7xl lg:text-[8rem] xl:text-8xl ${
              index === 1 && "hero-text-outline"
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
