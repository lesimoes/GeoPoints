const createCluster = require('./create-clusters');
const { GEO } = require('./enum/coordinates');

let lastZoom;

const listCluster = async () => {
  const clusterData = await createCluster();
  const clustersList = clusterData.getClusters(
    [GEO.WESTLNG, GEO.SOUTHLAT, GEO.EASTLNG, GEO.NORTHLAT],
    10
  );

  return clustersList;
};

const listWithBounds = async ({ zoom, bounds }) => {
  // if (zoom === lastZoom) return clustersList;
  const clusterData = await createCluster();
  console.time();
  const clustersList = clusterData.getClusters(
    [
      Number(bounds.nwLng) || GEO.WESTLNG,
      Number(bounds.seLat) || GEO.SOUTHLAT,
      Number(bounds.seLng) || GEO.EASTLNG,
      Number(bounds.nwLat) || GEO.NORTHLAT,
    ],
    zoom
  );
  console.log('SIZE', clustersList.length, 'Zoom', zoom)
  console.timeEnd();
  lastZoom = zoom;
  return clustersList;
}
module.exports = {
  listCluster,
  listWithBounds,
};
