import { memo } from "react";
import { motion } from "framer-motion";
import { scaleIn } from "../../constants/animations";

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
    className="absolute z-0 h-1/2 w-3/4 self-center rounded-xl bg-center lg:h-4/6 xl:w-1/2"
  />
);

export default memo(AnimatedBackground);
