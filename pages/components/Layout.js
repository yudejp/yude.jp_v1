// Next.js
import Head from "next/head"

// Tailwind CSS
import "tailwindcss/tailwind.css";

// React
import React, { useEffect, useState } from 'react'

// Components
import Footer from "./Footer/Footer"
import Navbar from "./Navbar"

const Layout = (props) => {
  const { title, children } = props
  const siteTitle = "yude.jp"
  return (
    <div className="page">
      <Head>
        <title>{title ? `${title} - ${siteTitle}` : siteTitle}</title>
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <main>
      <Navbar />
        <div className="max-w-2xl mx-auto">
        <div className="mx-2">
          {children}
          </div>
        </div>
      <Footer />
      </main>
    </div>
  )
}
export default Layout