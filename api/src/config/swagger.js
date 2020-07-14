const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const {
  getCheckstatus,
  listClusters,
  listMarkers,
  getClusterId,
  getClusterBounds,
} = require('../main/docs/paths');

const options = {
  definition: {
    openapi: '3.0.0',
    servers: [{
      url: 'http://localhost:3000/api',
    }],
    info: {
      title: 'Markers CNTL API',
      version: '1.0.0',
      description: 'Markers API Information',
      contact: {
        name: 'lesimoes',
      },
    },
    tags: [
      { name: 'Status' },
      { name: 'Markers' },
      { name: 'Clusters' },
    ],
    paths: {
      '/checkstatus': getCheckstatus,
      '/clusters': listClusters,
      '/markers': listMarkers,
      '/clusters/:clusterId': getClusterId,
      '/clusters/bounds': getClusterBounds,
    },
  },
  apis: ['../main/routes/*.js'],
};

const swaggerDocs = swaggerJsDoc(options);

module.exports = function (app) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};
