// Base layout
import Layout from "./components/Layout"

// i18n
import useTranslation from 'next-translate/useTranslation'

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
    const router = useRouter()
    const { locale, locales, defaultLocale, pathname } = router
    const { t, lang } = useTranslation("common")
    return(
          <>
            <NextSeo
              title="相互リンク"
              description="yude.jp と相互にリンクを貼っている Web サイトの一覧"
            />
            <Layout title={t('common:mutual')}>
              <div>
                {lang === 'ja' ? (
                  <ReactMarkdown plugins={[gfm]} children={ja} />
                ) : (
                  <ReactMarkdown plugins={[gfm]} children={en} />
                )}
              </div>
            </Layout>
          </>
        )
    }