import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { AiOutlineCalendar } from 'react-icons/ai';
import { FiUser } from 'react-icons/fi';

const FeaturedBlogCard = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch('/api/getBlogs');
        const data = await response.json();
        if (response.ok) {
          setBlogPosts(data.data);
        } else {
          console.error('Failed to fetch blog posts');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchBlogPosts();
  }, []);

  const featuredBlogPosts = blogPosts.filter((blogPost) => blogPost.isFeatured);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.toLocaleString('default', { year: 'numeric' });
    return `${day} ${month} ${year}`;
  };

  return (
    <div className='grid-cols-2 md:grid'>
      {featuredBlogPosts.length > 0 && (
        <motion.div
          key={featuredBlogPosts[0]._id}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          className="bg-white shadow-lg cursor-pointer  rounded-lg overflow-hidden m-8"
        >
          <img
            src={featuredBlogPosts[0].headerImage}
            alt="Featured Blog"
            className=""
          />
          <div className="p-6">
            <h2 className="text-xl text-black font-bold mb-4">{featuredBlogPosts[0].title}</h2>
            <div className='flex'>
              <FiUser className="mr-2" />
              <h2 className="text-md text-black font-bold mb-4">{featuredBlogPosts[0].author}</h2>
            </div>
            <div className='flex'>
              <AiOutlineCalendar className="mr-2" />
              <h2 className="text-sm text-black font-bold flex  mb-4">
                {formatDate(featuredBlogPosts[0].date)}
              </h2>

            </div>
            <p className="text-gray-700 mb-4">{featuredBlogPosts[0].header}</p>
            <p className="text-gray-700 mb-4">{`${featuredBlogPosts[0].description}`.slice(0, 1230)}</p>
            <Link href={`/blog/${featuredBlogPosts[0]._id}`}>
              <button className="bg-[#FF6701] font-nice text-white px-4 py-2 rounded-md">
                अधिक वाचा
              </button>
            </Link>
          </div>
        </motion.div>
      )}
      <div className='grid grid-cols-1 md:grid-cols-2  gap-4'>
        {featuredBlogPosts.slice(1).map((blogPost, index) => (
          <motion.div
            key={blogPost._id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-lg items-center rounded-lg overflow-hidden m-8"
          >
            <img
              src={blogPost.headerImage}
              alt="Side Blog"
              className="w-full h-40"
            />
            <h1 className='font-bold p-4'>{`${blogPost.title}`.slice(0, -1)}...</h1>
            <div className='px-4 flex'>
              <FiUser className="mr-2 " />
              <h2 className="text-xs text-black font-bold mb-4">{featuredBlogPosts[0].author}</h2>
            </div>
            <div className='flex px-4'>
              <AiOutlineCalendar className="mr-2" />
              <h2 className="text-xs text-black font-bold flex  mb-4">
                {formatDate(featuredBlogPosts[0].date)}
              </h2>

            </div>
            <div className='p-5'>
              <Link href={`/blog/${blogPost._id}`}>
                <button className="bg-[#FF6701]  font-nice text-white px-4 py-2 rounded-md">
                  अधिक वाचा
                </button>
              </Link>
            </div>

          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedBlogCard;
