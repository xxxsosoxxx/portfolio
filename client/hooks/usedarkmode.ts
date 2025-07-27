import { useEffect, useState } from "react";

export default function useDarkMode() {
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    const userPref = localStorage.getItem("theme");
    const hour = new Date().getHours();

    // Définir si on est dans le créneau automatique (21h-6h)
    const isAutoDark = hour >= 21 || hour < 6;

    if (userPref === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else if (userPref === "light") {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    } else {
      // pas de préférence : on applique auto
      setIsDark(isAutoDark);
      if (isAutoDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDark(prev => {
      const newValue = !prev;
      localStorage.setItem("theme", newValue ? "dark" : "light");
      if (newValue) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return newValue;
    });
  };

  return { isDark, toggleDarkMode };
}
