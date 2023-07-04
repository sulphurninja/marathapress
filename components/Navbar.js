import React from 'react'

export default function Navbar() {
  return (
    <div className='w-full flex h-[20%] bg-[#FEA82F] '>
      <div className='h-[100%] w-[20%] md:w-[10%]'>
        <img src='/logo.png' className='h-full w-full' />
      </div>
      <div className='mt-12 text-3xl flex  animate-pulse font-bold'>
        <h1 >  मराठा प्रेस </h1>
        <h1 className='text-md font-nice absolute hidden md:block ml-[80%]'>About</h1>
      </div>
    </div>
  )
}
