const createCluster = require('./create-clusters');
const { GEO } = require('./enum/coordinates');

let lastZoom;
const clusterCache = [];
let clustersList;
const listCluster = async () => {
  const clusterData = await createCluster();
  clustersList = clusterData.getClusters(
    [GEO.WESTLNG, GEO.SOUTHLAT, GEO.EASTLNG, GEO.NORTHLAT],
    10
  );

  return clustersList;
};

const listWithBounds = async ({ zoom, bounds }) => {
  const clusterData = await createCluster();
  if (lastZoom === zoom) return clustersList;
  if (clusterCache[zoom] !== undefined) return clusterCache[zoom];
  clustersList = clusterData.getClusters(
    [
      Number(bounds.nwLng) || GEO.WESTLNG,
      Number(bounds.seLat) || GEO.SOUTHLAT,
      Number(bounds.seLng) || GEO.EASTLNG,
      Number(bounds.nwLat) || GEO.NORTHLAT,
    ],
    zoom
  );
  lastZoom = zoom;
  clusterCache[zoom] = clustersList;
  return clustersList
}
module.exports = {
  listCluster,
  listWithBounds,
};
