import AdminPanel from '@/components/Admin'
import FeaturedBlogCard from '@/components/FeaturedBlog'
import Navbar from '@/components/Navbar'
import SideBlogCard from '@/components/SideCards'
import React from 'react'

export default function admin() {
  return (
    <>
    <Navbar />
    <div className='h-screen w-[90%] mx-auto'>

      <div className='md:flex mt-8  gap-16'>
        <div className='absolute '>
          <h1 className='px-8 md:-mt-4 -mt-4 text-[#000000] font-bold text-3xl font-nice '>Write</h1>
        </div>
        <div className='w-full mt-12 h-full'>
        <AdminPanel/>
        </div>
      </div>
    </div>
  </>
  )
}
