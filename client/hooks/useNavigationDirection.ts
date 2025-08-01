"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export function useNavigationDirection() {
  const router = useRouter();
  const pathname = router.pathname;
  const [previousPath, setPreviousPath] = useState<string>("");
  const [direction, setDirection] = useState<"forward" | "backward">("forward");

  useEffect(() => {
    const order = ["/", "/portfolio", "/about", "/contact"];
    const prevIndex = order.indexOf(previousPath);
    const nextIndex = order.indexOf(pathname);
    setDirection(nextIndex > prevIndex ? "forward" : "backward");
    setPreviousPath(pathname);
  }, [pathname]);

  return direction;
}
