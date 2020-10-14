const userDao = require('../dao/UserDao');

class UserService {
  async findUserById(id) {
    const user = await userDao.findUserById(id);
    return user;
  }

  async findUserByName(name) {
    const user = await userDao.findUserByName(name);
    return user;
  }

  async insertUser(user) {
    await userDao.insertUser(user);
  }
}

module.exports = new UserService();
