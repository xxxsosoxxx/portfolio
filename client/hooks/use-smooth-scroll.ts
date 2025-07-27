import { useEffect } from "react";

export function useSmoothScroll() {
  useEffect(() => {
    // Enhanced smooth scrolling with momentum
    let isScrolling = false;
    let scrollEndTimer: NodeJS.Timeout;

    const handleScrollStart = () => {
      if (!isScrolling) {
        isScrolling = true;
        document.body.style.scrollBehavior = "smooth";
      }
    };

    const handleScrollEnd = () => {
      clearTimeout(scrollEndTimer);
      scrollEndTimer = setTimeout(() => {
        isScrolling = false;
        document.body.style.scrollBehavior = "auto";
      }, 150);
    };

    const handleWheel = (e: WheelEvent) => {
      handleScrollStart();
      handleScrollEnd();
    };

    const handleTouchStart = () => {
      handleScrollStart();
    };

    const handleTouchEnd = () => {
      handleScrollEnd();
    };

    // Add event listeners
    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    window.addEventListener("scroll", handleScrollEnd, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("scroll", handleScrollEnd);
      clearTimeout(scrollEndTimer);
    };
  }, []);
}
