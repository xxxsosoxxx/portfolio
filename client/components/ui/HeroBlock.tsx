"use client";

import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useNavigationDirection } from "@/hooks/useNavigationDirection";
import { Button } from "@/components/ui/button";

const presets = {
  "/portfolio": {
    title: "Portfolio",
    subtitle: "A curated collection of studio shoots and creative collaborations.",
    cta: { label: "Learn More", href: "/about" },
  },
  "/about": {
    title: "About",
    subtitle: "Presence as resistance. Style as declaration.",
    cta: { label: "Get In Touch", href: "/contact" },
  },
  "/contact": {
    title: "Contact",
    subtitle: "Let’s collaborate. Available for editorial, runway, and creative direction.",
    cta: { label: "Explore Work", href: "/portfolio" },
  },
};

export const HeroBlock = () => {
  const location = useLocation();
  const direction = useNavigationDirection();
  const page = location.pathname;
  const preset = presets[page];

  const isForward = direction === "forward";

  return (
    <section className="relative min-h-[60vh] flex flex-col items-center justify-center px-6 text-center pt-32 pb-16 overflow-hidden">
      {/* Ligne décorative */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.8, 0.25, 1] }}
        className={`origin-${isForward ? "left" : "right"} mb-6 h-[2px] w-[80%] bg-muted`}
      />

      {/* Titre */}
      <motion.h1
        initial={{ opacity: 0, x: isForward ? 100 : -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.8, 0.25, 1] }}
        className="text-[clamp(2.5rem,8vw,6rem)] font-orbitron font-semibold uppercase tracking-wide whitespace-nowrap text-foreground"
      >
        {preset?.title}
      </motion.h1>

      {/* Sous-titre */}
      {preset?.subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-4 text-muted-foreground text-lg md:text-xl max-w-xl mx-auto"
        >
          {preset.subtitle}
        </motion.p>
      )}

      {/* CTA */}
      {preset?.cta && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-6"
        >
          <a href={preset.cta.href}>
            <Button variant="outline" size="lg" withArrow>
              {preset.cta.label}
            </Button>
          </a>
        </motion.div>
      )}
    </section>
  );
};


