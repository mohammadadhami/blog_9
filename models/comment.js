// models/comment.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import User from './user.js';
import Blog from './blog.js';

const Comment = sequelize.define('Comment', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id'
    }
  },
  blogId: {
    type: DataTypes.INTEGER,
    references: {
      model: Blog,
      key: 'id'
    }
  }
});

Comment.belongsTo(User, { foreignKey: 'userId' });
Comment.belongsTo(Blog, { foreignKey: 'blogId' });
User.hasMany(Comment, { foreignKey: 'userId' });
Blog.hasMany(Comment, { foreignKey: 'blogId' });

export default Comment;
