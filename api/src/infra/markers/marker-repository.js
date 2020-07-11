const markers = require('./example.json');

class MarkerRepository {
  async findOne (position) {
    return markers[position];
  }

  async findAll () {
    return markers;
  }

  async findMany () {
    return markers.slice(50, 300);
  }
}

module.exports = new MarkerRepository();
