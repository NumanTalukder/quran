import Image from 'next/image'
import React from 'react'
import { FaSearch } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className='bg-teal-700 flex flex-col items-center justify-center gap-10 w-full mx-auto px-4 py-8'>
      <Image
        src={'/quran_hero.png'}
        width={320}
        height={320}
        alt='quran avatar'
      />
      <div className='relative w-full flex flex-col items-center justify-center md:px-2'>
        <input
          type='text'
          className='w-full md:w-1/2 h-16 px-10 rounded-full'
          placeholder='What do you want to read?'
        />
        {/* <FaSearch size={25} color='gray' className='absolute left-96' /> */}
      </div>
    </div>
  )
}

export default Hero
