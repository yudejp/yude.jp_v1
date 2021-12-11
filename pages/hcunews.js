// Base layout
import Layout from "./components/Layout"

// i18n
import { useTranslation, useLanguageQuery, LanguageSwitcher } from 'next-export-i18n';

// React
import React from "react"
import ReactMarkdown from "react-markdown"

// Markdown
import gfm from 'remark-gfm';
import ja from '../docs/hcunews/ja.md'
import en from '../docs/hcunews/en.md'

export default function HcuNews() {
    const { t } = useTranslation();
    const [query] = useLanguageQuery();

    if (!query) {
        return <p>Loading...</p>
    } else {
        return (
            <Layout title={t('hcunews')}>
            <div>
                <h1>{t('hcunews')}</h1>
                {query["lang"] === 'ja' ? (
                    <ReactMarkdown plugins={[gfm]}>
                        {ja}
                    </ReactMarkdown>
                ) : (
                    <ReactMarkdown plugins={[gfm]}>
                        {en}
                    </ReactMarkdown>
                )}
            </div>
            </Layout>
        )
    }
}