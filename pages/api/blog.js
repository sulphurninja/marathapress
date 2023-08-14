import connectDB from '../../utils/connectDB';
import BlogPost from '../../models/BlogPost';

// Connect to MongoDB
connectDB();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Create a new blog post
    const { title, headerImage, header, description, author, videoUrl, date, isFeatured } = req.body;
    try {
      const blogPost = new BlogPost({
        title, 
        headerImage,
        header,
        description,
        author,
        videoUrl,
        date,
        isFeatured,
      });
      await blogPost.save();
      res.status(201).json({ success: true, data: blogPost });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  } else {
    res.status(404).json({ message: 'Not found' });
  }
}
