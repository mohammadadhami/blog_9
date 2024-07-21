// routes/commentRoutes.js
import express from 'express';
import { createComment, getComments } from '../controllers/commentController.js';
import { authenticate } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/', authenticate, createComment);
router.get('/', authenticate, getComments);

export default router;
