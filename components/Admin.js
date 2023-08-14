import { useEffect, useState } from 'react';
import { FiEye } from 'react-icons/fi';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import { CloudinaryContext, Image, Transformation } from 'cloudinary-react';
import axios from 'axios';

const AdminPanel = () => {
    const [title, setTitle] = useState('');
    const [headerImage, setHeaderImage] = useState('');
    const [header, setHeader] = useState('');
    const [description, setDescription] = useState('');
    const [isUploadingImage, setIsUploadingImage] = useState(false);
    const [isUploadingVideo, setIsUploadingVideo] = useState(false);
    const [videoUrl, setVideoUrl] = useState('');
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
            videoUrl,
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
        

    const handleDelete = async (postId) => {
        try {
            const response = await fetch(`/api/blog/${postId}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                fetchBlogPosts(); // Update the blog post list after deletion
                console.log('Blog post deleted successfully');
            } else {
                console.error('Failed to delete blog post');
            }
        } catch (error) {
            console.error(error);
        }
    };


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
    const totalViews = blogPosts.reduce((sum, post) => sum + post.views, 0);

    const handleImageUpload = (event) => {
        setIsUploadingImage(true);

        const file = event.target.files[0];
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'ml_default'); // Replace with your actual upload preset

        axios
            .post('https://api.cloudinary.com/v1_1/dxzk8nzfd/image/upload', formData)
            .then((response) => {
                const imageUrl = response.data.secure_url;
                setHeaderImage(imageUrl);
                setIsUploadingImage(false); // Done uploading, set loader to false
            })
            .catch((error) => {
                console.error(error);
                setIsUploadingImage(false); // Error occurred, set loader to false
            });
    };

    const handleVideoUpload = (event) => {
        setIsUploadingVideo(true);

        const file = event.target.files[0];
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'ml_default'); // Replace with your actual upload preset

        axios
            .post('https://api.cloudinary.com/v1_1/dxzk8nzfd/video/upload', formData)
            .then((response) => {
                const videoUrl = response.data.secure_url;
                setVideoUrl(videoUrl);
                setIsUploadingVideo(false); // Done uploading, set loader to false
            })
            .catch((error) => {
                console.error(error);
                setIsUploadingVideo(false); // Error occurred, set loader to false
            });
    };


    return (
        <div>
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
                <h1 cl>Image Upload</h1>
                    <CloudinaryContext cloudName="your-cloud-name">
                        {headerImage && (
                            <Image publicId={headerImage}>
                                <Transformation width="300" crop="scale" />
                            </Image>
                        )}
                        {isUploadingImage && <div className="loader">Uploading...</div>}
                        <input
                            type="file"
                            onChange={(event) => handleImageUpload(event)}
                            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                            accept="image/*"
                        />
                    </CloudinaryContext>

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
                    <MdEditor
                        value={description}
                        style={{ height: '400px' }} // Adjust the height as needed
                        renderHTML={(text) => <div dangerouslySetInnerHTML={{ __html: text }} />}
                        onChange={(e) => setDescription(e.text)}
                    />
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
                <label>Video Upload</label>
                <input
                    type="file"
                    onChange={(event) => handleVideoUpload(event)}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    accept="video/*"
                />
                {isUploadingVideo && <div className="loader">Uploading...</div>}
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
                    disabled={isUploadingImage} // Disable the button when uploading
                >
                    {isUploadingImage ? 'Uploading...' : 'Publish'}
                </button>
            </form>
            <div>
                <h1 className='font-nice text-4xl pt-4'>Set Posts as Featured</h1>
                <h1 className='font-cool p-6 text-4xl flex gap-2 pt-4'><FiEye /> Total Views : {totalViews}</h1>
                {blogPosts.map((blogPost) => (
                    <div key={blogPost._id} className="flex items-center mb-2">
                        <input
                            type="checkbox"
                            checked={blogPost.isFeatured}
                            onChange={() => handleToggleFeatured(blogPost._id, blogPost.isFeatured)}
                            className="mr-2"
                        />
                        <div className='gap-6 flex'>
                            <div className='border-b-2 flex   border-black'>
                                <p className="text-2xl p-4 ">{blogPost.title}</p>
                                <p className="text-2xl flex gap-4 p-4 "><FiEye />{blogPost.views}</p>
                            </div>

                        </div>
                        <button className='px-4 py-4 border-2 bg-black text-white rounded-full' onClick={() => handleDelete(blogPost._id)}>🗑️</button> {/* Add delete button */}

                    </div>

                ))}
            </div>
        </div>
    );
};

export default AdminPanel;
