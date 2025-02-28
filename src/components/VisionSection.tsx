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
      className="flex h-screen items-center justify-center px-6"
    >
      <motion.h2
        initial="hidden"
        whileInView="visible"
        variants={bottomFadeIn}
        viewport={{ once: true, amount: 0.8 }}
        className="text-7xl font-medium leading-tight tracking-tight text-light-cream/90"
      >
        I bring ideas to life through development and design, turning visions
        into reality.
      </motion.h2>
    </section>
  );
};

export default memo(VisionSection);
