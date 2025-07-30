import { motion, HTMLMotionProps } from "framer-motion";
import * as React from "react";
import { cn } from "@/lib/utils";

type SafeMotionButtonProps = HTMLMotionProps<"button"> & {
  children?: React.ReactNode;
};

export const PinkButton = React.forwardRef<HTMLButtonElement, SafeMotionButtonProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        {...props}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          "px-5 py-2 rounded-md font-orbitron uppercase tracking-wide transition-colors duration-300 text-white bg-[#ff69b4] hover:bg-[#ff98c9] shadow-md hover:shadow-pink-500/40",
          className
        )}
      >
        {children}
      </motion.button>
    );
  }
);
PinkButton.displayName = "PinkButton";
