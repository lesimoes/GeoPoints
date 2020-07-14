/* eslint-disable arrow-body-style */
const markersRepository = require('../../../infra/markers/marker-repository');

const listMarkers = async () => {
  return markersRepository.findAll();
};
module.exports = listMarkers;
