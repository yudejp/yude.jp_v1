// Next.js
import Link from 'next/link'
import Image from 'next/image'

const HappyBusy = (props) => {
  return (
    <Link href="https://sites.google.com/site/happybusy/">
        <a>
          <Image
            src="/images/busy_banner.png"
            width={200}
            height={42}
            alt="時間のないサイト運営者リング"
          />
        </a>
    </Link>
  )
}

export default HappyBusy