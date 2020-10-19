const freeBoardDao = require('../dao/FreeBoardDao');

class FreeBoardService {
  async count() {
    const total = await freeBoardDao.count();
    return total;
  }

  async getBoardList(beginIndex, size) {
    const list = await freeBoardDao.getBoardList(beginIndex, size);
    return list;
  }
}

module.exports = new FreeBoardService();
