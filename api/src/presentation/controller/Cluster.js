const { okResponse, serverError } = require('../helper/http-helper');
const { listCluster, createCluster, listClusterBounds } = require('../../domain/clusters/use-cases');
const { ClusterError } = require('../errors');

class Cluster {
  async index () {
    const clusters = await listCluster();

    return okResponse(clusters);
  }

  async listParams ({ query }) {
    const bounds = {
      swLng: query.swLng,
      swLat: query.swLat,
      neLng: query.neLng,
      neLat: query.neLat,
    }
    const clusters = await listClusterBounds({
      zoom: query.zoom,
      bounds,
    });
    return okResponse(clusters);
  }

  async getClusterId ({ params }) {
    const clusterId = Number(params.clusterId);
    const clusters = await createCluster();
    try {
      const clusterData = clusters.getLeaves(clusterId)
      return okResponse(clusterData);
    } catch (err) {
      return serverError(
        new ClusterError(`No cluster with the specified id ${clusterId}`)
      );
    }
  }
}

module.exports = new Cluster();
