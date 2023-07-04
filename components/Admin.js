import { useEffect, useState } from 'react';

const AdminPanel = () => {
    const [title, setTitle] = useState('');
    const [headerImage, setHeaderImage] = useState('');
    const [header, setHeader] = useState('');
    const [description, setDescription] = useState('');
    const [author, setAuthor] = useState('');
    const [date, setDate] = useState('');
    const [blogPosts, setBlogPosts] = useState([]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            title,
            headerImage,
            header,
            description,
            author,
            date,
        };
        try {
            const response = await fetch('/api/blog', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                console.log('Blog post created successfully');
            } else {
                console.error('Failed to create blog post');
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        const fetchBlogPosts = async () => {
            try {
                const response = await fetch('/api/getBlogs');
                const data = await response.json();
                if (response.ok) {
                    setBlogPosts(data.data);
                } else {
                    console.error('Failed to fetch blog posts');
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchBlogPosts();
    }, []);

    const handleToggleFeatured = async (postId, isFeatured) => {
        try {
            const response = await fetch(`/api/blog/${postId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ isFeatured: !isFeatured }),
            });
            if (response.ok) {
                fetchBlogPosts(); // Update the blog post list after toggle
                console.log('Toggle successful');
            } else {
                console.error('Failed to toggle featured status');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto  p-4">
            <div className="mb-4">
                <label htmlFor="title" className="block text-lg mb-1">
                    Title
                </label>
                <input
                    type="text"
                    id="title"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="headerImage" className="block text-lg mb-1">
                    Header Image URL
                </label>
                <input
                    type="text"
                    id="headerImage"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    placeholder="Header Image URL"
                    value={headerImage}
                    onChange={(e) => setHeaderImage(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="header" className="block text-lg mb-1">
                    Header
                </label>
                <textarea
                    id="header"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    placeholder="Header"
                    value={header}
                    onChange={(e) => setHeader(e.target.value)}
                ></textarea>
            </div>
            <div className="mb-4">
                <label htmlFor="description" className="block text-lg mb-1">
                    Description
                </label>
                <textarea
                    id="description"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>
            </div>
            <div className="mb-4">
                <label htmlFor="author" className="block text-lg mb-1">
                    Author
                </label>
                <input
                    type="text"
                    id="author"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    placeholder="Author"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="date" className="block text-lg mb-1">
                    Date
                </label>
                <input
                    type="date"
                    id="date"
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    placeholder="Date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
            </div>
            <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
                Publish
            </button>
            <h1 className='font-nice text-2xl pt-4'>Set Posts as Featured</h1>
            {blogPosts.map((blogPost) => (
                <div key={blogPost._id} className="flex items-center mb-2">
                    <input
                        type="checkbox"
                        checked={blogPost.isFeatured}
                        onChange={() => handleToggleFeatured(blogPost._id, blogPost.isFeatured)}
                        className="mr-2"
                    />
                    <p className="text-lg">{blogPost.title}</p>
                    <span>{blogPost.header}</span>
                </div>
            ))}
        </form>
    );
};

export default AdminPanel;
