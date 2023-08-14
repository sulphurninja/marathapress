
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import axios from 'axios';
import Head from 'next/head';
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';


const formVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const BlogPage = () => {
  const router = useRouter();
  const [blogPost, setBlogPost] = useState([]);
  const { blogPostId } = router.query;
  const [viewCount, setViewCount] = useState(0);
  const [commentName, setCommentName] = useState('');
  const [commentText, setCommentText] = useState('');
  const [commentAdded, setCommentAdded] = useState(false); // New state for comment added feedback
  const [comments, setComments] = useState([]); // State to store comments

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

   // Fetch comments when the blogPostId changes
   const fetchComments = async () => {
    try {
      const response = await axios.get(`/api/getComments?blogPostId=${blogPostId}`);
      setComments(response.data.comments);
    } catch (error) {
      console.error(error);
    }
  };

  if (blogPostId) {
    fetchBlogs();
    fetchComments(); // Call the fetchComments function
  }
}, [blogPostId]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = axios.post(`/api/submitComment?blogPostId=${blogPostId}`, {
        name: commentName,
        text: commentText,
      });

      if (response.status === 201) {
        // Comment added successfully, you might want to update the comments list
        setCommentAdded(true);
        setCommentName('');
        setCommentText('');
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (!blogPostId) {
    return <div className='text-center'>Loading...</div>;
  }

  console.log(blogPost, 'wow');
  console.log(comments, 'comments');

  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta name="description" content="Vaavdi Blog" />
        <meta name="keywords" content={blogPost} />
        <meta name="author" content="Dr.Balasaheb Pingle" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navbar />
      <div className='mx-8 text-black'>
        {blogPost.map((wow) => (
          <div key={blogPost._id}>
            <a className="block rounded-lg overflow-hidden border border-gray-300 hover:border-gray-400 hover:shadow-md">
              <img src={wow.headerImage} alt={wow.title} className="object-cover h-96 w-full" />
              <div className="p-4">
                <h1 className="text-2xl underline font-semibold mb-4">{wow.title}</h1>
                <h2 className="text-lg font-semibold mb-4">{wow.header}</h2>
                <ReactMarkdown>{wow.description}</ReactMarkdown>
                <video src={wow.videoUrl} controls />
                

              </div>
            </a>
             {/* Render previous comments */}
      <div className="mt-4">
        <h3 className="font-cool text-xl mb-2">Previous Comments:</h3>
        <ul>
          {comments.map((comment) => (
            <li key={comment._id}>
              <p>{comment.name}</p>
              <p>{comment.text}</p>
            </li>
          ))}
        </ul>
      </div>
          </div>


        ))}
        
        {/* Comment Form */}
        {commentAdded && (
          <p className="text-green-500 mb-4">
            Comment added successfully!
          </p>
        )}
        <motion.form
          onSubmit={handleCommentSubmit}
          className="mt-8 "
          variants={formVariants}
          initial="hidden"
          animate="visible"
        >
          <h1 className="font-cool text-3xl mb-4">Leave a Comment</h1>
          <div className="mb-4">
            <label htmlFor="commentName" className=" text-lg font-nice font-semibold">
               Name: 
            </label>
            <input
              type="text"
              id="commentName"
              className="w px-4  py-2 w-64 rounded-md border font-nice  focus:outline-none focus:border-orange-500"
              placeholder=" Name"
              value={commentName}
              onChange={(e) => setCommentName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="commentText" className="block text-lg font-nice font-semibold">
              Comment
            </label>
       
            <textarea
              id="commentText"
              className=" px-4 py-2 w-64 rounded-md border focus:outline-none focus:border-orange-500"
              placeholder="Your Comment"
              rows="4"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            />
      
          </div>
          <motion.button
        type="submit"
        className=" bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
      Submit 
      </motion.button>
        </motion.form>

        <div className='flex gap-2 p-5'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <h1 className=' gap-2 text-2xl font-bold'>

            {viewCount} {/* Display the view count */}
          </h1>
        </div>

      </div>
    </div>

  );
};

export default BlogPage;
