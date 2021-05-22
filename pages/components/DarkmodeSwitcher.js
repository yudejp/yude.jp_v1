import Head from "next/head"
import Link from "next/link"
import "tailwindcss/tailwind.css";
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { DarkModeToggle } from 'tailwind-darkmode-toggle';

const Layout = (props) => {
  const { title, children } = props
  const siteTitle = "yude.jp"
  const router = useRouter()
  const { locale, locales, defaultLocale, pathname } = router;
  return (
    <DarkModeToggle className='inline-block my-3 mx-2 w-10 h-10 text-gray-800 dark:text-gray-300' />
  )
}
export default Layout