import Layout from "./components/Layout"
import Link from 'next/link'
import { faDiscord, faGit, faMastodon, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBlog, faBook, faUser, faServer, faHouseUser, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'
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
        <div><Link href="/profile"><a><FontAwesomeIcon icon={faUser} className="w-10 h-10 fill-current inline transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110" /></a></Link></div>
        <div><Link href="/server"><a><FontAwesomeIcon icon={faServer} className="w-10 h-10 fill-current inline transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110" /></a></Link></div>
        <div><Link href="/house"><a><FontAwesomeIcon icon={faHouseUser} className="w-10 h-10 fill-current inline transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110" /></a></Link></div>
        <div><Link href="https://scrapbox.io/yude"><a><FontAwesomeIcon icon={faBook} className="w-10 h-10 fill-current inline transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110" /></a></Link></div>
        <div><Link href="https://discord.gg/X6srY7X"><a><FontAwesomeIcon icon={faDiscord} className="w-10 h-10 fill-current inline transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110" /></a></Link></div>
        <div><Link href="https://matrix.to/#/!oriLSKSTauvVrpdzZX:matrix.org?via=matrix.org"><a>
        <svg version="1.1" viewBox="0 0 27.9 32" className="fill-current text-black dark:text-white w-10 h-10 inline transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110">
         <g transform="translate(-.095 .005)">
          <path d="m27.1 31.2v-30.5h-2.19v-0.732h3.04v32h-3.04v-0.732z"/>
          <path d="m8.23 10.4v1.54h0.044c0.385-0.564 0.893-1.03 1.49-1.37 0.58-0.323 1.25-0.485 1.99-0.485 0.72 0 1.38 0.14 1.97 0.42 0.595 0.279 1.05 0.771 1.36 1.48 0.338-0.5 0.796-0.941 1.38-1.32 0.58-0.383 1.27-0.574 2.06-0.574 0.602 0 1.16 0.074 1.67 0.22 0.514 0.148 0.954 0.383 1.32 0.707 0.366 0.323 0.653 0.746 0.859 1.27 0.205 0.522 0.308 1.15 0.308 1.89v7.63h-3.13v-6.46c0-0.383-0.015-0.743-0.044-1.08-0.0209-0.307-0.103-0.607-0.242-0.882-0.133-0.251-0.336-0.458-0.584-0.596-0.257-0.146-0.606-0.22-1.05-0.22-0.44 0-0.796 0.085-1.07 0.253-0.272 0.17-0.485 0.39-0.639 0.662-0.159 0.287-0.264 0.602-0.308 0.927-0.052 0.347-0.078 0.697-0.078 1.05v6.35h-3.13v-6.4c0-0.338-7e-3 -0.673-0.021-1-0.0114-0.314-0.0749-0.623-0.188-0.916-0.108-0.277-0.3-0.512-0.55-0.673-0.258-0.168-0.636-0.253-1.14-0.253-0.198 0.0083-0.394 0.042-0.584 0.1-0.258 0.0745-0.498 0.202-0.705 0.374-0.228 0.184-0.422 0.449-0.584 0.794-0.161 0.346-0.242 0.798-0.242 1.36v6.62h-3.13v-11.4z"/>
          <path d="m0.936 0.732v30.5h2.19v0.732h-3.04v-32h3.03v0.732z"/>
         </g>
        </svg>
        </a></Link></div>
        <div><Link href="https://github.com/yudejp"><a><FontAwesomeIcon icon={faGithub} className="w-10 h-10 fill-current inline transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110" /></a></Link></div>
        <div><Link href="https://git.yude.jp"><a><FontAwesomeIcon icon={faGit} className="w-10 h-10 fill-current inline transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110" /></a></Link></div>
        <div><Link href="https://mstdn.yude.jp"><a><FontAwesomeIcon icon={faMastodon} className="w-10 h-10 fill-current inline transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110" /></a></Link></div>
        <div><Link href="/minecraft"><a>
        <svg className="fill-current text-black dark:text-white w-10 h-10 inline transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 304.8 304.8">
          <path d="M 39.10262 126.138 L 39.16748 12.39574 L 152.7982 12.33506 L 266.4289 12.27438 L 266.4289 126.0773 L 266.4289 239.8803 L 152.7333 239.8803 L 39.03775 239.8803 L 39.10262 126.138 Z M 260.4857 126.0776 L 260.4857 18.55703 L 152.8628 18.55703 L 45.23985 18.55703 L 45.23985 126.0776 L 45.23985 233.5982 L 152.8628 233.5982 L 260.4857 233.5982 L 260.4857 126.0776 Z M 103.8963 162.9245 L 103.8963 126.0776 L 116.1702 126.0776 L 128.4441 126.0776 L 128.4441 113.8758 L 128.4441 101.674 L 152.8628 101.674 L 177.2814 101.674 L 177.2814 113.8758 L 177.2814 126.0776 L 189.3835 126.0776 L 201.4856 126.0776 L 201.6573 150.5415 C 201.7517 163.9967 201.829 180.5779 201.8291 187.3885 L 201.8293 199.7715 L 189.6869 199.7715 L 177.5446 199.7715 L 177.4776 187.5093 L 177.4106 175.2471 L 152.7982 175.1855 L 128.1857 175.1239 L 128.1857 187.4477 L 128.1857 199.7715 L 116.041 199.7715 L 103.8963 199.7715 L 103.8963 162.9245 Z M 79.34843 77.02888 L 79.34843 52.62534 L 103.7671 52.62534 L 128.1857 52.62534 L 128.1857 77.02888 L 128.1857 101.4324 L 103.7671 101.4324 L 79.34843 101.4324 L 79.34843 77.02888 Z M 177.5398 77.02888 L 177.5398 52.62534 L 201.9585 52.62534 L 226.3771 52.62534 L 226.3771 77.02888 L 226.3771 101.4324 L 201.9585 101.4324 L 177.5398 101.4324 L 177.5398 77.02888 Z"/>
        </svg>
        </a></Link></div>
        <div><Link href="/mutual"><a><FontAwesomeIcon icon={faHeart} className="w-10 h-10 fill-current inline transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110" /></a></Link></div>
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
