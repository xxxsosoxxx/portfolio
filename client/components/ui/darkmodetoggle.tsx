import { Moon, Sun } from "lucide-react";
import useDarkMode from "../../hooks/usedarkmode";

export default function DarkModeToggle() {
  const { isDark, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      aria-label="Toggle dark mode"
      className="flex items-center space-x-2 p-2 rounded transition-colors duration-500 hover:bg-muted"
    >
      {/* Icône Soleil */}
      <Sun
        className={`w-5 h-5 transition-transform duration-500 ${
          isDark ? "text-muted-foreground opacity-40" : "text-foreground opacity-100"
        }`}
      />

      <span className="text-muted-foreground">|</span>

      {/* Icône Lune */}
      <Moon
        className={`w-5 h-5 transition-transform duration-500 ${
          isDark ? "text-foreground opacity-100" : "text-muted-foreground opacity-40"
        }`}
      />
    </button>
  );
}



