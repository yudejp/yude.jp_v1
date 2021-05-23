import Head from "next/head"
import "tailwindcss/tailwind.css";
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = (props) => {
  const { title, children } = props
  const siteTitle = "yude.jp"
  const router = useRouter()
  const { locale, locales, defaultLocale, pathname } = router

  const { t, lang } = useTranslation("common")
  const footer = t('footer')
  const source = t('source')
  const tos = t('tos')
  return (
    <div className="page">
      <Head>
        <title>{title ? `${title} - ${siteTitle}` : siteTitle}</title>
        <link rel="icon" href="/static/images/favicon.ico" />
      </Head>
      <main>
      <Navbar />
        <div className="page-main">
          {children}
        </div>
      
      <style jsx global>{`
        body {
            text-align: center;
        }
      `}</style>
      <Footer />
      </main>
    </div>
  )
}
export default Layout