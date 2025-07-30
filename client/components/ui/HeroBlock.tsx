import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type HeroBlockProps = {
  children: React.ReactNode;
  className?: string;
};

export const HeroBlock = ({ children, className }: HeroBlockProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className={cn(
        "h-screen flex items-center justify-center text-center px-6 orbitron-title hover-glow text-foreground",
        className
      )}
    >
      <h1 className="text-[6vw] md:text-[5vw] lg:text-[4vw] leading-tight tracking-wide uppercase">
        {children}
      </h1>
    </motion.section>
  );
};
