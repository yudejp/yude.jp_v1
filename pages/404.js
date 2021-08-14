// Base layout
import Layout from "./components/Layout"

// React Router
import { useRouter } from 'next/router'

// Next.js
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

export default function Custom404(props) {
  const router = useRouter()
  const { locale, locales, defaultLocale, pathname } = router
  const { t, lang } = useTranslation("404")

  return (
    <Layout title="404">
      <div className="text-center mb-10 mt-10">
      <p className="text-3xl">404</p>
      <p className="text-xl">{t('caption')}</p>
      <Link href="/">
        <a>
            <p className="mt-5">{t('return')}</p>
        </a>
      </Link>
      </div>
    </Layout>
  )
}