import { useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const pageOrder: Record<string, number> = {
  "/": 0,
  "/portfolio": 1,
  "/about": 2,
  "/contact": 3,
};

export function useNavigationDirection() {
  const location = useLocation();
  const prevPath = useRef(location.pathname);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");

  useEffect(() => {
    const currentPath = location.pathname;
    
    // Gestion circulaire de la navigation
    const prevIndex = pageOrder[prevPath.current] ?? 0;
    const currentIndex = pageOrder[currentPath] ?? 0;
    
    // Si on va de la dernière page à la première
    if (prevIndex === 3 && currentIndex === 0) {
      setDirection("backward");
    }
    // Si on va de la première page à la dernière
    else if (prevIndex === 0 && currentIndex === 3) {
      setDirection("forward");
    }
    // Navigation normale
    else {
      setDirection(currentIndex > prevIndex ? "forward" : "backward");
    }

    prevPath.current = currentPath;
  }, [location]);

  return direction;
}

