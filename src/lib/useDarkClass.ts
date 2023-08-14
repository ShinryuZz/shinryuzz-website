import { useEffect, useState } from "react";

type UseDarkClass = (isDark?: boolean) => {
  isDarkMode: boolean;
  toggle: (isDark?: boolean) => void;
};

export const useDarkClass: UseDarkClass = (isDark = false) => {
  console.log("useDarkClass");

  const [isDarkMode, setIsDarkMode] = useState<boolean>(isDark);
  const toggle = (isDark?: boolean) => {
    if (typeof isDark === "undefined") {
      setIsDarkMode((state) => !state);
      return;
    }
    setIsDarkMode(!isDark);
  };

  // isDarkMode が変わるタイミングで <html>タグに dark クラスを付与/除去する
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return { isDarkMode, toggle };
};
