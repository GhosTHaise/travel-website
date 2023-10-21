import { NAV_LINKS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from './Button'

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

                <ul
                    className='hidden h-full gap-12 lg:flex'
                >
                    {
                        NAV_LINKS.map((link) => (
                                <Link 
                                  key={link.key}
                                  href={link.href}
                                  className='regular-16 text-gray-50 flexCenter  cursor-pointer pb-1.5
                                    transition-all hover:font-bold
                                  '
                                  >
                                        {link.label}
                                </Link>
                        ))
                    }
                </ul>
                <div
                    className='lg:flexCenter hidden'
                >
                    <Button 
                        type="button"
                        title="Login"
                        icon="/user.svg"
                        variant="btn_dark_green"
                    />
                </div>
                <Image
                    src="/menu.svg"
                    alt='menu'
                    width={32}
                    height={32}
                    className='inline-block cursor-pointer lg:hidden'
                />
        </nav>
    </header>
  )
}

export default Navbar