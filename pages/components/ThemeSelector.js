import "tailwindcss/tailwind.css";
import useTranslation from 'next-translate/useTranslation'
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
      <button className="my-4 text-2xl focus:outline-none" onClick={switchTheme}>
        {theme === 'light' ? (
          <FontAwesomeIcon icon={faMoon} className="w-10 h-8" />
        ) : (
          <FontAwesomeIcon icon={faSun} className="w-10 h-8" />
        )}
      </button>
  )
}
export default ThemeSelector