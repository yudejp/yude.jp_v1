// Layout
import Layout from "./components/Layout"

// Menu
import FontAwesomeMenu from "./components/Menu/FontAwesomeMenu"
import MinecraftMenu from "./components/Menu/MinecraftMenu"

// Next.js
import Link from 'next/link'
import Image from 'next/image'

// i18n
import useTranslation from 'next-translate/useTranslation'

// React router
import { useRouter } from 'next/router'

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
        <div><Link href="/minecraft"><a>
        <svg className="fill-current text-black dark:text-white w-10 h-10 inline transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 304.8 304.8">
          <path d="M 39.10262 126.138 L 39.16748 12.39574 L 152.7982 12.33506 L 266.4289 12.27438 L 266.4289 126.0773 L 266.4289 239.8803 L 152.7333 239.8803 L 39.03775 239.8803 L 39.10262 126.138 Z M 260.4857 126.0776 L 260.4857 18.55703 L 152.8628 18.55703 L 45.23985 18.55703 L 45.23985 126.0776 L 45.23985 233.5982 L 152.8628 233.5982 L 260.4857 233.5982 L 260.4857 126.0776 Z M 103.8963 162.9245 L 103.8963 126.0776 L 116.1702 126.0776 L 128.4441 126.0776 L 128.4441 113.8758 L 128.4441 101.674 L 152.8628 101.674 L 177.2814 101.674 L 177.2814 113.8758 L 177.2814 126.0776 L 189.3835 126.0776 L 201.4856 126.0776 L 201.6573 150.5415 C 201.7517 163.9967 201.829 180.5779 201.8291 187.3885 L 201.8293 199.7715 L 189.6869 199.7715 L 177.5446 199.7715 L 177.4776 187.5093 L 177.4106 175.2471 L 152.7982 175.1855 L 128.1857 175.1239 L 128.1857 187.4477 L 128.1857 199.7715 L 116.041 199.7715 L 103.8963 199.7715 L 103.8963 162.9245 Z M 79.34843 77.02888 L 79.34843 52.62534 L 103.7671 52.62534 L 128.1857 52.62534 L 128.1857 77.02888 L 128.1857 101.4324 L 103.7671 101.4324 L 79.34843 101.4324 L 79.34843 77.02888 Z M 177.5398 77.02888 L 177.5398 52.62534 L 201.9585 52.62534 L 226.3771 52.62534 L 226.3771 77.02888 L 226.3771 101.4324 L 201.9585 101.4324 L 177.5398 101.4324 L 177.5398 77.02888 Z"/>
        </svg>
        </a></Link></div>
        
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
