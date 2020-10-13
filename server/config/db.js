const mysql = require('mysql');

require('dotenv').config();

const config = {
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  charset: process.env.MYSQL_CHARSET,
  connectionLimit: 100,
};

const pool = mysql.createPool(config);

exports.pool = pool;
