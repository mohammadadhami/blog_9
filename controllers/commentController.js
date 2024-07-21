// controllers/commentController.js
import Comment from '../models/comment.js';

export const createComment = async (req, res) => {
  const { description, blogId } = req.body;
  const userId = req.user.id;
  try {
    const comment = await Comment.create({ description, userId, blogId });
    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ error: 'Comment creation failed' });
  }
};

export const getComments = async (req, res) => {
  try {
    const comments = await Comment.findAll();
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ error: 'Fetching comments failed' });
  }
};
