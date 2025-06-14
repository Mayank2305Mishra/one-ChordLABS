import ChordIcon from '@/components/ChordIcon'
import { ModeToggle } from '@/components/ModeToggle'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='fixed top-0 z-50 w-full border-b bg-gradient-to-b dark:from-dark-100 from-light-900 dark:to-dark-100/50  backdrop-blur-3xl'>
            <div className='flex flex-row justify-between py-6 items-center px-4'>
            <Link href='/' className='flex items-center gap-2'>
                <ChordIcon
                    width={40}
                    height={40}
                />
                <p className="text-[30px]  pt-2 font-bold leading-[31.2px] text-dark-100 dark:text-light-900 max-sm:hidden">
                    <span  className="">ChordLABS</span>
                </p>
            </Link>
            <ModeToggle/>
            </div>
        </nav>
    )
}

export default Navbar