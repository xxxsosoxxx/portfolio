import * as React from "react";
import { motion } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Variants
const heroVariants = cva(
  "orbitron-title hover-glow px-6 transition-opacity duration-700 ease-out",
  {
    variants: {
      variant: {
        default: "text-foreground",
        neon: "text-neon hover:text-white",
        muted: "text-muted-foreground hover:text-foreground",
      },
      size: {
        sm: "text-[6vw] md:text-[4vw]",
        md: "text-[7vw] md:text-[5vw]",
        xl: "text-[8vw] md:text-[6vw]",
      },
      align: {
        center: "flex justify-center items-center text-center",
        left: "flex justify-start items-start text-left",
        right: "flex justify-end items-end text-right",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "xl",
      align: "center",
    },
  }
);

// TypeMotion 
type MotionSafeProps = Omit<
  React.ComponentProps<typeof motion.section>,
  "onDrag" | "onDragStart" | "onAnimationStart"
> &
  VariantProps<typeof heroVariants> & {
    children: React.ReactNode;
  };

// Composant HeroBlock 
export const HeroBlock = React.forwardRef<HTMLElement, MotionSafeProps>(
  ({ className, children, variant, size, align, ...props }, ref) => {
    return (
      <motion.section
        ref={ref}
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className={cn("h-screen", heroVariants({ variant, size, align }), className)}
        {...props}
      >
        <h1 className="leading-tight tracking-wide uppercase w-full">{children}</h1>
      </motion.section>
    );
  }
);
HeroBlock.displayName = "HeroBlock";

