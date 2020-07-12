const markers = require('./example.json');

class MarkerRepository {
  async findOne (position) {
    return markers[position];
  }

  async findAll () {
    return markers;
  }

  async findMany () {
    return markers.slice(0, 1000);
  }
}

module.exports = new MarkerRepository();
