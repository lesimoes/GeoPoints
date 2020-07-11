const express = require('express');
const setupRoutes = require('./route');
const setupMiddlewares = require('./middlewares');
const setupSwagger = require('./swagger');

const app = express();
setupSwagger(app);
setupMiddlewares(app);
setupRoutes(app);

module.exports = app;
