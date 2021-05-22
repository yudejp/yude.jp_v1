import Head from "next/head"
import Link from "next/link"
import "tailwindcss/tailwind.css";
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useTheme } from "next-themes";

const Layout = (props) => {
  const { title, children } = props
  const siteTitle = "yude.jp"
  const router = useRouter()
  const { locale, locales, defaultLocale, pathname } = router
  
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme, getTheme } = useTheme();
  let moon = "🌙";
  useEffect(() => {
    setIsMounted(true);
  }, []);
  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === "light" ? "dark" : "light");
    }
    if (theme == "light") moon = "🌙";
    if (theme == "dark") moon = "🌅";
  };
  console.log(theme);
  return (
      <button className="my-4 mx-3 text-2xl" onClick={switchTheme}>
        {theme === 'light' ? (
          <span>🌙</span>
        ) : (
          <span>🌄</span>
        )}
      </button>
  )
}
export default Layout