import { useRef } from "react";
import { motion } from "framer-motion";
import { bottomFadeIn, fadeIn } from "../constants/animations";

const AboutSection: React.FC = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative mx-auto max-w-7xl px-6 py-24"
    >
      <motion.h2
        initial="hidden"
        whileInView="visible"
        variants={bottomFadeIn}
        viewport={{ once: true, amount: 0.8 }}
        className="mb-16 flex items-center justify-center text-6xl font-semibold text-primary-dark/75 md:text-7xl"
      >
        <span className="mr-4 text-4xl">⯋</span>ABOUT ME
        <span className="ml-4 text-4xl">⯋</span>
      </motion.h2>

      <div className="relative grid grid-cols-2 gap-8">
        <div className="relative">
          <motion.img
            ref={imageRef}
            initial="hidden"
            variants={fadeIn}
            whileInView="visible"
            alt="Fred Xavier Portrait"
            src="/assets/my-portrait.jpg"
            viewport={{ once: true, amount: 0.3 }}
            className="h-auto w-full rounded-lg opacity-80"
          />
        </div>

        <div className="sticky top-1/3 h-fit text-xl font-medium text-primary-dark">
          <motion.h3
            initial="hidden"
            whileInView="visible"
            variants={bottomFadeIn}
            viewport={{ once: true, amount: 0.4 }}
            className="mb-6 text-5xl font-bold"
          >
            A brief intro, who am I?
          </motion.h3>
          <motion.p
            initial="hidden"
            whileInView="visible"
            variants={bottomFadeIn}
            viewport={{ once: true, amount: 0.6 }}
            className="mb-4"
          >
            I’m a frontend specialist and tech lead who loves bringing ideas to
            life through clean, scalable code. I build fast, intuitive, and
            engaging experiences using React, TypeScript, and modern web
            technologies. Creating seamless interactions that feel natural is
            what excites me the most.
          </motion.p>
          <motion.p
            initial="hidden"
            whileInView="visible"
            variants={bottomFadeIn}
            viewport={{ once: true, amount: 0.8 }}
          >
            When I’m not coding, I’m probably playing the guitar, singing, or
            experimenting in the kitchen. I love watching movies and series, and
            exploring new places with my wife! I’m also fascinated by psychology
            and human behavior, always trying to understand what makes people
            tick — both in life and in tech. 🚀
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
