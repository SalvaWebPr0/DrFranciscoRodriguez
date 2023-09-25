import React from 'react'
import Image from 'next/image'

const Bulb = () => {
  return (
    <div className='absolute -left-16 -bottom-12 rotate-12 mix-blend-color-dodge animate-pulse duration-75 z-10 w-[200px] xl:w-[260px]'>
        <Image src={`/bulb.png`} alt='bulb' width={260} height={260} className='w-full h-full' />
    </div>
  )
}

export default Bulb