const express = require('express');
const router = express.Router();

const { encrypt } = require('../utils/encryption');

const loginService = require('../service/LoginService');
const userService = require('../service/UserService');

router.post('/signup', async (req, res) => {
  const { id, password, name, email } = req.body.formData;

  const encryptedPassword = encrypt(password);

  await userService.insertUser({ id, password: encryptedPassword, name, email });
  return res.json({ result: true });
});

router.get('/check_id/:id', async (req, res) => {
  const { id } = req.params;
  const user = await userService.findUserById(id);
  return res.json({ response: user === null });
});

router.get('/check_name/:name', async (req, res) => {
  const { name } = req.params;
  const user = await userService.findUserByName(name);
  return res.json({ response: user === null });
});

router.post('/signin', async (req, res) => {
  const { id, password } = req.body.formData;
  const token = await loginService.getToken(id, password);
  if (!token) {
    return res.send({ message: 'fail' });
  }
  return res.send({ message: 'success', token });
});

// TODO: 테스트용이었어서 확인 후 지울예정
router.post('/auth/verify', (req, res) => {
  const verify = loginService.verifyToken(req.headers.authorization);
  console.log(verify);
  return res.send({ verify });
});

module.exports = router;
