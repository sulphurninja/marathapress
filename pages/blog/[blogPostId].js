
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import axios from 'axios';


const BlogPage = () => {
  const router = useRouter();
  const [blogPost, setBlogPost] = useState([]);
  const { blogPostId } = router.query;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`/api/getBlogsById?blogPostId=${blogPostId}`);
        setBlogPost(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    if (blogPostId) {
      fetchBlogs();
    }
  }, [blogPostId]);

  if (!blogPostId) {
    return <div>Loading...</div>;
  }

  console.log(blogPost, 'wow');

  return (
    <div>
      <Navbar />
      <div className='mx-8 text-black'>
        {blogPost.map((wow) => (
          <div>
            <a className="block rounded-lg overflow-hidden border border-gray-300 hover:border-gray-400 hover:shadow-md">
              <img src={wow.headerImage} alt={wow.title} className="object-cover h-64 w-full" />
              <div className="p-4">
                <h1 className="text-2xl underline font-semibold mb-4">{wow.title}</h1>
                <h2 className="text-lg font-semibold mb-4">{wow.header}</h2>
                {wow.description.split('\n').map((paragraph, index) => (
                  <p key={index} className="text-black -600 text-justify mb-4">{paragraph}</p>
                ))}
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>

  );
};

export default BlogPage;
