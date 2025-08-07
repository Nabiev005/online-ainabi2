// components/DarkModeToggle.tsx
import { useEffect, useState } from "react";
import "../styles/DarkModeToggle.css"

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState<boolean>(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button onClick={() => setDarkMode(!darkMode)} className="dark-toggle-btn">
      {darkMode ? "☀️" : "🌙"}
    </button>
  );
};

export default DarkModeToggle;
