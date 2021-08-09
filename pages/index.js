// Load base layout
import Layout from "./components/Layout"
// Menu
import FontAwesomeMenu from "./components/Menu/FontAwesomeMenu"
// Banner
import BlueRibbon from "./components/Footer/BlueRibbon"
import HappyBusy from "./components/Footer/HappyBusy"
// Next.js
import Link from 'next/link'
import Image from 'next/image'
// i18n
import useTranslation from 'next-translate/useTranslation'
// React Router
import { useRouter } from 'next/router'
import MinecraftMenu from "./components/Menu/MinecraftMenu"

export default function Index(props) {
  const router = useRouter()
  const { locale, locales, defaultLocale, pathname } = router
  const { t, lang } = useTranslation("index")

  return (
    <Layout title={t('home')}>
      <div className="my-9 text-center">
        <div className="m-10">
        <Image
            src         = "/images/avatar.png"
            alt         = "yude's avatar"
            width       = {200}
            height      = {200}
            unoptimized = {true}
        />
        </div>
        
        {/* Index menu */}
        <div className="grid grid-cols-4 gap-10">
          <FontAwesomeMenu dest="/profile" icon={['fas', 'user']} />
          <FontAwesomeMenu dest="/server" icon={['fas', 'server']} />
          <FontAwesomeMenu dest="/house" icon={['fas', 'house-user']} />
          <FontAwesomeMenu dest="https://scrapbox.io/yude" icon={['fas', 'book']} />
          <FontAwesomeMenu dest="https://discord.gg/X6srY7X" icon={['fab', 'discord']} />          
          <FontAwesomeMenu dest="https://github.com/yudejp" icon={['fab', 'github']} />
          <FontAwesomeMenu dest="https://git.yude.jp" icon={['fab', 'git']} />
          <FontAwesomeMenu dest="https://mstdn.yude.jp" icon={['fab', 'mastodon']} />
          <MinecraftMenu />
          <FontAwesomeMenu dest="/mutual" icon="faHeart" />
        </div>
        
        {/* Banner */}
        <div className="mx-auto mt-10">
          <BlueRibbon />
          <HappyBusy />
        </div>
        
      </div>
    </Layout>
  )
}
