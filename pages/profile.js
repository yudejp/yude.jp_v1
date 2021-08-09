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

  return (

    <Layout title={t('about')}>
      <div className="text-center">

        {
         // Heading
        }
        <div>
          <div className="flex mb-10 justify-center">
          <Image
            className   = "rounded-full hover:animate-rumble z-0 p-15"
            src         = "/images/avatar.png"
            alt         = "yude's avatar"
            width       = {200}
            height      = {200}
            unoptimized = {true}
          />
          <DiscordStatus />
          </div>
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
            <p className="text-2xl"><FontAwesomeIcon icon={faInfo} className="w-5 h-5 inline"/> {t('desc')}</p>
        </div>
        <div className="my-2 text-left grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 break-words">
          <div>
            <FontAwesomeIcon icon={faSchool} className="w-5 h-5 inline"/>
            <p className="inline ml-4">{t('belongs')}</p>
            <p className="ml-9">{t('school')}</p>
            <p className="ml-9">{t('grade')}</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faBirthdayCake} className="w-5 h-5 inline"/>
            <p className="inline ml-4">{t('birth')}</p>
            <p className="ml-9">{t('date')}</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faMapPin} className="w-5 h-5 inline"/>
            <p className="inline ml-4">{t('location')}</p>
            <p className="ml-9">{t('hiroshima')}</p>
          </div>
        </div>

        {
         // Contact 
        }
        <div className="text-left my-6">
            <p className="text-2xl"><FontAwesomeIcon icon={faPhone} className="w-5 h-5 inline"/> {t('contact')}</p>
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
          <div className="hover:underline">
            <Link href="#">
            <a>
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 inline lg:w-12 lg:h-12 md:w-12 md:h-12 fill-current text-black dark:text-white" viewBox="0 0 700 700">
            <g transform="translate(-100.000000,900.000000) scale(0.100000,-0.100000)" fill="#FFFFF">
            <path d="M2965 8314 c-481 -86 -868 -442 -990 -910 -44 -169 -47 -268 -42
            -1579 3 -1204 4 -1232 24 -1325 111 -501 467 -858 973 -976 66 -15 150 -18
            691 -21 560 -4 618 -3 633 12 15 15 16 208 16 2396 0 1622 -3 2386 -10 2400
            -10 18 -27 19 -613 18 -476 -1 -619 -4 -682 -15z m905 -2400 l0 -2026 -407 5
            c-375 4 -415 6 -490 25 -322 83 -561 331 -628 654 -22 101 -22 2589 -1 2688
            60 281 255 514 518 619 132 53 193 59 621 60 l387 1 0 -2026z"/>
            <path d="M3051 7329 c-63 -12 -159 -60 -210 -105 -105 -91 -157 -220 -149
            -372 4 -79 9 -100 41 -164 47 -97 118 -168 215 -216 67 -33 84 -37 171 -40 79
            -3 107 0 160 18 217 73 348 284 311 500 -43 257 -287 429 -539 379z"/>
            <path d="M4757 8323 c-4 -3 -7 -1087 -7 -2409 0 -2181 1 -2402 16 -2408 27
            -10 803 -6 899 4 406 46 764 293 959 660 25 47 58 126 75 175 63 188 61 138
            61 1575 0 1147 -2 1318 -16 1391 -99 521 -496 914 -1018 1004 -70 12 -178 15
            -526 15 -240 0 -440 -3 -443 -7z m1068 -2178 c156 -41 284 -160 336 -312 33
            -94 32 -232 -1 -318 -61 -158 -181 -269 -335 -310 -250 -65 -516 86 -589 334
            -22 76 -21 204 4 282 75 245 335 389 585 324z"/>
            </g>
            </svg>
            <p className="font-mono text-xl">SW-5543-5143-8814</p>
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
                <FontAwesomeIcon icon={faLink} className="w-5 h-5 inline"/> {t('account')}
              </button>
              </a>
        </Link>
        
        <Link href="https://scrapbox.io/yude/%E3%83%87%E3%83%90%E3%82%A4%E3%82%B9">
                <a>
                <button
                className="bg-pink-600 text-white active:bg-pink-600 mt-3 font-bold text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1       ease-linear transition-all duration-150"
                type="button"
              >
                <FontAwesomeIcon icon={faMobile} className="w-5 h-5 inline"/> {t('device')}
              </button>
              </a>
        </Link>
        
        </div>
        <div>
        </div>
      </div>
        <p className="mt-3 text-sm font-bold text-gray-900 dark:text-gray-400">{t('icon_1')}<Link href="https://twitter.com/xmnts"><a className="hover:underline">Minkasy {t('icon_2')}</a></Link></p>
      </div>
    </Layout>
  )
}