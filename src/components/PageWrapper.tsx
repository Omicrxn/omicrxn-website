"use client"
import { AnimatePresence, motion } from "framer-motion";

export default function PageWrapper({
  children,
  shouldAnimate = true,
  className,
}: {
  children: React.ReactNode;
  shouldAnimate:boolean,
  className?: string;
}) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
