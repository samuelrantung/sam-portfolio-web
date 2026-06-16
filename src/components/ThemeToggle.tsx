"use client";

import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };

  if (theme === null) {
    return <div className="w-10 h-10 rounded-full bg-card/20 border border-border/30" />;
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2.5 rounded-full border border-border/50 bg-card/65 hover:bg-card hover:border-primary/50 text-foreground transition-all duration-300 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-ring flex items-center justify-center cursor-pointer"
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5 text-amber-400 animate-pulse" />
      ) : (
        <Moon className="w-5 h-5 text-indigo-600" />
      )}
    </button>
  );
}
