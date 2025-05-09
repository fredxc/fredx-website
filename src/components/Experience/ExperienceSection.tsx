import Timeline from "./Timeline";
import { motion } from "framer-motion";
import { bottomFadeIn } from "../../constants/animations";

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="pt-12 md:pt-24">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        variants={bottomFadeIn}
        viewport={{ once: true, amount: 0.8 }}
        className="mb-8 flex items-center justify-center text-center text-[2.75rem] font-bold text-light-cream/90 md:mb-16 md:text-6xl md:font-semibold lg:text-7xl"
      >
        <span className="mr-4 text-2xl md:text-4xl">⯋</span>EXPERIENCE
        <span className="ml-4 text-2xl md:text-4xl">⯋</span>
      </motion.h2>
      <Timeline />
    </section>
  );
};

export default ExperienceSection;
