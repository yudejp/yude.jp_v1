// Next.js
import Link from 'next/link'

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FontAwesomeMenu = (props) => {
  const { icon, dest, query } = props

  return (
    <div>
        <Link href={{ pathname: dest, query: query }}>
            <a>
                <FontAwesomeIcon icon={icon} size="5x" className="w-9 h-9 fill-current inline transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110" />
            </a>
        </Link>
    </div>
  )
}

export default FontAwesomeMenu