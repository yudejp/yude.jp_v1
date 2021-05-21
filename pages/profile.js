import Layout from "./components/Layout"
import Navbar from "./components/Navbar"
import useTranslation from 'next-translate/useTranslation'
import { faDiscord, faTwitter, faGithub, faKeybase, faInstagram, faMastodon, faSteam } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faBirthdayCake, faMapPin, faSchool, faPhone, faInfo, faKey, faDownload, faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import Image from 'next/image'

import { useRouter } from 'next/router'

export default function About(props) {
  const router = useRouter()
  const { locale, locales, defaultLocale, pathname } = router
  const { t, lang } = useTranslation("profile")
  const about = t('about')
  const desc = t('desc')
  const school = t('school')
  const contact = t('contact')
  const link_all = t('link_all')
  const link_all_late = t('link_all_late')
  const location = t('location')
  const here = t('here')
  const mail = t('mail')
  const belongs = t('belongs')
  const hiroshima = t('hiroshima')
  const birth = t('birth')
  const date = t('date')
  const more = t('more')
  const grade = t('grade')
  const icon_1 = t('icon_1')
  const icon_2 = t('icon_2')
  const keys = t('keys')
  const download = t('download')
  const fingerprint = t('fingerprint')
  const view = t('view')

  return (

    <Layout title={about}>
      <Navbar />
      <div className="my-9 mx-8">

        {
         // Heading
        }
        <div className="mb-5 flex justify-center">
          <div>
          <Image
            className   = "object-contain rounded-full animate-pulse hover:animate-rumble"
            src         = "/static/images/avatar.png"
            alt         = "yude's avatar"
            width       = {200}
            height      = {200}
            unoptimized = {true}
        />
          <p className="text-center text-4xl subpixel-antialiased">yude</p>
          </div>
        </div>
        
        {
         // Description 
        }
        <div className="container mx-auto max-w-3xl">
        <div className="text-left">
            <p className="text-2xl"><FontAwesomeIcon icon={faInfo} className="w-5 h-5 inline"/> {desc}</p>
        </div>
        <div className="my-2 text-left grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 break-words">
          <div>
            <FontAwesomeIcon icon={faSchool} className="w-5 h-5 inline"/>
            <p className="inline ml-4">{belongs}</p>
            <p className="ml-9">{school}</p>
            <p className="ml-9">{grade}</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faBirthdayCake} className="w-5 h-5 inline"/>
            <p className="inline ml-4">{birth}</p>
            <p className="ml-9">{date}</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faMapPin} className="w-5 h-5 inline"/>
            <p className="inline ml-4">{location}</p>
            <p className="ml-9">{hiroshima}</p>
          </div>
        </div>

        {
         // Contact 
        }
        <div className="text-left my-6">
            <p className="text-2xl"><FontAwesomeIcon icon={faPhone} className="w-5 h-5 inline"/> {contact}</p>
        </div>
        <div className="my-2 grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 justify-items-center gap-y-6">
          <div className="hover:underline">
            <Link href="https://twitter.com/yude_jp">
            <a>
            <FontAwesomeIcon icon={faTwitter} className="w-7 h-7 inline lg:w-10 lg:h-10 md:w-7 md:h-7"/>
            <p className="font-mono text-xl">@yude_jp</p>
            </a>
            </Link>
          </div>
          <div className="hover:underline">
            <a>
            <FontAwesomeIcon icon={faDiscord} className="w-7 h-7 inline lg:w-10 lg:h-10 md:w-7 md:h-7"/>
            <p className="font-mono text-xl">yude#3205</p>
            </a>
          </div>
          <div className="hover:underline">
            <Link href="mailto:i@yude.jp">
            <a>
            <FontAwesomeIcon icon={faEnvelope} className="w-7 h-7 inline lg:w-10 lg:h-10 md:w-7 md:h-7"/>
            <p className="font-mono text-xl">i@yude.jp</p>
            </a>
            </Link>
          </div>
          <div className="hover:underline">
            <Link href="https://github.com/yude">
            <a>
            <FontAwesomeIcon icon={faGithub} className="w-7 h-7 inline lg:w-10 lg:h-10 md:w-7 md:h-7"/>
            <p className="font-mono text-xl">yude</p>
            </a>
            </Link>
          </div>
          <div className="hover:underline">
            <Link href="https://mstdn.yude.jp/@yude">
            <a>
            <FontAwesomeIcon icon={faMastodon} className="w-7 h-7 inline lg:w-10 lg:h-10 md:w-7 md:h-7"/>
            <p className="font-mono text-xl">@yude@mstdn.yude.jp</p>
            </a>
            </Link>
          </div>
          <div className="hover:underline">
            <Link href="https://keybase.io/yude">
            <a>
            <FontAwesomeIcon icon={faKeybase} className="w-7 h-7 inline lg:w-10 lg:h-10 md:w-7 md:h-7"/>
            <p className="font-mono text-xl">yude</p>
            </a>
            </Link>
          </div>
          <div className="hover:underline">
            <Link href="https://instagram.com/yude.jp">
            <a>
            <FontAwesomeIcon icon={faInstagram} className="w-7 h-7 inline lg:w-10 lg:h-10 md:w-7 md:h-7"/>
            <p className="font-mono text-xl">yude.jp</p>
            </a>
            </Link>
          </div>
          <div className="hover:underline">
            <Link href="https://steamcommunity.com/id/yudejp">
            <a>
            <FontAwesomeIcon icon={faSteam} className="w-7 h-7 inline lg:w-10 lg:h-10 md:w-7 md:h-7"/>
            <p className="font-mono text-xl">id/yudejp</p>
            </a>
            </Link>
          </div>
        </div>

        {
         // Keys
        }
        <div className="text-left my-6">
            <p className="text-2xl"><FontAwesomeIcon icon={faKey} className="w-5 h-5 inline"/> {keys}</p>
          <ul className="list-disc mx-5 my-2">
          <li>
            <span className="font-bold">GPG&nbsp;</span>
            <Link href="/static/yudejp.gpg">
              <a className="hover:underline">
                <FontAwesomeIcon icon={faDownload} className="w-5 h-5 inline"/>&nbsp;
                {download}
              </a>
            </Link>
            <p>{fingerprint}:</p>
            <div className="w-full overflow-x-auto ...">
              <div className="whitespace-nowrap ...">
                3745 F270 DB4E 8975 6B07  62BE EB0F E5D9 25C4 A968
                </div>
            </div>
          </li>
          <li>
            <span className="font-bold">SSH&nbsp;</span>
            <Link href="https://github.com/yude.keys">
              <a className="hover:underline">
                <FontAwesomeIcon icon={faEye} className="w-5 h-5 inline"/>&nbsp;
                {view}
              </a>
            </Link>
            <p>{fingerprint}:</p>
            <div className="w-full overflow-x-auto ...">
              <div className="whitespace-nowrap ...">
                2048 SHA256:xwSL4DORWmroWdC6P0GU1m1yZl/cXqjo9rCCWqqO+Dc
              </div>
            </div>
          </li>
            </ul>
        </div>
        

        <div>
        </div>
      </div>
        <Link href="https://scrapbox.io/yude/%E3%82%A2%E3%82%AB%E3%82%A6%E3%83%B3%E3%83%88">
            <button className="border border-transparent rounded-md shadow-sm text-sm font-medium mt-3 text-white bg-indigo-800 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 p-3 w-60">{more}</button>
        </Link>
        <p className="mt-3 text-sm font-bold mb-2 text-gray-900 dark:text-gray-400">{icon_1}<Link href="https://twitter.com/xmnts"><a className="hover:underline">Minkasy {icon_2}</a></Link></p>
      </div>
    </Layout>
  )
}