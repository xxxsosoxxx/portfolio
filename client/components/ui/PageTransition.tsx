import { motion } from "framer-motion";
import { useNavigationDirection } from "@/hooks/useNavigationDirection";
import { useNavigationHistory } from "@/hooks/useNavigationHistory";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const direction = useNavigationDirection();

  const variants = {
    initial: {
      opacity: 0,
      x: direction === "forward" ? 100 : -100,
      scale: 0.95,
      transition: {
        type: "spring" as const,
        stiffness: 80,
        damping: 15,
        mass: 0.8
      }
    },
    animate: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 80,
        damping: 15,
        mass: 0.8,
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      x: direction === "forward" ? -100 : 100,
      scale: 0.95,
      transition: {
        type: "spring" as const,
        stiffness: 80,
        damping: 15,
        mass: 0.8
      }
    },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      className="min-h-screen"
    >
      {children}
    </motion.div>
  );
}





