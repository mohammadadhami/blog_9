// controllers/blogController.js
import Blog from '../models/blog.js';

export const createBlog = async (req, res) => {
  const { title, content } = req.body;
  const userId = req.user.id;
  try {
    const blog = await Blog.create({ title, content, userId });
    res.status(201).json(blog);
  } catch (error) {
    res.status(500).json({ error: 'Blog creation failed' });
  }
};

export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.findAll();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ error: 'Fetching blogs failed' });
  }
};

export const updateBlog = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  try {
    const blog = await Blog.findByPk(id);
    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    blog.title = title;
    blog.content = content;
    await blog.save();
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ error: 'Updating blog failed' });
  }
};

export const deleteBlog = async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await Blog.findByPk(id);
    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    await blog.destroy();
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: 'Deleting blog failed' });
  }
};
