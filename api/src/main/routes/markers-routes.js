/* eslint-disable func-names */
const { Router } = require('express');
const { markers } = require('../../presentation/controller');
const { adaptRoute } = require('../adapter/express-route-adapter');

const router = new Router();
router.get('/markers', adaptRoute(markers.index))
router.get('/markers/clusters', adaptRoute(markers.listClusters))
router.get('/markers/clusters/:clusterId', adaptRoute(markers.getClusterId))

module.exports = function (app) {
  app.use(router);
};
