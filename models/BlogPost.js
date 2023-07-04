import mongoose from 'mongoose';

const BlogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  headerImage: {
    type: String,
    required: true,
  },
  header: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  isFeatured: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.models.BlogPost || mongoose.model('BlogPost', BlogPostSchema);
