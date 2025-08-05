import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface AnimatedCTAProps {
  href: string;
  label: string;
  direction?: "left" | "right";
}

export const AnimatedCTA = ({ href, label, direction = "right" }: AnimatedCTAProps) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 1, x: 0 }}
      animate={{ opacity: 0, x: direction === "right" ? 50 : -50 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      onAnimationComplete={() => navigate(href)}
    >
      <Button
        variant="ghost"
        size="lg"
        className="tracking-wider uppercase text-[14px] leading-[20px] font-medium hover:text-muted-foreground transition-colors duration-300"
        style={{ fontFamily: "Orbitron, sans-serif" }}
      >
        {label}
        <motion.div
          layoutId="cta-line"
          className="ml-2 h-[2px] w-[24px] bg-muted"
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 80 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </Button>
    </motion.div>
  );
};
