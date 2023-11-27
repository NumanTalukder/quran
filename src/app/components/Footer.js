import React from 'react'

const Footer = () => {
  return (
    <div className='w-full flex items-center justify-between border-t px-4 md:px-20 lg:px-32 py-4'>
      <p>&copy; 2023. All Rights Reserved</p>
      <p className=''>
        Developed by{' '}
        <a
          href='http://fb.com/numan.talukder'
          target='_blank'
          className='text-teal-600'
        >
          Numan
        </a>
      </p>
    </div>
  )
}

export default Footer
