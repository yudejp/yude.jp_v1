import Layout from "./components/Layout"
import Navbar from "./components/Navbar"
import useTranslation from 'next-translate/useTranslation'
import { faDiscord, faTwitter, faGithub, faKeybase, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faBirthdayCake, faMapPin, faSchool } from '@fortawesome/free-solid-svg-icons'
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
  const link = t('link')
  const link_all = t('link_all')
  const link_all_late = t('link_all_late')
  const location = t('location')
  const here = t('here')
  const mail = t('mail')

  return (

    <Layout title={about}>
      <Navbar />
      <div className="my-9 mx-8">
        {
         // Heading
        }
        <div className="mb-5">
          <p className="text-left text-4xl">{about}</p>
        </div>
        
        {
         // Description 
        }
        <div className="divide-y-2 divide-dashed">
        <div><p className="text-left text-2xl">{desc}</p></div>
        <div className="text-left">
        <p><FontAwesomeIcon icon={faSchool} className="w-5 h-5 inline"/> {school}</p>
        <p><FontAwesomeIcon icon={faMapPin} className="w-5 h-5 inline"/> {location}</p>
        </div>
        </div>

        {
         // Links 
        }
        <div className="divide-y-2 divide-dashed">
        <div><p className="text-left text-2xl">{link}</p></div>
        <div className="text-left">
        <p><FontAwesomeIcon icon={faTwitter} className="w-5 h-5 inline"/> Twitter: <Link href="https://twitter.com/yudejp"><a className="hover:underline">@yudejp</a></Link></p>
        <p><FontAwesomeIcon icon={faDiscord} className="w-5 h-5 inline"/> Discord: <a className="hover:underline">yude#3205</a></p>
        <p><FontAwesomeIcon icon={faEnvelope} className="w-5 h-5 inline"/> {mail}: <Link href="mailto:i@yude.jp"><a className="hover:underline">i@yude.jp</a></Link></p>
        <p><FontAwesomeIcon icon={faGithub} className="w-5 h-5 inline"/> GitHub: <Link href="https://github.com/yudejp"><a className="hover:underline">yudejp</a></Link></p>
        <p><FontAwesomeIcon icon={faKeybase} className="w-5 h-5 inline"/> Keybase: <Link href="https://keybase.io/yude"><a className="hover:underline">yude</a></Link></p>
        <p><FontAwesomeIcon icon={faInstagram} className="w-5 h-5 inline"/> Instagram: <Link href="https://instagram.com/yude.jp"><a className="hover:underline">yude.jp</a></Link></p>
        
        <p>{link_all}<Link href="https://wiki.yude.jp/links"><a className="hover:underline">{here}</a></Link>{link_all_late}</p>
        </div>
        </div>

      </div>
      
    </Layout>
  )
}