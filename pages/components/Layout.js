import Head from "next/head"
import Link from "next/link"
import "tailwindcss/tailwind.css";
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const Layout = (props) => {
  const { title, children } = props
  const siteTitle = "yude.jp"
  const router = useRouter()
  const { locale, locales, defaultLocale, pathname } = router

  const { t, lang } = useTranslation("common")
  const footer = t('footer')
  const source = t('source')
  return (
    <div className="page">
      <Head>
        <title>{title ? `${title} - ${siteTitle}` : siteTitle}</title>
        <link rel="icon" href="/static/images/favicon.ico" />
      </Head>
      <body className="min-h-screen bg-gray-900 text-white">
      <main>
        <div className="page-main">
          {children}
        </div>
      
      <style jsx global>{`
        body {
            text-align: center;
        }
        
      `}</style>
      <div className="container mx-auto px-6">
        <div className="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
            <div className="sm:w-full text-center py-6">
                <p className="text-sm font-bold mb-2 text-gray-400">
                    {footer} / <Link href="https://github.com/yudemoe/yude.jp"><a>{source}</a></Link>
                </p>
            </div>
          </div>
        </div>
      </main>
      </body>
    </div>
  )
}
export default Layout