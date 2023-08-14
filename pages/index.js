import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import FeaturedBlogCard from '@/components/FeaturedBlog'
import SideBlogCard from '@/components/SideCards'
import BlogFeed from '@/components/BlogFeed'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import {FiBook, FiBookOpen} from 'react-icons/fi'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='relative mx-auto'>
      <Navbar />
      <Hero />
      <div className='md:p-4 md:text-start text-2xl mt-8 font-cool md:text-4xl text-[#4F200D]'>
        <h1 className=' ml-4 text-4xl md:text-5xl flex gap-2 c'>
        <FiBook/> Latest Posts</h1>
      </div>
      <div className='flex'>
        <FeaturedBlogCard />
        {/* <SideBlogCard /> */}
      </div>

      <div id='blogs' className='p-4 font-cool text-4xl text-center mt-4 mb-4 text-[#4F200D]'>
        <Link href='/Blogs'>
          <h1 className='hover:text-orange-500 ml-4 text-4xl md:text-5xl  my-auto flex gap-2  cursor-pointer'>
          <FiBookOpen/>All Posts</h1>
        </Link>
      </div>
      <BlogFeed />
      <Footer />
    </div>
  )
}

