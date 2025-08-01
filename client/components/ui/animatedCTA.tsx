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
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      navigate(href);
    }, 400);
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={isClicked ? { opacity: 0, x: direction === "right" ? 50 : -50 } : {}}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <Button
        onClick={handleClick}
        variant="ghost"
        size="lg"
        withArrow
        className="tracking-wider uppercase text-[14px] leading-[20px] font-medium hover:text-muted-foreground transition-colors duration-300"
        style={{ fontFamily: "Orbitron, sans-serif" }}
      >
        {label}
      </Button>
    </motion.div>
  );
};
