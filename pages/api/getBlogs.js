import connectDB from '../../utils/connectDB';
import BlogPost from '../../models/BlogPost';

// Connect to MongoDB
connectDB();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const blogPosts = await BlogPost.find().sort({ date: -1 });
      res.status(200).json({ success: true, data: blogPosts });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  } else {
    res.status(404).json({ message: 'Not found' });
  }
}
