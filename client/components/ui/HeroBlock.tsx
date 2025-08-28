"use client";

import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useNavigationDirection } from "@/hooks/useNavigationDirection";
import { useContentHeight } from "@/hooks/useContentHeight";

const presets = {
  "/portfolio": { title: "Portfolio" },
  "/about": { title: "About" },
  "/contact": { title: "Contact" },
};

export const HeroBlock = () => {
  const location = useLocation();
  const direction = useNavigationDirection();
  const page = location.pathname;
  const preset = presets[page];
  const isForward = direction === "forward";

  const { ref, height } = useContentHeight();

  return (
    <section
      style={{ minHeight: height ? height + 64 : "auto" }}
      className="relative flex flex-col items-center justify-center px-6 md:px-12 lg:px-24 text-center py-12 overflow-hidden"
    >
      <div ref={ref} className="flex flex-col items-center w-full">
        <motion.h1
          initial={{ opacity: 0, x: isForward ? 100 : -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.8, 0.25, 1] }}
          className="text-[clamp(2.5rem,8vw,5rem)] max-w-[90vw] font-orbitron font-bold uppercase tracking-wider text-foreground"
        >
          {preset?.title}
        </motion.h1>

        <motion.div
          layoutId="cta-line"
          className={`origin-${isForward ? "left" : "right"} mt-6 h-[2px] w-[80%] bg-muted`}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, ease: [0.25, 0.8, 0.25, 1] }}
        />
      </div>
    </section>
  );
};