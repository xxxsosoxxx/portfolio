import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  // Suivre le scroll
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fermer le menu au changement de route
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Bloquer le scroll du body quand le menu mobile est ouvert
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
          "fixed top-0 left-0 right-0 z-50 bg-transparent transition-all duration-300",
          isScrolled
            ? "bg-background/80 backdrop-blur-lg transition-colors"
            : "bg-background/60 backdrop-blur-sm"
        )}
      >
        <div className="section-padding py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              className="text-2xl font-light text-foreground transition-colors duration-300"
              style={{ font: "25px/28px Orbitron, sans-serif" }}
            >
              SOUHEILA SAID
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-16">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  aria-current={location.pathname === item.href ? "page" : undefined}
                  className={cn(
                    "relative text-base font-light transition-opacity duration-200 hover:opacity-70",
                    location.pathname === item.href ? "opacity-60" : "opacity-100"
                  )}
                  style={{ fontFamily: "Orbitron, sans-serif" }}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden flex flex-col justify-center items-center w-6 h-6 space-y-1"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Toggle navigation menu</span>
              <span
                className={cn(
                  "block w-6 h-px bg-current transition-all",
                  isMenuOpen && "rotate-45 translate-y-2"
                )}
              />
              <span
                className={cn(
                  "block w-6 h-px bg-current transition-opacity",
                  isMenuOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "block w-6 h-px bg-current transition-all",
                  isMenuOpen && "-rotate-45 -translate-y-2"
                )}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background/60 backdrop-blur-lg transform transition-transform duration-300 md:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col items-center justify-center h-screen space-y-8 px-6">
          {navItems.map((item, i) => (
            <Link
              key={item.href}
              to={item.href}
              ref={i === 0 ? firstLinkRef : null}
              aria-current={location.pathname === item.href ? "page" : undefined}
              className={cn(
                "text-2xl font-light transition-opacity duration-200",
                location.pathname === item.href
                  ? "opacity-60"
                  : "opacity-100 hover:opacity-70"
              )}
              style={{ fontFamily: "Orbitron, sans-serif" }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
