import Layout from "./components/Layout"
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
import React from "react"
import ReactMarkdown from "react-markdown"
import gfm from 'remark-gfm';
import ja from '../docs/hcunews/ja.md'
import en from '../docs/hcunews/en.md'

export default function Tos(props) {
    const router = useRouter()
    const { locale, locales, defaultLocale, pathname } = router
    const { t, lang } = useTranslation("hcunews")

    return(
        <Layout title={t('hcunews')}>
        <div>
            <h1>{t('hcunews')}</h1>
            {lang === 'ja' ? (
            <ReactMarkdown plugins={[gfm]} children={ja} />
            ) : (
            <ReactMarkdown plugins={[gfm]} children={en} />
            )}
        </div>
        </Layout>
    )
    }