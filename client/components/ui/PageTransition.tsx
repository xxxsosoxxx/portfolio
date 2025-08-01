import { motion } from "framer-motion";
import { useNavigationDirection } from "@/hooks/useNavigationDirection";
import { easeOut, easeIn } from "framer-motion";
import { useLocation } from "react-router-dom";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const direction = useNavigationDirection();
  const location = useLocation();

  const isHome = location.pathname === "/";

  const variants = {
    initial: {
      opacity: isHome ? 1 : 0,
      x: isHome ? 0 : direction === "forward" ? 100 : -100,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: isHome ? undefined : { duration: 0.6, ease: easeOut },
    },
    exit: {
      opacity: 0,
      x: direction === "forward" ? -100 : 100,
      transition: { duration: 0.4, ease: easeIn },
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




