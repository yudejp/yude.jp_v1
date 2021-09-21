// Base layout
import Layout from "./components/Layout"

// React, i18n
import useTranslation from 'next-translate/useTranslation'
import React from "react"
import ReactMarkdown from "react-markdown"

// Markdown
import gfm from 'remark-gfm';
import ja from '../docs/hcunews/ja.md'
import en from '../docs/hcunews/en.md'

export default function HcuNews() {
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