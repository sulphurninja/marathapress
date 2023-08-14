import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <header className='sticky bg-white shadow-md  grid grid-cols-2 md:grid-cols-3'>
    {/*left */}
    <div className='relative flex p-2'>
        <Link href='/' className='cursor-pointer'>
            <Image
                src="/logo.png"
                height={80}
                width={80}
                className='p-5'
            />
        </Link>
        <a href='/' className='my-auto cursor-pointer  md:text-2xl font-bold text-orange-500 hover:text-orange-700 '>
            <h1 className='font-cool my-auto'>Maratha Club</h1>

        </a>

    </div>

    {/*middle */}
    <nav className='hidden md:inline-flex font-cool  text-xl justify-evenly  my-auto'>
        <Link href='/Blogs'>
            <h1 className='cursor-pointer text-black hover:text-orange-400'>Blogs</h1>

        </Link>
        <Link href='/#about'>
            <h1 className='cursor-pointer text-black hover:text-orange-400'>About</h1>
        </Link>
        <h1 className='cursor-pointer text-white bg-orange-500 px-4  rounded-2xl hover:text-white  hover:bg-green-400'>Follow</h1>
    </nav>

    {/*right */}
    <div className='inline-flex my-auto  mx-auto justify-end md:text-xl'>
        <button className='py-1 cursor-pointer hover:border-black hover:text-black rounded-3xl text-orange-500 border-orange-500  font-cool px-4 border-2 '>Featured</button>
    </div>

</header>
  )
}
