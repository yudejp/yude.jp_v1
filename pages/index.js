// Base layout
import Layout from "./components/Layout"

// Menu
import FAMenu from "./components/Menu/FontAwesomeMenu"

// Banner
import BlueRibbon from "./components/Footer/BlueRibbon"
import HappyBusy from "./components/Footer/HappyBusy"

// Next.js
import Link from 'next/link'

// i18n
import { useTranslation, useLanguageQuery } from 'next-export-i18n';

// React Router
import { useRouter } from 'next/router'
import MinecraftMenu from "./components/Menu/MinecraftMenu"

// Font Awesome
import { faDiscord, faGit, faMastodon, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBook, faUser, faServer, faHouseUser, faHeart } from '@fortawesome/free-solid-svg-icons'

export default function Index(props) {
  const { t } = useTranslation();
  const [query] = useLanguageQuery();
  
  if (!query) {
     return <p>Loading...</p>
  } else {
  return (
    <>
      <Layout title={t('home')}>
        <div className="my-9 text-center">
          <div className="m-10">
          <img
              src         = "/images/avatar_riru.png"
              alt         = "yude's avatar"
              width       = {200}
              height      = {200}
          />
          </div>
          
          {/* Index menu */}
          <div className="grid grid-cols-3 gap-10">
            <FAMenu dest="/profile" query={query} icon={faUser} />
            <FAMenu dest="/server" query={query} icon={faServer} />
            <FAMenu dest="/house" query={query} icon={faHouseUser} />
            <FAMenu dest="https://scrapbox.io/yude" query={query} icon={faBook} />
            <FAMenu dest="https://discord.gg/X6srY7X" query={query} icon={faDiscord} />          
            <FAMenu dest="https://github.com/yudejp" query={query} icon={faGithub} />
            <FAMenu dest="https://git.yude.jp" icon={faGit} query={query} />
            <MinecraftMenu query={query} />
            <FAMenu dest="/mutual" icon={faHeart} query={query} />
          </div>
          
          {/* Banner */}
          <div className="mx-auto mt-10">
            <BlueRibbon />
            <HappyBusy />
          </div>
          
          {/* Avatar by */}
          <p className="mt-3 text-sm font-bold text-gray-900 dark:text-gray-400">{t('icon_1')}<Link href="https://twitter.com/R_I_R_U_"><a className="hover:underline">梨留りる {t('icon_2')}</a></Link></p>
        </div>
      </Layout>
    </>
  )
}
}
