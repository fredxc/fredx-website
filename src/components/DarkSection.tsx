import { memo, useEffect } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import useThemeStore from "../hooks/useThemeStore";
import ProjectsSection from "./Projects/ProjectsSection";
import ExperienceSection from "./Experience/ExperienceSection";

interface DarkSectionProps {
  sectionRef: React.RefObject<HTMLDivElement>;
}

const DarkSection: React.FC<DarkSectionProps> = ({ sectionRef }) => {
  const { toggleTheme } = useThemeStore();
  const isInView = useInView(sectionRef, { margin: "-8% 0px -80% 0px" });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["end 100%", "end 0%"],
  });

  const scaledValue = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  useEffect(() => {
    toggleTheme();
  }, [isInView, toggleTheme]);

  return (
    <div className="rounded-t-3xl bg-light-cream">
      <motion.section
        ref={sectionRef}
        style={{ scale: scaledValue }}
        className="relative -mb-8 h-fit rounded-3xl bg-primary-dark"
      >
        <ExperienceSection />
        <ProjectsSection />
      </motion.section>
    </div>
  );
};

export default memo(DarkSection);
