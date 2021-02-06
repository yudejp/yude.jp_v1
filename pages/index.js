import Layout from "./components/Layout"
import Navbar from "./components/Navbar"
import Link from 'next/link'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'

export default function Index(props) {
  const router = useRouter()
  const { locale, locales, defaultLocale, pathname } = router

  const { t, lang } = useTranslation("index")
  const welcome = t('welcome')
  const instead_1 = t('instead_1')
  const instead_2 = t('instead_2')
  return (

    <Layout title="ホーム">
      <Navbar />
      <div className="my-9">
        <p>[Debug] Current locale: {locale}</p>
        <Image className="rounded-full"
            src         = "/static/images/avatar.png"
            alt         = "yude's avatar"
            width       = {200}
            height      = {200}
            unoptimized = {true}
        />
        <p>🔨 {welcome} 🔨</p>
        <p>{instead_1}<Link href="https://yude.moe"><a>yude.moe</a></Link>{instead_2}</p>
      </div>
      
    </Layout>
  )
}