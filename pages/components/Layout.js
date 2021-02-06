import Head from "next/head"
import Link from "next/link"
import "tailwindcss/tailwind.css";
import React, { useEffect, useState } from 'react'
import ToggleDarkMode from '../components/ToggleDarkMode'

const Layout = (props) => {
  const { title, children } = props
  const siteTitle = "yude.jp"
  return (
    <div className="page">
      <Head>
        <title>{title ? `${title} - ${siteTitle}` : siteTitle}</title>
        <link rel="icon" href="/static/images/favicon.ico" />
      </Head>
      <body className="bg-white text-black dark:bg-black dark:text-white">
      <main>
        {/*
        {title ? <h1 className="page-title">{title}</h1> : ``}
        */}
        <div className="page-main">
          {children}
        </div>
      </main>
      <style jsx global>{`
        body {
            text-align: center;
        }
      `}</style>
      <footer>
      <div className="container mx-auto px-6">
        <div className="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
            <div className="sm:w-full text-left py-6">
                <p className="text-sm text-gray-700 font-bold mb-2">
                    This page is licensed under the MIT License. / Powered by Tailwind CSS and Next.js.
                </p>
                <div className="flex justify-center">
                  <ToggleDarkMode />
                </div>
            </div>
          </div>
        </div>
      </footer>
      </body>
    </div>
  )
}
export default Layout