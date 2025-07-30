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
        "h-screen flex items-center justify-center text-center px-6 text-foreground",
        className
      )}
    >
      <h1 className="text-[10vw] sm:text-[8vw] md:text-[6vw] lg:text-[120px] font-orbitron font-semibold uppercase tracking-wide leading-tight hover:text-neon transition-colors duration-300">
        {children}
      </h1>
    </motion.section>
  );
};
