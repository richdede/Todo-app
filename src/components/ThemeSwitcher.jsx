import { projectImages } from "../assets/images/images";
import { useState, useEffect } from "react";

export default function ThemeSwitcher() {
  //
  const [theme, setTheme] = useState(null);
  //
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);
  //
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  //
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  //
  //
  return (
    <div className="flex w-full items-center justify-between">
      <h1 className="text-3xl font-bold tracking-[.4em] text-lightTheme-veryLightGray md:text-5xl">
        TODO
      </h1>
      <img
        src={theme === "dark" ? projectImages.sunIcon : projectImages.moonIcon}
        alt={theme === "dark" ? "sun-icon" : "moon-icon"}
        className="w-5 cursor-pointer md:w-6"
        onClick={handleThemeSwitch}
      />
    </div>
  );
}
