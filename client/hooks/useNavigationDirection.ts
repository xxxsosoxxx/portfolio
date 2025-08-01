import { useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export function useNavigationDirection() {
  const location = useLocation();
  const prevPath = useRef(location.pathname);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");

  useEffect(() => {
    const currentPath = location.pathname;
    if (currentPath !== prevPath.current) {
      setDirection("forward");
      prevPath.current = currentPath;
    }
  }, [location]);

  return direction;
}
