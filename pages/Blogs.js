import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import FeaturedBlogCard from '@/components/FeaturedBlog'
import SideBlogCard from '@/components/SideCards'
import BlogFeed from '@/components/BlogFeed'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'

const inter = Inter({ subsets: ['latin'] })

export default function Blogs() {
  return (
    <div className='relative mx-auto'>
      <Navbar />
      <div id='blogs' className='p-4 font-cool text-4xl text-center mt-4 mb-4 text-[#4F200D]'>
        <h1 className='hover:text-orange-500 ml-4  cursor-pointer'>All Articles</h1>
      </div>
      <BlogFeed />
      <Footer />
    </div>
  )
}

