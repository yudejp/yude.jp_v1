import Layout from "./components/Layout"
import useTranslation from 'next-translate/useTranslation'
import { faDiscord, faTwitter, faGithub, faKeybase, faInstagram, faMastodon, faSteam } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faBirthdayCake, faMapPin, faSchool, faPhone, faInfo, faLink, faMobile } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import Image from 'next/image'
import DiscordStatus from './components/DiscordStatus'
import { useRouter } from 'next/router'
import DiscordPlaying from './components/DiscordPlaying'
import Spotify from './components/Spotify'
import WakaTime from './components/WakaTime'
import PublicKeys from './components/PublicKeys'

export default function About(props) {
  const router = useRouter()
  const { locale, locales, defaultLocale, pathname } = router
  const { t, lang } = useTranslation("profile")
  const about = t('about')
  const desc = t('desc')
  const school = t('school')
  const contact = t('contact')
  const location = t('location')
  const belongs = t('belongs')
  const hiroshima = t('hiroshima')
  const birth = t('birth')
  const date = t('date')
  const more = t('more')
  const grade = t('grade')
  const icon_1 = t('icon_1')
  const icon_2 = t('icon_2')
  const account = t('account')
  const device = t('device')

  return (

    <Layout title={about}>
      <div className="text-center">

        {
         // Heading
        }
        <div>
          <Image
            className   = "object-contain rounded-full hover:animate-rumble z-0"
            src         = "/static/images/avatar.png"
            alt         = "yude's avatar"
            width       = {200}
            height      = {200}
            unoptimized = {true}
          />
          <DiscordStatus />
          <p className="text-4xl transform -translate-y-4">yude</p>
          <div>
          <DiscordPlaying />
          <Spotify />
          </div>
        </div>
        
        {
         // Description 
        }
        <div>
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
         // Buttons
        }
        <div className="text-center my-6 space-x-5">
        <WakaTime />
        <PublicKeys />
        
        <Link href="https://scrapbox.io/yude/%E3%82%A2%E3%82%AB%E3%82%A6%E3%83%B3%E3%83%88">
                <a>
                <button
                className="bg-pink-600 text-white active:bg-pink-600 mt-3 font-bold text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1       ease-linear transition-all duration-150"
                type="button"
              >
                <FontAwesomeIcon icon={faLink} className="w-5 h-5 inline"/> {account}
              </button>
              </a>
        </Link>
        
        <Link href="https://scrapbox.io/yude/%E3%83%87%E3%83%90%E3%82%A4%E3%82%B9">
                <a>
                <button
                className="bg-pink-600 text-white active:bg-pink-600 mt-3 font-bold text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1       ease-linear transition-all duration-150"
                type="button"
              >
                <FontAwesomeIcon icon={faMobile} className="w-5 h-5 inline"/> {device}
              </button>
              </a>
        </Link>
        
        </div>
        <div>
        </div>
      </div>
        <p className="mt-3 text-sm font-bold text-gray-900 dark:text-gray-400">{icon_1}<Link href="https://twitter.com/xmnts"><a className="hover:underline">Minkasy {icon_2}</a></Link></p>
      </div>
    </Layout>
  )
}