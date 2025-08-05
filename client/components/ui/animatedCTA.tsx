import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface AnimatedCTAProps {
  href: string;
  label: string;
  direction?: "left" | "right";
}

export const AnimatedCTA = ({ href, label, direction = "right" }: AnimatedCTAProps) => {
  const navigate = useNavigate();
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.8, 0.25, 1] }}
      className="inline-block"
    >
      <motion.button
        onClick={handleClick}
        disabled={clicked}
        className="btn-minimal font-orbitron uppercase tracking-wider text-sm relative overflow-hidden"
        initial={{ opacity: 1 }}
        animate={clicked ? { opacity: 0, x: direction === "right" ? 50 : -50 } : {}}
        transition={{ duration: 0.4, ease: "easeOut" }}
        onAnimationComplete={() => {
          if (clicked) navigate(href);
        }}
      >
        {label}
        <motion.div
          layoutId="cta-line"
          className="absolute bottom-0 left-0 h-[2px] w-full bg-muted origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, ease: [0.25, 0.8, 0.25, 1] }}
        />
      </motion.button>
    </motion.div>
  );
};
