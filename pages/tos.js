// Base layout
import Layout from "./components/Layout"

// i18n
import { useTranslation, useLanguageQuery, LanguageSwitcher } from 'next-export-i18n';
const { t } = useTranslation();
const [query] = useLanguageQuery();

// Next.js, React
import { useRouter } from 'next/router'
import React from "react"

// React Markdown
import ReactMarkdown from "react-markdown"
import gfm from 'remark-gfm';
import ja from '../docs/tos/ja.md'
import en from '../docs/tos/en.md'

export default function Tos(props) {
    return(
        <Layout title={t('tos')}>
        <div>
          {lang === 'ja' ? (
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