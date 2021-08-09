// React Router
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

// Next.js
import Link from 'next/link'

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FontAwesomeMenu = (props) => {
  const { icon } = props

  return (
    <div>
        <Link>
            <a>
                <FontAwesomeIcon icon={icon} className="w-10 h-10 fill-current inline transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110" />
            </a>
        </Link>
    </div>
  )
}

export default FontAwesomeMenu