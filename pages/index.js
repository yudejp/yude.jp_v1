// Base layout
import Layout from "./components/Layout"

// Menu
import FAMenu from "./components/Menu/FontAwesomeMenu"

// Banner
import BlueRibbon from "./components/Footer/BlueRibbon"
import HappyBusy from "./components/Footer/HappyBusy"

// Next.js
import Image from 'next/image'
import Link from 'next/link'

// i18n
import { useTranslation, useLanguageQuery, LanguageSwitcher } from 'next-export-i18n';

// React Router
import { useRouter } from 'next/router'
import MinecraftMenu from "./components/Menu/MinecraftMenu"

// Font Awesome
import { faDiscord, faGit, faMastodon, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBook, faUser, faServer, faHouseUser, faHeart } from '@fortawesome/free-solid-svg-icons'

export default function Index(props) {
  const { t } = useTranslation();
  const [query] = useLanguageQuery();
  return (
    <>
      <Layout title={t('home')}>
        <div className="my-9 text-center">
          <div className="m-10">
          <Image
              src         = "/images/avatar_riru.png"
              alt         = "yude's avatar"
              width       = {200}
              height      = {200}
              unoptimized = {true}
          />
          </div>
          
          {/* Index menu */}
          <div className="grid grid-cols-3 gap-10">
            <FAMenu dest="/profile" icon={faUser} />
            <FAMenu dest="/server" icon={faServer} />
            <FAMenu dest="/house" icon={faHouseUser} />
            <FAMenu dest="https://scrapbox.io/yude" icon={faBook} />
            <FAMenu dest="https://discord.gg/X6srY7X" icon={faDiscord} />          
            <FAMenu dest="https://github.com/yudejp" icon={faGithub} />
            <FAMenu dest="https://git.yude.jp" icon={faGit} />
            <MinecraftMenu />
            <FAMenu dest="/mutual" icon={faHeart} />
          </div>
          
          {/* Banner */}
          <div className="mx-auto mt-10">
            <BlueRibbon />
            <HappyBusy />
          </div>
          
          {/* Avatar by */}
          <p className="mt-3 text-sm font-bold text-gray-900 dark:text-gray-400">{t('common:icon_1')}<Link href="https://twitter.com/R_I_R_U_"><a className="hover:underline">梨留りる {t('common:icon_2')}</a></Link></p>
        </div>
      </Layout>
    </>
  )
}
