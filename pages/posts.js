// Base layout
import Layout from "./components/Layout"

// Next.js
import Link from "next/link";

// i18n
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'

// microCMS library
import { client } from "../libs/client";

// next-seo
import { NextSeo } from 'next-seo';

export default function Home({ blog }) {
    const router = useRouter()
    const { locale, locales, defaultLocale, pathname } = router
    const { t, lang } = useTranslation("common")
    return (
          <>
          <NextSeo
            title="記事一覧"
            description="yude のブログの記事一覧 / yude's blog posts listing"
          />
          <Layout title={t('common:post_list')}>
              <div>
              <h1 className="text-center">{t('common:post_list')}</h1>
                <ul>
                  {blog.map((blog) => (
                    <li key={blog.id}>
                      <Link href={`/posts/${blog.id}`}>
                        <a>{blog.title}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
          </Layout>
          </>
    );
}

// Passing data to template
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blog: data.contents,
    },
  };
};