// pages/api/submitComment.js
import connectDb from '../../utils/connectDB';
import Comment from '../../models/CommentModel';
import BlogPost from '../../models/BlogPost';

connectDb();

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { name, text } = req.body;
    const { blogPostId } = req.query; // Extract blogPostId from the URL query

    try {
        const blogPost = await BlogPost.findById(blogPostId);
        if (!blogPost) {
            return res.status(404).json({ message: 'Blog post not found' });
        }

        const newComment = new Comment({
            name,
            text,
            blogPost: blogPostId,
        });

        await newComment.save();
        await blogPost.updateOne({ $push: { comments: newComment } });
        await blogPost.save();

        res.status(201).json({ message: 'Comment added successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}
