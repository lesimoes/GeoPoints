const GeoJSON = require('geojson');
const markerRepository = require('../markers/marker-repository');

class GeoPoints {
  async findAll () {
    const markers = await markerRepository.findAll();
    const geoJsonData = GeoJSON.parse(markers, {
      Point: ['latitude', 'longitude'],
    });

    return geoJsonData;
  }
}

module.exports = new GeoPoints();

