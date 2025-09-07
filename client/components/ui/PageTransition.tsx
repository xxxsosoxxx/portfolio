import { motion } from "framer-motion";
import { useNavigationDirection } from "@/hooks/useNavigationDirection";
import { useNavigationHistory } from "@/hooks/useNavigationHistory";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const direction = useNavigationDirection();

  const variants = {
    initial: {
      opacity: 0,
      x: direction === "forward" ? "100%" : "-100%",
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 20,
        mass: 0.2,
        velocity: 2
      }
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 20,
        mass: 0.2,
        velocity: 2,
        staggerChildren: 0.05
      }
    },
    exit: {
      opacity: 0,
      x: direction === "forward" ? "-100%" : "100%",
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 20,
        mass: 0.2,
        velocity: 2
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





