// Next.js
import Link from 'next/link'

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = (props) => {
    const { icon, dest, caption } = props
    return (
        <div className="hover:underline">
            <Link href={{ pathname: dest }}>
                <a>
                    <FontAwesomeIcon icon={icon} size="5x" className="w-9 h-9 fill-current inline transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110" />
                    <p className="font-mono text-xl">{caption}</p>
                </a>
            </Link>
        </div>
    )
}

export default Contact