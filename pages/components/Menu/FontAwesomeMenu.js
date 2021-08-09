// Router
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

// Next.js
import Link from 'next/link'

// Load FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fab, fas)

const FontAwesomeMenu = (props) => {
  const { icon, href } = props
  const router = useRouter()

  return (
    <div>
        <Link href={href}>
            <a>
                <FontAwesomeIcon icon={icon} className="w-10 h-10 fill-current inline transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110" />
            </a>
        </Link>
    </div>
  )
}

export default FontAwesomeMenu