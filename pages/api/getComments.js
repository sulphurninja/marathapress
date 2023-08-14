import connectDb from '@/utils/connectDB';
import Comment from '@/models/CommentModel'; // Import your Comment model

connectDb(); // Ensure database connection

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { blogPostId } = req.query;

  try {
    const comments = await Comment.find({ blogPostId });
    res.status(200).json({ comments });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}