import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

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

  return (
    <>
      {featuredBlogPosts.length > 0 && (  
        <motion.div
          key={featuredBlogPosts[0]._id}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          className="bg-white shadow-lg cursor-pointer md:w-[50%] rounded-lg overflow-hidden m-8"
        >
          <img  
            src={featuredBlogPosts[0].headerImage}
            alt="Featured Blog"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl text-black font-bold mb-4">{featuredBlogPosts[0].title}</h2>
            <p className="text-gray-700 mb-4">{featuredBlogPosts[0].header}</p>
            <Link href={`/blog/${featuredBlogPosts[0]._id}`}>
            <button  className="bg-[#FF6701] font-nice text-white px-4 py-2 rounded-md">
              अधिक वाचा
            </button>
            </Link>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default FeaturedBlogCard;
