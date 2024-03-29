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
import ja from '../docs/services/ja.md'
import en from '../docs/services/en.md'

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
              title="サービス"
              description="yude.jp で運用中のサービス"
            />
            <Layout title={t('services')}>
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