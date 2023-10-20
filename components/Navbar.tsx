import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header>
        <nav className='flexBetween  max-container 
        padding-container relative z-30 py-5'>
            <Link
                className=''
                href={"/"}
            >
                <Image
                    src="/hilink-logo.svg"
                    alt='logo'
                    width={74}
                    height={29}
                />
            </Link>
        </nav>
    </header>
  )
}

export default Navbar