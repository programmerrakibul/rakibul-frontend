"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "./button";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <>
      <Button
        variant="secondary"
        size={"lg"}
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className={"flex items-center justify-center rounded-full gap-0 px-1"}
      >
        <span className="dark:bg-background p-2 bg-transparent rounded-full">
          <Moon
            className="transition-all size-5 "
            size={36}
            stroke={isDark ? "white" : "black"}
            fill={isDark ? "white" : "black"}
          />
        </span>
        <span className="bg-background p-2 dark:bg-transparent rounded-full">
          <Sun className="transition-all size-5" size={36} />
        </span>
      </Button>
    </>
  );
};

export default ThemeToggle;
