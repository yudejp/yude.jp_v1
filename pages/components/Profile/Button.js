// Next.js
import Link from 'next/link'

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = (props) => {
    const { icon, dest, caption } = props
    return (
        <Link href={{ pathname: dest }}>
            <a>
                <button
                className="bg-pink-600 text-white active:bg-pink-600 mt-3 font-bold text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                >
                <FontAwesomeIcon icon={icon} className="w-5 h-5 inline"/> {caption}
                </button>
            </a>
        </Link>
    )
}

export default Button