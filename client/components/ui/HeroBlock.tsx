"use client";

import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useNavigationDirection } from "@/hooks/useNavigationDirection";

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

  return (
    <section className="py-[15vh] px-6 md:px-12 lg:px-24 flex flex-col items-center justify-center text-center overflow-hidden">
      
      {/* Titre principal éditorial responsive */}
      <motion.h1
        initial={{ opacity: 0, x: isForward ? 100 : -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.8, 0.25, 1] }}
        className="text-[clamp(2rem,8vw,6rem)] max-w-[90vw] mx-auto font-orbitron font-semibold uppercase tracking-wide text-foreground"
      >
        {preset?.title}
      </motion.h1>

      {/* Ligne décorative animée */}
      <motion.div
        layoutId="cta-line"
        className={`origin-${isForward ? "left" : "right"} mt-6 h-[2px] w-[80%] bg-muted`}
      />
    </section>
  );
};




