import React from "react";
import { motion } from "framer-motion";
import { scaleIn } from "../constants/animations";

interface AnimatedBackgroundProps {
  imageUrl: string;
}

export const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({
  imageUrl,
}) => {
  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      animate={["visible", "backgroundSize"]}
      style={{ backgroundImage: `url(${imageUrl})` }}
      className="absolute z-0 h-4/6 w-1/2 self-center rounded-xl bg-center"
    />
  );
};
