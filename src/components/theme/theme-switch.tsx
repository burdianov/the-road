"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "../ui/button";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center space-x-2">
      <Button
        variant="outline"
        size="icon"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-4 w-4 dark:rotate-0 dark:scale-100 transition-all rotate-90 scale-0" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
};

export { ThemeSwitch };
