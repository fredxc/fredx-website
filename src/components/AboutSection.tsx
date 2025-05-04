import { memo, useEffect, useState } from "react";
import { bottomFadeIn, fadeIn } from "../constants/animations";
import { motion, useScroll, useTransform } from "framer-motion";

interface AboutSectionProps {
  nextSectionRef: React.RefObject<HTMLDivElement>;
}

const AboutSection: React.FC<AboutSectionProps> = ({ nextSectionRef }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: isMounted ? nextSectionRef : undefined,
    offset: ["start end", "end start"],
  });

  const opacityConstant = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scaleConstant = useTransform(scrollYProgress, [0, 0.6], [1, 0.8]);
  const yConstant = useTransform(scrollYProgress, [0, 0.8], [0, 140]);

  return (
    <motion.section
      id="about"
      style={{
        scale: scaleConstant,
        translateY: yConstant,
        opacity: opacityConstant,
        willChange: "opacity, transform",
      }}
      className="relative mb-[-100svh] px-6 py-24"
    >
      <div className="sticky -top-16 h-svh">
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

        <div className="grid grid-cols-2 gap-8">
          <div className="sticky -top-8 h-fit overflow-hidden rounded-lg">
            <motion.img
              initial="hidden"
              variants={fadeIn}
              whileInView="visible"
              alt="Fred Xavier Portrait"
              src="/assets/my-portrait.jpg"
              viewport={{ once: true, amount: 0.3 }}
              className="h-auto w-full rounded-lg opacity-80"
            />
          </div>

          <div className="sticky top-1/4 h-fit text-xl font-medium text-primary-dark lg:top-1/3">
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
              I’m a frontend specialist and tech lead who loves bringing ideas
              to life through clean, scalable code. I build fast, intuitive, and
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
              experimenting in the kitchen. I love watching movies and series,
              and exploring new places with my wife! I’m also fascinated by
              psychology and human behavior, always trying to understand what
              makes people tick — both in life and in tech. 🚀
            </motion.p>
          </div>
        </div>
      </div>
      <div className="h-svh" />
    </motion.section>
  );
};

export default memo(AboutSection);
