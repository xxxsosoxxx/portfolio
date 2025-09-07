import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigationDirection } from "@/hooks/useNavigationDirection";

interface AnimatedCTAProps {
  href: string;
  label: string;
  direction?: "left" | "right";
  id?: string; // Unique identifier for multiple CTAs on the same page
}

export const AnimatedCTA = ({ href, label, direction = "right", id = "default" }: AnimatedCTAProps) => {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);
  const navigationDirection = useNavigationDirection();

  // Reset clicked state when component mounts
  useEffect(() => {
    return () => setClicked(false);
  }, []);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.25, 0.8, 0.25, 1] }}
      className="inline-block"
    >
      <motion.button
        onClick={handleClick}
        disabled={clicked}
        className="btn-minimal font-orbitron uppercase tracking-wider text-sm relative overflow-hidden px-6 py-3"
        initial={{ opacity: 1 }}
        animate={clicked ? { 
          opacity: 0, 
          x: navigationDirection === "forward" ? 50 : -50,
          transition: { duration: 0.4, ease: [0.4, 0.0, 0.2, 1] }
        } : {}}
        whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
        whileTap={{ scale: 0.98 }}
        onAnimationComplete={() => {
          if (clicked) {
            navigate(href);
            // Reset after navigation initiated
            setTimeout(() => setClicked(false), 100);
          }
        }}
      >
        {label}
        <motion.div
          layoutId={`cta-line-${id}`}
          className="absolute bottom-0 left-0 h-[2px] w-full bg-muted origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: clicked ? 0 : 1 }}
          transition={{ duration: 0.4, ease: [0.25, 0.8, 0.25, 1] }}
        />
      </motion.button>
    </motion.div>
  );
};
