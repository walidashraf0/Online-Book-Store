import { Moon, Sun } from "lucide-react";
import React, { useEffect, useState } from "react";

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  console.log(theme);
  return (
    <>
      <div className="relative">
        <button
          className="cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute -bottom-3 right-0 z-10"
          onClick={() =>
            setTheme((data) => (data === "dark" ? "light" : "dark"))
          }
        >
          {theme === "dark" ? (
            <Sun size={20} />
          ) : theme === "light" ? (
            <Moon size={20} />
          ) : (
            ""
          )}
        </button>
      </div>
    </>
  );
};

export default DarkMode;
