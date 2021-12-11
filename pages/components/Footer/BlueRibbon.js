// Next.js
import Link from 'next/link'

const happybusy = (props) => {
  return (
    <Link href="https://www.eff.org/pages/blue-ribbon-campaign">
      <a>
        <img
          src="/images/brstrip.gif"
          width={150}
          height={41}
          alt="EFF Blue Ribbon Campaign"
        />
      </a>
    </Link>
  )
}

export default happybusy