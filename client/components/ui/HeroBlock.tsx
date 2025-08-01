"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type HeroSectionProps = {
  title: string;
  direction?: "forward" | "backward";
  className?: string;
};

export const HeroSection = ({
  title,
  direction = "forward",
  className = "",
}: HeroSectionProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const titleX = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "forward" ? ["100%", "0%"] : ["-100%", "0%"]
  );

  const lineScaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={ref}
      className={`relative h-[180px] overflow-hidden flex flex-col items-center justify-center ${className}`}
    >
      <motion.h1
        style={{ x: titleX }}
        className="text-[clamp(2rem,10vw,9rem)] font-orbitron font-semibold uppercase tracking-wide whitespace-nowrap text-center"
      >
        {title}
      </motion.h1>

      <motion.div
        style={{ scaleX: lineScaleX }}
        className={`origin-${direction === "forward" ? "left" : "right"} mt-2 h-[2px] w-[80%] bg-muted`}
      />
    </section>
  );
};
