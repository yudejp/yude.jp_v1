// Base layout
import Layout from "./components/Layout"

// i18n
import { useTranslation, useLanguageQuery, LanguageSwitcher } from 'next-export-i18n';
const { t } = useTranslation();
const [query] = useLanguageQuery();

// Next.js router
import { useRouter } from 'next/router'

export default function About(props) {
  return (
    <Layout title={t('house')}>
      <div>
      <p className="my-2 text-3xl text-center">{t('house')}</p>
      <iframe className="w-full h-96" src="https://mackerel.io/embed/public/embed/4mVIU29WCRVZgHUxQPzWsfXo953uxiAegbjDb83hTQ7szesCunwdpVkBIzhnLc9i?period=1d" frameBorder="0" scrolling="no"></iframe>
      </div>
    </Layout>
  )
}