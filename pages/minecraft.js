import React, { useState, useEffect } from 'react';
import Layout from "./components/Layout"
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
import Minecraft from './components/Minecraft'
import Image from 'next/image'

export default function About(props) {
    const router = useRouter()
    const { locale, locales, defaultLocale, pathname } = router
    const { t, lang } = useTranslation("minecraft")
    const title = t('title')

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
        <Minecraft />
        </div>
        </Layout>
        )
}