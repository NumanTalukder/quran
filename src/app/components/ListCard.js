'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

const ListCard = ({ chapter }) => {
  const router = useRouter()
  const handleClick = () => {
    router.push(`/${chapter.id}`)
  }

  return (
    <div
      role='button'
      onClick={handleClick}
      className='group flex items-center justify-between w-full  p-4 border hover:border-teal-600 rounded-sm cursor-pointer transition-all'
    >
      <div className='flex items-center gap-4'>
        <div className='flex items-center justify-center bg-gray-100 group-hover:bg-teal-600 group-hover:text-white w-10 h-10 text-sm font-semibold rounded-xl '>
          {chapter.id}
        </div>
        <div className='flex-flex-col item-starts'>
          <p className='font-semibold text-sm'>{chapter.name_simple}</p>
          <p className='font-semibold text-xs text-gray-500 group-hover:text-teal-600'>
            {chapter.translated_name.name}
          </p>
        </div>
      </div>
      <div className='flex flex-col items-center text-gray-500'>
        <p>{chapter.name_arabic}</p>
        <p className='font-semibold text-xs group-hover:text-teal-600'>
          {chapter.verses_count} Ayah
        </p>
      </div>
    </div>
  )
}

export default ListCard
