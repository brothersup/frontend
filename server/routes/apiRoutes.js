const express = require('express');
const router = express.Router();

const { pool } = require('../config/db');
const { decrypt, encrypt } = require('../encryption');

router.post('/signup', (req, res) => {
  const { id, password, name, email } = req.body.formData;

  const encryptedPassword = encrypt(password);

  pool.query(
    `INSERT INTO user(id, password, name, email) VALUES('${id}', '${encryptedPassword}', '${name}', '${email}')`,
    (error, results, fields) => {
      // TODO: error 처리 해야됨.
      if (error) throw error;
      return res.json({ result: true });
    },
  );
  // return res.json({ response: true });
});

router.get('/check_id/:id', (req, res) => {
  const { id } = req.params;
  pool.query('SELECT id FROM user WHERE id=?', id, (error, results, fields) => {
    if (error) throw error;
    return res.json({ response: results.length === 0 });
  });
});

router.get('/check_name/:name', (req, res) => {
  const { name } = req.params;
  pool.query('SELECT name FROM user WHERE name=?', name, (error, results, fields) => {
    if (error) throw error;
    return res.json({ response: results.length === 0 });
  });
});

module.exports = router;
