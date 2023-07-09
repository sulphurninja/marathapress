import connectDB from '../../utils/connectDB';
import BlogPost from '../../models/BlogPost';

connectDB();

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }
    const { blogPostId } = req.query;
    try {
        const blogs = await BlogPost.findById(blogPostId);
        res.status(200).json({ data: [blogs] });
        console.log(blogs)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
}
