import connectDB from '../../../utils/connectDB';
import BlogPost from '../../../models/BlogPost';

// Connect to MongoDB
connectDB();

export default async function handler(req, res) {
  const {
    query: { postId },
    method,
  } = req;

  switch (method) {
    case 'PUT':
      try {
        const blogPost = await BlogPost.findById(postId);
        if (!blogPost) {
          return res.status(404).json({ message: 'Blog post not found' });
        }

        const { isFeatured } = req.body;

        blogPost.isFeatured = isFeatured;
        await blogPost.save();

        res.status(200).json({ success: true, data: blogPost });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(404).json({ message: 'Not found' });
      break;
  }
}
