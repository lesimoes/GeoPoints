/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
const { Router } = require('express');
const fg = require('fast-glob');

const setupRoute = (app) => {
  const router = Router();
  app.use('/api', router);
  fg.sync('**/src/main/routes/**routes.js')
    .map(async (file) => {
      const route = (await require(`../../${file}`))
      route(router);
    })
}

module.exports = setupRoute
