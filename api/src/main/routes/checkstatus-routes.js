/* eslint-disable func-names */
const { Router } = require('express');
const { checkStatus } = require('../../presentation/controller');
const { adaptRoute } = require('../adapter/express-route-adapter');

const router = new Router();
router.get('/checkstatus', adaptRoute(checkStatus.index))

module.exports = function (app) {
  app.use(router);
};
