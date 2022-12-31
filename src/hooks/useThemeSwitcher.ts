import { useState, useRef } from 'preact/hooks';

export const useThemeSwitcher = () => {
  const rootRef = useRef<HTMLDivElement>(null);

  const [isDarkMode, setIsDarkMode] = useState(() => {
    return (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    );
  });

  const toggleDarkMode = () => {
    setIsDarkMode(prevState => {
      localStorage.theme = prevState ? 'light' : 'dark';
      return !prevState;
    });
  };

  return { isDarkMode, toggleDarkMode };
};
