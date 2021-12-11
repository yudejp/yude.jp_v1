// Base layout
import Layout from "./components/Layout"

// i18n
import { useTranslation, useLanguageQuery } from 'next-export-i18n';

// Font Awesome
import { faDiscord, faTwitter, faGithub, faKeybase, faInstagram, faMastodon, faSteam, faAmazon } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faBirthdayCake, faMapPin, faSchool, faPhone, faInfo, faLink, faMobile } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Next.js, React
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

// Discord
import DiscordStatus from './components/Discord/DiscordStatus'
import DiscordPlaying from './components/Discord/DiscordPlaying'

// Custom component
import Spotify from './components/Profile/Spotify'
import WakaTime from './components/Profile/WakaTime'
import PublicKeys from './components/Profile/PublicKeys'
import Button from './components/Profile/Button'
import Contact from './components/Profile/Contact'
import NintendoSW from "./components/Profile/NintendoSW"

// next-seo
import { NextSeo } from 'next-seo';

export default function Profile(props) {
  const { t } = useTranslation();
  const [query] = useLanguageQuery();

  return (
    <>
      <NextSeo
              title="yude のプロフィール"
      />
      <Layout title={t('about')}>
        <div className="text-center">
  
          {
           // Heading
          }
          <div>
            <div className="flex mb-10 justify-center">
            <Image
              className   = "rounded-full hover:animate-rumble z-0 p-15"
              src         = "/images/avatar_mel.png"
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
          <div className="my-2 grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2justify-items-center gap-y-6">
            <Contact dest="https://twitter.com/yude_jp" icon={faTwitter} caption="@yude_jp" />
            <Contact dest="#" icon={faDiscord} caption="yude#3205" />
            <Contact dest="mailto:i@yude.jp" icon={faEnvelope} caption="i@yude.jp" />
            <Contact dest="https://github.com/yude" icon={faGithub} caption="yude" />
            <Contact dest="https://mstdn.yude.jp/@yude" icon={faMastodon} caption="@yude@mstdn.yude.jp" />
            <Contact dest="https://keybase.io/yude" icon={faKeybase} caption="yude" />
            <Contact dest="https://instagram.com/yude.jp" icon={faInstagram} caption="yude.jp" />
            <Contact dest="https://steamcommunity.com/id/yudejp" icon={faSteam} caption="id/yudejp" />
            <NintendoSW />
          </div>
          
          {
           // Buttons
          }
          <div className="text-center my-6 space-x-5">
          <WakaTime />
          <PublicKeys />
          <Button dest="https://scrapbox.io/yude/%E3%82%A2%E3%82%AB%E3%82%A6%E3%83%B3%E3%83%88" icon={faLink} caption={t('account')}/>
          <Button dest="https://scrapbox.io/yude/%E3%83%87%E3%83%90%E3%82%A4%E3%82%B9" icon={faMobile} caption={t('device')}/>
          <Button dest="https://www.amazon.jp/hz/wishlist/ls/8WTKCPWKOJ2N?ref_=wl_share" icon={faAmazon} caption={t('wishlist')}/>
          </div>
          
        </div>
          <p className="mt-3 text-sm font-bold text-gray-900 dark:text-gray-400">{t('icon_1')}<Link href="https://twitter.com/xmnts"><a className="hover:underline">Minkasy {t('icon_2')}</a></Link></p>
        </div>
        
      </Layout>
    </>
  )
}