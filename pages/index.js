import Layout from "./components/Layout"
import Navbar from "./components/Navbar"
import Link from 'next/link'
import { ReactElement } from 'react'
import { faCoffee } from '@fortawesome/free-brands-svg-icons'
import { faBlog, faBook } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
        <div class="m-10">
        <Image
            src         = "/static/images/avatar.png"
            alt         = "yude's avatar"
            width       = {200}
            height      = {200}
            unoptimized = {true}
        />
        </div>
        <span><Link href="https://blog.yude.jp"><a><FontAwesomeIcon icon={faBlog} className="w-10 h-10 inline"/></a></Link></span>
        <span className="ml-4"><Link href="https://wiki.yude.jp"><a><FontAwesomeIcon icon={faBook} className="w-10 h-10 inline"/></a></Link></span>

        <p></p>
      </div>
      
    </Layout>
  )
}