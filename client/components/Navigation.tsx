import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // 1. Suivre le scroll pour changer le style de la nav
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 2. Fermer le menu au changement de route
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // 3. Bloquer le scroll du body quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  const navItems = [
    { href: "/portfolio", label: "Portfolio" },
    { href: "/about",     label: "About"     },
    { href: "/contact",   label: "Contact"   },
  ];

  return (
    <>
      <nav
        role="navigation"
        aria-label="Primary Navigation"
        className={cn(
          "fixed top-0 left-0 right-0 z-50 bg-transparent transition-all duration-300",
          isScrolled
            ? "bg-background/80 backdrop-blur-lg shadow-md py-4"
            : "bg-background/60 backdrop-blur-sm py-2"
        )}
      >
        <div className="container mx-auto flex items-start md:items-center justify-between px-6">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-light text-foreground hover:text-muted-foreground transition-colors duration-300"
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
      </nav>

      {/* Mobile Overlay */}
      <div className={cn(
        "fixed inset-0 z-40 bg-background/60 backdrop-blur-lg transform transition-transform duration-300 md:hidden",
        isMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex flex-col items-center justify-center h-screen space-y-8 px-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
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



