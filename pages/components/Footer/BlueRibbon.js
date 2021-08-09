// Next.js
import Link from 'next/link'
import Image from 'next/image'

const happybusy = (props) => {
  return (
    <Link href="https://www.eff.org/pages/blue-ribbon-campaign">
      <a>
        <Image
          src="/images/brstrip.gif"
          width={150}
          height={41}
        />
      </a>
    </Link>
  )
}

export default happybusy