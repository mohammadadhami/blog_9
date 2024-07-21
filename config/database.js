// config/database.js
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('freedb_blog_9', 'freedb_adhami', '%3*4eq*@YkH2g42', {
  host: 'sql.freedb.tech',
  port:3306,
  dialect: 'mysql'
});

export default sequelize;
