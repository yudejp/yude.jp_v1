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
  const tos = t('tos')
  return (
    <div className="page">
      <Head>
        <title>{title ? `${title} - ${siteTitle}` : siteTitle}</title>
        <link rel="icon" href="/static/images/favicon.ico" />
      </Head>
      <body className="min-h-screen text-black dark:bg-gray-900 dark:text-white subpixel-antialiased">
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
        <div className="mt-16 flex flex-col items-center">
            <div className="sm:w-full text-center py-6">
                <p className="text-sm font-bold mb-2 text-gray-900 dark:text-gray-400">
                    {footer} / <Link href="https://github.com/yudejp/yude.jp"><a className="hover:underline">{source}</a></Link>
                </p>
                <p className="text-sm font-bold mb-2 text-gray-900 dark:text-gray-400">
                    <Link href="https://wiki.yude.jp/services/terms"><a className="hover:underline">{tos}</a></Link>
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