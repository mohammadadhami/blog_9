// config/database.js
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('blog_9', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

export default sequelize;
