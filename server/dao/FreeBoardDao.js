const { pool } = require('../../src/config/db');

class FreeBoardDao {
  async count() {
    const [rows] = await pool.query(`SELECT COUNT(*) AS total FROM free_board`);
    return rows[0].total;
  }

  async getBoardList(beginIndex, size) {
    const query =
      'SELECT fb.board_no, fb.title, fb.content, fb.create_at, fb.update_at, u.user_no, u.id, u.name' +
      ' FROM free_board fb' +
      ' INNER JOIN user u ON (fb.author_no = u.user_no)' +
      ` ORDER BY board_no DESC LIMIT ${beginIndex}, ${size}`;
    const [rows] = await pool.query(query);
    return rows;
  }
}

module.exports = new FreeBoardDao();
