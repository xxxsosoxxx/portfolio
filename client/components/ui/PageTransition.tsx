import { motion } from "framer-motion";
import { useNavigationDirection } from "@/hooks/useNavigationDirection";
import { easeOut, easeIn } from "framer-motion";
import { useState, useEffect } from "react";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const direction = useNavigationDirection();
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    setShouldAnimate(true);
  }, []);

  const variants = {
    initial: {
      opacity: 0,
      x: direction === "forward" ? 100 : -100,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: easeOut },
    },
    exit: {
      opacity: 0,
      x: direction === "forward" ? -100 : 100,
      transition: { duration: 0.4, ease: easeIn },
    },
  };

  return (
    <motion.div
      initial={shouldAnimate ? "initial" : false}
      animate="animate"
      exit="exit"
      variants={variants}
      className="min-h-screen"
    >
      {children}
    </motion.div>
  );
}



