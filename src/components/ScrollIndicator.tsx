import { memo } from "react";
import { motion } from "framer-motion";
import { fadeIn, scrollIndicator } from "../constants/animations";

const ScrollIndicator: React.FC = () => (
  <motion.div
    initial="hidden"
    animate="visible"
    variants={fadeIn}
    className="absolute bottom-16 right-0 flex w-24 rotate-90 items-center gap-4 overflow-hidden text-primary-dark"
  >
    <span className="font-bold">scroll</span>
    <div className="relative flex w-20 items-center">
      <motion.div
        initial="initial"
        animate="animate"
        variants={scrollIndicator}
        className="absolute h-0.5 w-full rounded-full bg-primary-dark"
      />
    </div>
  </motion.div>
);

export default memo(ScrollIndicator);
