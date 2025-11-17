import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "engindriver_theme";

function getInitialTheme(): Theme {
  try {
    const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
    if (stored === "light" || stored === "dark") return stored;
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return "dark";
    }
  } catch (e) {
    // ignore
  }
  return "light";
}

export default function useTheme() {
  const [theme, setTheme] = useState<Theme>(() =>
    typeof window !== "undefined" ? getInitialTheme() : "light"
  );

  useEffect(() => {
    try {
      const root = document.documentElement;
      if (theme === "dark") {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {
      // noop
    }
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return { theme, setTheme, toggle } as const;
}
