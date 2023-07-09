import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <header className="flex justify-between p-5 max-w-7xl mx-auto">
    <div className="flex items-center space-x-5">
        <Link href="/">
            <img className="w-24 object-contain cursor-pointer " src="/logo.png" alt="man reading technology feed, news and walking."  />
        </Link>
        <div className="hidden md:inline-flex items-center space-x-16 ">
        <h1 className='text-2xl font-extrabold hidden md:block lg:inline-flex text-orange-500 '>Maratha Club</h1>
            <a href="/about">About</a>
            <h2 >Contact</h2>
            <h3 className="text-white cursor-pointer bg-orange-500 px-4 py-1 rounded-full">Follow</h3>
        </div>

    </div>
   <div className="flex items-center space-x-5  text-orange-500">
   <h1 className='text-2xl font-extrabold lg:hidden md:hidden text-orange-500 '>Maratha Club</h1>
 
    <h3 className="cursor-pointer"></h3>

    <a href="https://thetechwalk.com/post/blockchain-no-crypto-decentralized-tech-adoption" className="border px-4 py-1 rounded-full cursor-pointer border-orange-500">Featured</a>
   </div>
  
</header>
  )
}
