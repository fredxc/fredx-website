import { Variants } from "framer-motion";

const fixedDelay = 0.7;

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1.5, ease: "easeOut", delay: fixedDelay + 0.5 },
  },
};

export const pullUp: Variants = {
  initial: { height: 0 },
  animate: (custom: number) => ({
    height: "15rem",
    transition: {
      duration: 1,
      ease: "easeOut",
      bounce: 1,
      delay: fixedDelay + custom,
    },
  }),
};

export const navAnimation: Variants = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: "easeOut",
      delay: fixedDelay + 0.5,
    },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, backgroundSize: "300%", scale: 1.5 },
  visible: {
    scale: 1,
    opacity: 0.2,
    transition: { duration: 1.6, ease: "easeOut" },
  },
  backgroundSize: {
    backgroundSize: "200%",
    transition: { duration: 2.0, ease: "easeOut" },
  },
};

export const scrollIndicator: Variants = {
  initial: { width: 0 },
  animate: () => ({
    width: ["0%", "100%"],
    left: ["0%", "0%", "110%"],
    transition: {
      duration: 1.7,
      repeat: Infinity,
      ease: "easeInOut",
      delay: fixedDelay + 0.5,
    },
  }),
};
