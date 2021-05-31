import React, { useState, useEffect } from 'react';
import Layout from "./components/Layout"
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
import Minecraft from './components/Minecraft'
import Image from 'next/image'
import { faMap } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

export default function About(props) {
    const router = useRouter()
    const { locale, locales, defaultLocale, pathname } = router
    const { t, lang } = useTranslation("minecraft")
    const title = t('title')
    const address = t('address')
    const version = t('version')

    return (
            <Layout title={title}>
            <div>
                <p className="my-2 text-3xl text-center">{title}</p>
                <div className="w-full">
                <Image
                    src         = "/static/images/dynmap.png"
                    alt         = "Dynmap Header"
                    unoptimized = {true}
                    width       = {1354}
                    height      = {619}
                />
                </div>
                <div className="text-center">
                <Minecraft />
                <p>{address}: <code>yude.jp</code></p>
                <p>{version}: 1.16.x</p>
                <Link href="https://dynmap.yude.jp">
                <a>
                <button
                className="bg-pink-600 text-white active:bg-pink-600 font-bold text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1       ease-linear transition-all duration-150"
                type="button"
              >
                <FontAwesomeIcon icon={faMap} className="w-5 h-5 inline"/> Dynmap
              </button>
              </a>
              </Link>
              </div>
            </div>
            </Layout>
        )
}