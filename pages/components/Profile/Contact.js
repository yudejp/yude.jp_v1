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
                    <FontAwesomeIcon icon={icon} className="text-3xl inline lg:text-4xl md:w-7 md:h-7"/>
                    <p className="font-mono text-xl">{caption}</p>
                </a>
            </Link>
        </div>
    )
}

export default Contact