import { memo, useEffect } from "react";
import { useInView } from "framer-motion";
import ProjectsSection from "./ProjectsSection";
import useThemeStore from "../hooks/useThemeStore";
import ExperienceSection from "./Experience/ExperienceSection";

interface DarkSectionProps {
  sectionRef: React.RefObject<HTMLDivElement>;
}

const DarkSection: React.FC<DarkSectionProps> = ({ sectionRef }) => {
  const { toggleTheme } = useThemeStore();
  const isInView = useInView(sectionRef, { margin: "-18% 0px -72% 0px" });

  useEffect(() => {
    toggleTheme();
  }, [isInView, toggleTheme]);

  return (
    <section
      ref={sectionRef}
      className="relative -mb-8 h-fit rounded-3xl bg-primary-dark"
    >
      <ExperienceSection />
      <ProjectsSection />
    </section>
  );
};

export default memo(DarkSection);
