const jwt = require('jsonwebtoken');
const config = require('../../src/config/jwt');

// TODO: refresh token 공부해서 추가하기.
// https://swalloow.github.io/implement-jwt/ => 참고

class JwtService {
  create(user) {
    const token = jwt.sign(
      {
        id: user.id,
        name: user.name,
        email: user.email,
      },
      config.secret,
      {
        // expiresIn: '1d',
        expiresIn: '2h',
        issuer: 'brothersup',
        subject: 'userInfo',
      },
    );

    return token;
  }

  verify(token) {
    try {
      return jwt.verify(token, config.secret);
    } catch (error) {
      return {
        name: error.name,
        message: error.message,
      };
    }
  }
}

module.exports = new JwtService();
