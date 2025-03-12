import { motion } from "framer-motion";

interface CounterProps {
  count: number;
}

const Counter: React.FC<CounterProps> = ({ count }) => {
  return (
    <div className="flex h-fit items-start overflow-hidden font-sans text-9xl font-semibold leading-[0.8] text-light-cream/50">
      {/* Static 0 */}
      <span className="relative -mr-2">0</span>

      {/* Animated Number */}
      <div className="relative">
        <motion.div
          className="absolute flex h-full w-fit flex-col"
          animate={{ y: `calc(-${(count - 1) * 9.6}rem)` }}
          transition={{ type: "spring", stiffness: 50, damping: 12 }}
        >
          <span className="inline-block">1.</span>
          <span className="inline-block">2.</span>
          <span className="inline-block">3.</span>
          <span className="inline-block">4.</span>
        </motion.div>
      </div>
    </div>
  );
};

export default Counter;
