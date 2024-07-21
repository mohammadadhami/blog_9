// routes/blogRoutes.js
import express from 'express';
import { createBlog, getBlogs, updateBlog, deleteBlog } from '../controllers/blogController.js';
import { authenticate, authorizeAdmin } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/', authenticate, authorizeAdmin, createBlog);
router.get('/', authenticate, getBlogs);
router.put('/:id', authenticate, authorizeAdmin, updateBlog);
router.delete('/:id', authenticate, authorizeAdmin, deleteBlog);

export default router;
