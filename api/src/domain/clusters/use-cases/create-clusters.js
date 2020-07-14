/* eslint-disable arrow-body-style */
const Supercluster = require('supercluster');
const geoPointsRepository = require('../../../infra/geoPoints/geopoints-repository');

let clusters;
const createCluster = async () => {
  if (clusters !== undefined) return clusters;
  const geoJsonData = await geoPointsRepository.findAll();
  clusters = new Supercluster({
    log: false,
    radius: 75,
    maxZoom: 15,
    minZoom: 10,
  });
  clusters.load(geoJsonData.features);

  return clusters;
};
module.exports = createCluster;
