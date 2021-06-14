import Layout from "./components/Layout"
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
import React from "react"
import ReactMarkdown from "react-markdown"
import gfm from 'remark-gfm';
import ja from '../docs/mutual/ja.md'
import en from '../docs/mutual/en.md'

export default function Tos(props) {
    const router = useRouter()
    const { locale, locales, defaultLocale, pathname } = router
    const { t, lang } = useTranslation("common")
    return(
        <Layout title={t('common:mutual')}>
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