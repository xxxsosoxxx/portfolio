import { useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const pageOrder: Record<string, number> = {
  "/": 1,
  "/portfolio": 2,
  "/about": 3,
  "/contact": 4,
};

export function useNavigationDirection() {
  const location = useLocation();
  const prevPath = useRef(location.pathname);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");

  useEffect(() => {
    const currentPath = location.pathname;
    const prevIndex = pageOrder[prevPath.current] ?? 0;
    const currentIndex = pageOrder[currentPath] ?? 0;

    if (currentIndex > prevIndex) {
      setDirection("forward");
    } else if (currentIndex < prevIndex) {
      setDirection("backward");
    }

    prevPath.current = currentPath;
  }, [location]);

  return direction;
}

