import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Index from "@/pages/Index";
import Portfolio from "@/pages/Portfolio";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Accessibility from "@/pages/Accessibility";
import TermsOfUse from "@/pages/TermsOfUse";
import NotFound from "@/pages/NotFound";
import { PageTransition } from "@/components/ui/PageTransition";
import { Layout } from "@/components/ui/layout";

export function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Page d'accueil sans layout */}
        <Route path="/" element={<Index />} />

        {/* Pages avec layout + animation */}
        <Route
          path="/portfolio"
          element={
            <Layout>
              <PageTransition><Portfolio /></PageTransition>
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <PageTransition><About /></PageTransition>
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <PageTransition><Contact /></PageTransition>
            </Layout>
          }
        />
        <Route
          path="/accessibility"
          element={
            <Layout>
              <PageTransition><Accessibility /></PageTransition>
            </Layout>
          }
        />
        <Route
          path="/terms-of-use"
          element={
            <Layout>
              <PageTransition><TermsOfUse /></PageTransition>
            </Layout>
          }
        />
        <Route
          path="*"
          element={
            <Layout>
              <PageTransition><NotFound /></PageTransition>
            </Layout>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

