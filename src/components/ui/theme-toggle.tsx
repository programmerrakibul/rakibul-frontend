"use client";

import { useTheme } from "next-themes";
import { Button } from "./button";
import SunWhite from "@/assets/icons/white/fill/sun_white.png";
import SunBlack from "@/assets/icons/black/fill/sun_black.png";
import MoonWhite from "@/assets/icons/white/fill/moon_white.png";
import MoonBlack from "@/assets/icons/black/fill/moon_black.png";
import Image from "next/image";

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
          <Image
            src={isDark ? MoonWhite : MoonBlack}
            alt="Moon Icon"
            width={24}
            height={24}
          />
        </span>
        <span className="bg-background p-2 dark:bg-transparent rounded-full">
          <Image
            src={isDark ? SunWhite : SunBlack}
            alt="Sun Icon"
            width={24}
            height={24}
          />
        </span>
      </Button>
    </>
  );
};

export default ThemeToggle;
