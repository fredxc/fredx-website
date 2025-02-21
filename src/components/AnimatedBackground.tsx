import { memo } from "react";
import { motion } from "framer-motion";
import { scaleIn } from "../constants/animations";

interface AnimatedBackgroundProps {
  imageUrl: string;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({
  imageUrl,
}) => (
  <motion.div
    initial="hidden"
    variants={scaleIn}
    animate={["visible", "backgroundSize"]}
    style={{ backgroundImage: `url(${imageUrl})` }}
    className="absolute z-0 h-4/6 w-1/2 self-center rounded-xl bg-cover bg-center"
  />
);

export default memo(AnimatedBackground);
