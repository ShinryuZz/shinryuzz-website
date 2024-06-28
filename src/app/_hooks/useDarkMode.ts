import { useEffect } from "react";
import { useLocalStorage } from "react-use";

import { useDarkClass } from "./useDarkClass";

const Theme = {
  Dark: "dark",
  Light: "light",
} as const;

type UseDarkMode = () => {
  isDarkMode: boolean;
  toggle: (isDark: boolean) => void;
};

export const useDarkMode: UseDarkMode = () => {
  const [themeValue, setThemeValue] =
    useLocalStorage<(typeof Theme)["Dark" | "Light"]>("theme");
  const { isDarkMode, toggle } = useDarkClass();
  const keepToggle = (isDark: boolean) => {
    toggle(isDark);
    setThemeValue(isDark ? Theme.Dark : Theme.Light);
  };

  useEffect(() => {
    if (
      themeValue === Theme.Dark ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      toggle(true);
      setThemeValue(Theme.Dark);
    } else {
      toggle(false);
      setThemeValue(Theme.Light);
    }
  }, [themeValue, setThemeValue, toggle]);

  return { isDarkMode, toggle: keepToggle };
};
