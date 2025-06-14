import Image from 'next/image'
import React from 'react'

const ChordIcon = ({height, width}: {height: any, width: any}) => {
    return (
        <>
            <Image
                src="/icons/echo.png"
                alt='echo logo'
                width={width}
                height={height}
                className='hidden dark:flex'
            />
            <Image
                src="/icons/echo_black.png"
                alt='echo logo'
                width={width}
                height={height}
                className='flex dark:hidden'
            />
        </>
    )
}

export default ChordIcon