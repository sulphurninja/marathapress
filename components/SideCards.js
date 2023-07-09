import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const SideBlogCard = () => {
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

  return (
    <div className='md:w-[30%] md:h-[55%]'>
    {featuredBlogPosts.length >= 2 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-lg w-[80%] md:w-[100%] rounded-lg overflow-hidden m-8"
        >
          <img
            src={featuredBlogPosts[1].headerImage}
            alt="Side Blog"
            className="w-full h-full object-cover"
          />
          <h1 className=' font-bold'>{`${featuredBlogPosts[1].header}`.slice(0,-1)}...</h1>
        </motion.div>
      )}
      {featuredBlogPosts.length >= 2 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-lg  w-[80%] md:w-[100%] rounded-lg overflow-hidden m-8"
        >
          <img
            src={featuredBlogPosts[2].headerImage}
            alt="Side Blog"
            className="w-full h-full object-cover"
          />
          <h1 className=' font-bold'>{`${featuredBlogPosts[2].header}`.slice(0,-1)}...</h1>
        </motion.div>
      )}
      
    </div>
  );
};
export default SideBlogCard