const { okResponse, serverError } = require('../helper/http-helper');
const { MarkerError } = require('../errors');
const { listMarkers } = require('../../domain/markers/use-cases');

class Marker {
  async index () {
    try {
      const markers = await listMarkers();
      return okResponse(markers);
    } catch (err) {
      return serverError(new MarkerError('Oopps... There was an error!'));
    }
  }
}
module.exports = new Marker();
