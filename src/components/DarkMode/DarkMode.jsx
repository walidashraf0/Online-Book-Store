import { Moon, Sun } from "lucide-react";
import React, { useState } from "react";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <button
        className="cursor-pointer"
        onClick={() => setDarkMode((prev) => !prev)}
      >
        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </>
  );
};

export default DarkMode;
