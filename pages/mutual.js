// Base layout
import Layout from "./components/Layout"

// i18n
import { useTranslation, useLanguageQuery, LanguageSwitcher } from 'next-export-i18n';

// React Router etc.
import { useRouter } from 'next/router'
import React from "react"

// React Markdown
import ReactMarkdown from "react-markdown"
import gfm from 'remark-gfm';
import ja from '../docs/mutual/ja.md'
import en from '../docs/mutual/en.md'

// next-seo
import { NextSeo } from 'next-seo';

export default function Tos(props) {
    const { t } = useTranslation();
    const [query] = useLanguageQuery();
    
    if (!query) {
      return <p>Loading...</p>
    } else {
    return(
          <>
            <NextSeo
              title="相互リンク"
              description="yude.jp と相互にリンクを貼っている Web サイトの一覧"
            />
            <Layout title={t('common:mutual')}>
              <div>
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
          </>
        )
      }
    }