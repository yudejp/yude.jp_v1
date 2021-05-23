import Layout from "./components/Layout"
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'

export default function About(props) {
  const router = useRouter()
  const { locale, locales, defaultLocale, pathname } = router
  const { t, lang } = useTranslation("house")
  const house = t('house')

  return (
    <Layout title={house}>
      <p className="my-2 text-3xl">{house}</p>
      <div className="mx-9">
      <iframe className="w-full h-96" src="https://mackerel.io/embed/public/embed/4mVIU29WCRVZgHUxQPzWsfXo953uxiAegbjDb83hTQ7szesCunwdpVkBIzhnLc9i?period=1d" frameborder="0" scrolling="no"></iframe>
      </div>
    </Layout>
  )
}