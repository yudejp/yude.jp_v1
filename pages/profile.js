import Layout from "./components/Layout"
import Navbar from "./components/Navbar"
import Link from 'next/link'
import Image from 'next/image'

import { useRouter } from 'next/router'

export default function About(props) {
  const router = useRouter()
  const { locale, locales, defaultLocale, pathname } = router

  return (

    <Layout title="ホーム">
      <Navbar />
      <div className="my-9">
        <p>まだできてないわね・・・</p>
      </div>
      
    </Layout>
  )
}