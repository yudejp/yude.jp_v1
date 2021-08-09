// Load base layout
import Layout from "./components/Layout"
// Menu
import FontAwesomeMenu from "./components/Menu/FontAwesomeMenu"
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
          <FontAwesomeMenu href="/profile" icon={['fas', 'user']} />
          <FontAwesomeMenu href="/server" icon={['fas', 'server']} />
          <FontAwesomeMenu href="/house" icon={['fas', 'house-user']} />
          <FontAwesomeMenu href="https://scrapbox.io/yude" icon={['fas', 'book']} />
          <FontAwesomeMenu href="https://discord.gg/X6srY7X" icon={['fab', 'discord']} />          
          <FontAwesomeMenu href="https://github.com/yudejp" icon={['fab', 'github']} />
          <FontAwesomeMenu href="https://git.yude.jp" icon={['fab', 'git']} />
          <FontAwesomeMenu href="https://mstdn.yude.jp" icon={['fab', 'mastodon']} />
          <MinecraftMenu />
          <FontAwesomeMenu href="/mutual" icon="faHeart" />
        </div>
        
        <div className="mx-auto mt-10">
          <Link href="https://www.eff.org/pages/blue-ribbon-campaign">
            <a>
              <Image
                src="/images/brstrip.gif"
                width={150}
                height={41}
              />
            </a>
          </Link>
          <Link href="https://sites.google.com/site/happybusy/">
            <a>
              <Image
                src="/images/busy_banner.png"
                width={200}
                height={42}
              />
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  )
}
