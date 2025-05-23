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
    <section
      id="about"
      className="relative mb-[-80svh] px-6 py-24 md:mb-[-100svh]"
    >
      <motion.div
        style={{
          scale: scaleConstant,
          translateY: yConstant,
          opacity: opacityConstant,
          willChange: "opacity, transform",
        }}
      >
        <div className="sticky -top-[50svh] h-[120svh] md:-top-16 md:h-svh">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={bottomFadeIn}
            viewport={{ once: true, amount: 0.8 }}
            className="mb-8 flex items-center justify-center text-center text-[2.75rem] font-bold leading-none text-primary-dark/75 md:mb-16 md:text-6xl md:font-semibold lg:text-7xl"
          >
            <span className="mr-4 text-2xl md:text-4xl">⯋</span>ABOUT ME
            <span className="ml-4 text-2xl md:text-4xl">⯋</span>
          </motion.h2>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="h-80 overflow-hidden rounded-lg md:sticky md:-top-8 md:h-fit">
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
                className="mb-6 text-3xl font-bold md:text-5xl"
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
                to life through clean, scalable code. I build fast, intuitive,
                and engaging experiences using React, TypeScript, and modern web
                technologies. Creating seamless interactions that feel natural
                is what excites me the most.
              </motion.p>
              <motion.p
                initial="hidden"
                whileInView="visible"
                variants={bottomFadeIn}
                viewport={{ once: true, amount: 0.8 }}
              >
                When I’m not coding, I’m probably playing the guitar, singing,
                or experimenting in the kitchen. I love watching movies and
                series, and exploring new places with my wife! I’m also
                fascinated by psychology and human behavior, always trying to
                understand what makes people tick — both in life and in tech. 🚀
              </motion.p>
            </div>
          </div>
        </div>
        <div className="h-svh" />
      </motion.div>
    </section>
  );
};

export default memo(AboutSection);
