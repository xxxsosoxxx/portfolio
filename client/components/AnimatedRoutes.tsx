import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Index from "@/pages/Index";
import Portfolio from "@/pages/Portfolio";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Accessibility from "@/pages/Accessibility";
import TermsOfUse from "@/pages/TermsOfUse";
import NotFound from "@/pages/NotFound";

import { Layout } from "@/components/ui/layout";
import { PageTransitionWrapper } from "@/components/ui/PageTransitionWrapper";

export function AnimatedRoutes() {
  const location = useLocation();

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Index />} />

          <Route
            path="/portfolio"
            element={
              <PageTransitionWrapper>
                <Portfolio />
              </PageTransitionWrapper>
            }
          />
          <Route
            path="/about"
            element={
              <PageTransitionWrapper>
                <About />
              </PageTransitionWrapper>
            }
          />
          <Route
            path="/contact"
            element={
              <PageTransitionWrapper>
                <Contact />
              </PageTransitionWrapper>
            }
          />
          <Route
            path="/accessibility"
            element={
              <PageTransitionWrapper>
                <Accessibility />
              </PageTransitionWrapper>
            }
          />
          <Route
            path="/terms-of-use"
            element={
              <PageTransitionWrapper>
                <TermsOfUse />
              </PageTransitionWrapper>
            }
          />
          <Route
            path="*"
            element={
              <PageTransitionWrapper>
                <NotFound />
              </PageTransitionWrapper>
            }
          />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
}
