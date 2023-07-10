import connectDB from '../../utils/connectDB';
import BlogPost from '../../models/BlogPost';

connectDB();

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { blogPostId } = req.query;
  try {
    // Find the blog post by ID
    const blog = await BlogPost.findById(blogPostId);

    // Increment the view count
    blog.views += 1;
    await blog.save();

    res.status(200).json({ viewCount: blog.views });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
}
