import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigationHistory } from "@/hooks/useNavigationHistory";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    if (isMenuOpen && firstLinkRef.current) {
      firstLinkRef.current.focus();
    }
  }, [isMenuOpen]);

  const navItems = [
    { href: "/portfolio", label: "Portfolio" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav
        role="navigation"
        aria-label="Primary Navigation"
        className={cn(
          "nav fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm transition-all duration-300",
          isScrolled ? "shadow-sm" : ""
        )}
      >
        <div className="section-padding">
          <div className="container mx-auto">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <Link to="/" className="logo inline-block">
                  SOUHEILA SAID
                </Link>
              </div>

              <div className="hidden md:flex items-center justify-end flex-1 gap-16">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    aria-current={location.pathname === item.href ? "page" : undefined}
                    className="nav-link"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="flex md:hidden items-center justify-end pl-8">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="flex flex-col justify-center items-center w-6 h-6 space-y-1"
                  aria-label="Toggle menu"
                  aria-expanded={isMenuOpen ? "true" : "false"}
                >
                  <span className="sr-only">Toggle navigation menu</span>
                  <span className={cn("block w-6 h-px bg-current transition-all", isMenuOpen && "rotate-45 translate-y-2")} />
                  <span className={cn("block w-6 h-px bg-current transition-opacity", isMenuOpen && "opacity-0")} />
                  <span className={cn("block w-6 h-px bg-current transition-all", isMenuOpen && "-rotate-45 -translate-y-2")} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/60 backdrop-blur-lg md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-screen space-y-12 px-6">
              {navItems.map((item, i) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  ref={i === 0 ? firstLinkRef : null}
                  aria-current={location.pathname === item.href ? "page" : undefined}
                  className="nav-link text-2xl font-light"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

