const mysql = require('mysql2/promise');

require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  charset: process.env.MYSQL_CHARSET,
  connectionLimit: 100,
});

exports.pool = pool;