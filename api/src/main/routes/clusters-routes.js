/* eslint-disable func-names */
const { Router } = require('express');
const { clusters } = require('../../presentation/controller');
const { adaptRoute } = require('../adapter/express-route-adapter');

const router = new Router();
router.get('/clusters', adaptRoute(clusters.index))
router.get('/clusters/bounds?', adaptRoute(clusters.listParams))
router.get('/clusters/:clusterId', adaptRoute(clusters.getClusterId))

module.exports = function (app) {
  app.use(router);
};
