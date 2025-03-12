import Timeline from "./Timeline";
import { motion } from "framer-motion";
import { bottomFadeIn } from "../../constants/animations";

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="pt-24">
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
