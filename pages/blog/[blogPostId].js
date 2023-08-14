
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import axios from 'axios';
import Head from 'next/head';


const BlogPage = () => {
  const router = useRouter();
  const [blogPost, setBlogPost] = useState([]);
  const { blogPostId } = router.query;
  const [viewCount, setViewCount] = useState(0);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`/api/getBlogsById?blogPostId=${blogPostId}`);
        setBlogPost(response.data.data);
        fetchViewCount();
      } catch (error) {
        console.error(error);
      }
    };

    const fetchViewCount = async () => {
      try {
        const response = await axios.get(`/api/views?blogPostId=${blogPostId}`);
        setViewCount(response.data.viewCount);
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
    <Head>
    <meta charset="UTF-8"/>
  <meta name="description" content="Vaavdi Blog"/>
  <meta name="keywords" content={blogPost} />
  <meta name="author" content="Dr.Balasaheb Pingle"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </Head>
      <Navbar />
        <div className='mx-8 text-black'>
          {blogPost.map((wow) => (
            <div key={blogPost._id}>
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
  <h1 className='flex gap-2 text-2xl font-bold'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {viewCount} {/* Display the view count */}
   </h1>
      </div>
    </div>

  );
};

export default BlogPage;
