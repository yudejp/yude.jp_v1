import "tailwindcss/tailwind.css";
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useTheme } from "next-themes";
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ThemeSelector = (props) => {
  const { title, children } = props
  const router = useRouter()
  const { locale, locales, defaultLocale, pathname } = router
  
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme, getTheme } = useTheme();
  useEffect(() => {
    setIsMounted(true);
  }, []);
  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === "light" ? "dark" : "light");
    }
  };
  return (
      <button className="inline-flex rounded-md border border-gray-300 dark:border-gray-800 shadow-sm px-2 bg-white font-medium text-gray-700 hover:bg-gray-50 dark:bg-gray-700 dark:text-white my-3 py-1 text-2xl focus:outline-none" onClick={switchTheme}>
        {theme !== undefined && (theme === "light" ? (
          <FontAwesomeIcon icon={faMoon} className="w-10 h-7" />
        ) : (
          <FontAwesomeIcon icon={faSun} className="w-10 h-7" />
        ))}
      </button>
  )
}
export default ThemeSelector