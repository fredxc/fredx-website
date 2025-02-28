import Timeline from "./Timeline";
import { useEffect } from "react";
import { motion, useInView } from "framer-motion";
import useThemeStore from "../hooks/useThemeStore";
import { bottomFadeIn } from "../constants/animations";

interface ExperienceSectionProps {
  sectionRef: React.RefObject<HTMLDivElement>;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  sectionRef,
}) => {
  const { toggleTheme } = useThemeStore();
  const isInView = useInView(sectionRef, { margin: "0px 0px -90% 0px" });

  useEffect(() => {
    toggleTheme();
  }, [isInView, toggleTheme]);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="rounded-t-3xl bg-primary-dark py-24"
    >
      <motion.h2
        initial="hidden"
        whileInView="visible"
        variants={bottomFadeIn}
        viewport={{ once: true, amount: 0.8 }}
        className="mb-16 flex items-center justify-center text-6xl font-semibold text-light-cream md:text-7xl"
      >
        <span className="mr-4 text-4xl">⯋</span>EXPERIENCE
        <span className="ml-4 text-4xl">⯋</span>
      </motion.h2>
      <Timeline />
    </section>
  );
};

export default ExperienceSection;
