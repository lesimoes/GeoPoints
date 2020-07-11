const createCluster = require('./create-clusters');
const ListCluster = require('./list-clusters');

module.exports = {
  createCluster,
  listCluster: ListCluster.listCluster.bind(this),
  listClusterBounds: ListCluster.listWithBounds.bind(this),
};

