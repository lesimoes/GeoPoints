const createCluster = require('./create-clusters');
const { GEO } = require('./enum/coordinates');

const listCluster = async () => {
  const clusterData = await createCluster();
  const clustersList = clusterData.getClusters(
    [GEO.WESTLNG, GEO.SOUTHLAT, GEO.EASTLNG, GEO.NORTHLAT],
    10
  );

  return clustersList;
};

const listWithBounds = async ({ zoom, bounds }) => {

  console.log(bounds)
  const clusterData = await createCluster();
  const clustersList = clusterData.getClusters(
    [
      bounds.swLng || GEO.WESTLNG,
      bounds.swLat || GEO.SOUTHLAT,
      bounds.neLng || GEO.EASTLNG,
      bounds.neLat || GEO.NORTHLAT,
    ],
    zoom
  );

  return clustersList;
}
module.exports = {
  listCluster,
  listWithBounds,
};
