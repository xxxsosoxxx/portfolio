import * as React from "react";
import { motion } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// ⚡ Définition des variantes
const pinkButtonVariants = cva(
  "font-orbitron uppercase tracking-wide px-5 py-2 rounded-md transition-colors duration-300",
  {
    variants: {
      variant: {
        solid: "bg-neon text-white hover:bg-neon.soft shadow-md hover:shadow-pink-500/40",
        ghost: "bg-transparent border border-neon text-neon hover:bg-neon/10 hover:text-white",
        outline: "bg-transparent border-2 border-neon text-white hover:text-neon hover:border-neon.soft",
        subtle: "text-muted-foreground hover:text-neon",
      },
      size: {
        sm: "text-sm py-1 px-3",
        md: "text-base py-2 px-5",
        lg: "text-lg py-3 px-6",
      },
    },
    defaultVariants: {
      variant: "solid",
      size: "md",
    },
  }
);

// 🧬 Props Motion customisées, sans conflit
type MotionSafeProps = Omit<
  React.ComponentProps<typeof motion.button>,
  "onAnimationStart" | "onDrag" | "onDragStart"
> &
  VariantProps<typeof pinkButtonVariants> & {
    children: React.ReactNode;
  };

// 💖 Composant encapsulé
export const PinkButton = React.forwardRef<HTMLButtonElement, MotionSafeProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        className={cn(pinkButtonVariants({ variant, size }), className)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

PinkButton.displayName = "PinkButton";

