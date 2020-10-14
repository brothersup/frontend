const { pool } = require('../../src/config/db');
require('dotenv').config();

class UserDao {
  async findUserById(id) {
    const [rows] = await pool.query(`SELECT * FROM user WHERE id='${id}'`);
    return rows.length === 1 ? rows[0] : null;
  }

  async findUserByName(name) {
    const [rows] = await pool.query(`SELECT * FROM user WHERE name='${name}'`);
    return rows.length === 1 ? rows[0] : null;
  }

  async insertUser(user) {
    const { id, password, name, email } = user;
    await pool.query(
      `INSERT INTO user(id, password, name, email) VALUES('${id}', '${password}', '${name}', '${email}')`,
    );
  }
}

module.exports = new UserDao();
