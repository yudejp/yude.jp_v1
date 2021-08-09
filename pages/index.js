// Load base layout
import Layout from "./components/Layout"

// Menu
import FAMenu from "./components/Menu/FontAwesomeMenu"

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

// Font Awesome
import { faDiscord, faGit, faMastodon, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBlog, faBook, faUser, faServer, faHouseUser, faHeart, faHome } from '@fortawesome/free-solid-svg-icons'

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
          <FAMenu dest="/profile" icon={faUser} />
          <FAMenu dest="/server" icon={faServer} />
          <FAMenu dest="/house" icon={faHouseUser} />
          <FAMenu dest="https://scrapbox.io/yude" icon={faBook} />
          <FAMenu dest="https://discord.gg/X6srY7X" icon={faDiscord} />          
          <FAMenu dest="https://github.com/yudejp" icon={faGithub} />
          <FAMenu dest="https://git.yude.jp" icon={faGit} />
          <FAMenu dest="https://mstdn.yude.jp" icon={faMastodon} />
          <MinecraftMenu />
          <FAMenu dest="/mutual" icon={faHeart} />
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
