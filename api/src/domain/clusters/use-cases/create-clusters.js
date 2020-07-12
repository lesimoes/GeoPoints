/* eslint-disable arrow-body-style */
const Supercluster = require('supercluster');
const geoPointsRepository = require('../../../infra/geoPoints/geopoints-repository');

let clusters;

const createCluster = async () => {
  if (clusters !== undefined) return clusters;

  const geoJsonData = await geoPointsRepository.findAll();
  clusters = new Supercluster({
    log: true,
    radius: 60,
    extent: 256,
    maxZoom: 17,
  });
  clusters.load(geoJsonData.features);

  return clusters;
};
module.exports = createCluster;
