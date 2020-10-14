const jwtService = require('./JwtService');
const userDao = require('../dao/UserDao');
const { decrypt } = require('../utils/encryption');

class LoginService {
  verifyToken(token) {
    return jwtService.verify(token);
  }

  async getToken(id, password) {
    const user = await userDao.findUserById(id);
    let token = null;

    if (user !== null && password === decrypt(user.password)) {
      token = jwtService.create(user);
    }

    return token;
  }
}

module.exports = new LoginService();
