// Base layout
import Layout from "../../components/Layout"

// i18n
import useTranslation from 'next-translate/useTranslation'

// React
import { useRouter } from 'next/router'

// Data fetching
import Players from '../../components/Minecraft/Players'

export default function UUID() {
  const router = useRouter()
  const { locale, locales, defaultLocale, pathname } = router
  const { t, lang } = useTranslation("index")
  const { uuid } = router.query
  
  return (
    <>
      <Layout title={t('home')}>
      <Players uuid={uuid} />
      </Layout>
    </>
  )
}
