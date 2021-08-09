// Next.js
import Link from 'next/link'

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = (props) => {
    const { icon, dest, caption } = props
    return (
        <div className="hover:underline">
            <Link href={`${dest}`}>
                <a>
                    <FontAwesomeIcon icon={icon} className="w-7 h-7 inline lg:w-10 lg:h-10 md:w-7 md:h-7"/>
                    <p className="font-mono text-xl">{caption}</p>
                </a>
            </Link>
        </div>
    )
}

export default Contact