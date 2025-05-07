import { useRef, useEffect, memo } from "react";
import { motion, useInView } from "framer-motion";
import useThemeStore from "../hooks/useThemeStore";
import { bottomFadeIn } from "../constants/animations";

const VisionSection: React.FC = () => {
  const sectionRef = useRef(null);
  const { toggleTheme } = useThemeStore();
  const isInView = useInView(sectionRef, { amount: 0.5 });

  useEffect(() => {
    toggleTheme();
  }, [isInView, toggleTheme]);

  return (
    <section
      ref={sectionRef}
      id="vision-section"
      className="flex items-center justify-center px-6 py-16 md:h-screen"
    >
      <motion.h2
        initial="hidden"
        whileInView="visible"
        variants={bottomFadeIn}
        viewport={{ once: true, amount: 0.8 }}
        className="text-[3.5rem] font-medium leading-tight tracking-tight text-light-cream/90 md:text-6xl lg:text-[5rem] xl:text-7xl"
      >
        I bring ideas to life through development and design, turning visions
        into reality.
      </motion.h2>
    </section>
  );
};

export default memo(VisionSection);
