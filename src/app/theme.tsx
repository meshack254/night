"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, MoonStar } from "lucide-react";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  function Dark() {
    setTheme("dark");
  }

  function Light() {
    setTheme("light");
  }

  return (
    <div className="flex justify-around">
      {theme === "dark" && (
        <button onClick={Light} className="p-2 rounded-xl text-black bg-white">
          <Sun />
        </button>
      )}
      {theme === "light" && (
        <button onClick={Dark} className="p-2 rounded-xl bg-slate-900">
          <MoonStar className="text-white dark:text-white" />
        </button>
      )}
    </div>
  );
};

export default ThemeSwitch;
