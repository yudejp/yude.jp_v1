// Next.js
import Link from 'next/link'

const HappyBusy = (props) => {
  return (
    <Link href="https://sites.google.com/site/happybusy/">
        <a>
          <img
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