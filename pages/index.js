import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import FeaturedBlogCard from '@/components/FeaturedBlog'
import SideBlogCard from '@/components/SideCards'
import BlogFeed from '@/components/BlogFeed'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
   
      <div className='h-screen max-w-7xl mx-auto '>
      <Navbar />
        <div className='md:flex mt-8  '>
          <div className='absolute '>
            <h1 className='px-8 md:-mt-4 -mt-4 text-[#000000] font-bold text-3xl font-nice '>Featured Post</h1>
          </div>
          <div className='md:flex gap-x-16 pt-2'>
            <FeaturedBlogCard />

            <SideBlogCard />
          </div>
          <section className='w-[100%] h-full absolute md:mt-[70%]  lg:mt-[45%] mt-[5%]  '>
            <h1 className='text-black font-bold text-center text-4xl pb-8 font-nice'>
              All Posts
            </h1>
            <BlogFeed />
           
            <Footer/>

      
          </section>
         
        </div>
      </div>
    </>
  )
}
