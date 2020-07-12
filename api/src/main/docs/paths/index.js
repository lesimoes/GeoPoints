const { checkstatus } = require('./checkstatus');
const { listMarkers } = require('./markers');
const { listClusters, getClusterId, getClusterBounds } = require('./cluster');

module.exports = {
  getCheckstatus: checkstatus,
  listMarkers,
  listClusters,
  getClusterId,
  getClusterBounds,
};
