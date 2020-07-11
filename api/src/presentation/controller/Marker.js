const { okResponse } = require('../helper/http-helper');
const { listMarkers } = require('../../domain/markers/use-cases');

class Marker {
  async index () {
    const markers = await listMarkers();
    return okResponse(markers);
  }
}
module.exports = new Marker();
