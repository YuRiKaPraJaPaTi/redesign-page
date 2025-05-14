import React, { useEffect, useState } from 'react';

const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    // If there's no saved theme, default to light (false)
    return savedTheme ? savedTheme === "dark" : false; // false = light theme by default
  });

  useEffect(() => {
    const theme = isDark ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(prev => !prev)}
      aria-label="Toggle dark mode"
      role="switch"
      aria-checked={isDark}
      className="theme-toggle"
    >
      {isDark ? 'Light' : 'Dark'}
    </button>
  );
};

export default ThemeToggle;
