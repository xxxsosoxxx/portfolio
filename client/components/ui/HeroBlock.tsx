"use client";

import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
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
    <section className="relative min-h-[60vh] flex flex-col items-center justify-center px-6 text-center pt-32 pb-16 overflow-hidden">
      {/* Ligne décorative animée */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.8, 0.25, 1] }}
        className={`origin-${isForward ? "left" : "right"} mb-6 h-[2px] w-[80%] bg-muted`}
      />

      {/* Titre principal */}
      <motion.h1
        initial={{ opacity: 0, x: isForward ? 100 : -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.8, 0.25, 1] }}
        className="text-[clamp(2.5rem,8vw,6rem)] max-w-full break-words font-orbitron font-semibold uppercase tracking-wide text-foreground"
      >
        {preset?.title}
      </motion.h1>

      {/* Liens CTA en ligne */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-6 flex flex-wrap justify-center gap-6 text-base font-medium uppercase tracking-wide"
      >
        <Link to="/about" className="hover:underline underline-offset-4">
          About
        </Link>
        <Link to="/portfolio" className="hover:underline underline-offset-4">
          Portfolio
        </Link>
        <Link to="/contact" className="hover:underline underline-offset-4">
          Contact
        </Link>
      </motion.div>
    </section>
  );
};



