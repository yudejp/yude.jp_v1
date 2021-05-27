import Layout from "./components/Layout"
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
import React from "react"
import ReactMarkdown from "react-markdown"
import gfm from 'remark-gfm';
import ja from '../docs/tos/ja.md'
import en from '../docs/tos/en.md'

export default function Tos(props) {
    const router = useRouter()
    const { locale, locales, defaultLocale, pathname } = router
    const { t, lang } = useTranslation("tos")
    const tos = t('tos')
    return(
        <Layout title={tos}>
        <div>
        {lang === 'ja' ? (
          <ReactMarkdown plugins={[gfm]} children={ja} />
        ) : (
          <ReactMarkdown plugins={[gfm]} children={en} />
        )}
        </div>
        </Layout>
        )
    }