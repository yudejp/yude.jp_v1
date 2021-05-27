import Layout from "./components/Layout"
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
import React from "react"
import ReactMarkdown from "react-markdown"
import gfm from 'remark-gfm';
import input from '../docs/hcunews.md'

export default function Tos(props) {
    const router = useRouter()
    const { locale, locales, defaultLocale, pathname } = router
    const { t, lang } = useTranslation("hcunews")
    const hcunews = t('hcunews')
    return(
        <Layout title={hcunews}>
        <div>
            <h1>{hcunews}</h1>
            <ReactMarkdown plugins={[gfm]} children={input} />
        </div>
        </Layout>
        )
    }