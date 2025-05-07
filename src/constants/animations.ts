import { Variants } from "framer-motion";

const GLOBAL_DELAY = 0.9;

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (custom: number) => ({
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: "easeOut",
      delay: custom && GLOBAL_DELAY + custom,
    },
  }),
};

export const bottomFadeIn: Variants = {
  hidden: { opacity: 0, y: 75 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export const sideFadeIn: Variants = {
  hidden: (custom: number) => {
    const isMobile = window.innerWidth < 768;
    return { opacity: 0, x: isMobile ? 50 : custom % 2 === 0 ? -50 : 50 };
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export const pullUp: Variants = {
  initial: { height: 0 },
  animate: (custom: number) => {
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth < 1024;
    const isLaptop = window.innerWidth < 1200;
    return {
      height: isMobile
        ? "6rem"
        : isTablet
          ? "8rem"
          : isLaptop
            ? "12rem"
            : "15rem",
      transition: {
        bounce: 0.4,
        duration: 1,
        ease: "easeOut",
        delay: GLOBAL_DELAY + custom,
      },
    };
  },
};

export const navAnimation: Variants = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: "easeOut",
      delay: GLOBAL_DELAY + 0.5,
    },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, backgroundSize: "175%", scale: 1.3 },
  visible: {
    opacity: 0.3,
    transition: { duration: 1, ease: "easeInOut" },
  },
  backgroundSize: {
    scale: 1,
    backgroundSize: "auto 100%",
    transition: { duration: 2, ease: "easeInOut" },
  },
};

export const scrollIndicator: Variants = {
  initial: { width: 0 },
  animate: {
    width: ["0%", "100%"],
    left: ["0%", "0%", "110%"],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
      repeatType: "loop",
      delay: GLOBAL_DELAY + 0.5,
    },
  },
};
