"use client";

import * as React from "react";
import { Ghost, Moon, Sun } from "lucide-react";

// useTheme() hook allows the component to access + update
// the global theme state
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
    // must use the useTheme() hook
  const { theme, setTheme } = useTheme();
  

  return (
    <Button
        variant={"ghost"}
        size={"icon"}
        aria-label="Toggle theme"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"/>
        
    </Button>
  );
}