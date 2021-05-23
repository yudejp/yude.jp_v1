import Layout from "./components/Layout"
import Navbar from "./components/Navbar"
import Link from 'next/link'
import { faDiscord, faGit, faMastodon, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBlog, faBook, faUser, faServer, faHouseUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'

export default function Index(props) {
  
  // Translation
  const router = useRouter()
  const { locale, locales, defaultLocale, pathname } = router
  const { t, lang } = useTranslation("index")
  const home = t('home')

  return (

    <Layout title={home}>
      <Navbar />
      <div className="my-9">
        <div className="m-10">
        <Image
            src         = "/static/images/avatar.png"
            alt         = "yude's avatar"
            width       = {200}
            height      = {200}
            unoptimized = {true}
        />
        </div>
        <span><Link href="/profile"><a><FontAwesomeIcon icon={faUser} className="w-10 h-10 fill-current inline transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110" /></a></Link></span>
        <span className="ml-4"><Link href="https://blog.yude.jp"><a><FontAwesomeIcon icon={faBlog} className="w-10 h-10 fill-current inline transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110" /></a></Link></span>
        <span className="ml-4"><Link href="https://scrapbox.io/yude"><a><FontAwesomeIcon icon={faBook} className="w-10 h-10 fill-current inline transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110" /></a></Link></span>
        <span className="ml-4"><Link href="https://discord.gg/X6srY7X"><a><FontAwesomeIcon icon={faDiscord} className="w-10 h-10 fill-current inline transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110" /></a></Link></span>
        <span className="ml-4"><Link href="https://github.com/yudejp"><a><FontAwesomeIcon icon={faGithub} className="w-10 h-10 fill-current inline transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110" /></a></Link></span>
        <span className="ml-4"><Link href="https://git.yude.jp"><a><FontAwesomeIcon icon={faGit} className="w-10 h-10 fill-current inline transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110" /></a></Link></span>
        <span className="ml-4"><Link href="https://mstdn.yude.jp"><a><FontAwesomeIcon icon={faMastodon} className="w-10 h-10 fill-current inline transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110" /></a></Link></span>
        <span className="ml-4"><Link href="/status"><a><FontAwesomeIcon icon={faServer} className="w-10 h-10 fill-current inline transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110" /></a></Link></span>
        <span className="ml-4"><Link href="/house"><a><FontAwesomeIcon icon={faHouseUser} className="w-10 h-10 fill-current inline transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110" /></a></Link></span>
        <p></p>
      </div>
      
    </Layout>
  )
}