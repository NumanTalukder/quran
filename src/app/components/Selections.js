'use client'

import React, { useState } from 'react'

const Selections = () => {
  const [selected, setSelected] = useState('surah')

  return (
    <section className='w-full flex items-center text-sm tracking-wider gap-5 border-b pb-1'>
      <p
        className={`${
          selected.toLowerCase() === 'surah'
            ? 'underline underline-offset-8'
            : ''
        } cursor-pointer`}
        onClick={() => setSelected('surah')}
      >
        Surah
      </p>
      <p
        className={`
              ${
                selected.toLowerCase() === 'juz'
                  ? 'underline underline-offset-8'
                  : ''
              } 
              cursor-pointer`}
        onClick={() => setSelected('juz')}
      >
        Juz
      </p>
    </section>
  )
}

export default Selections
