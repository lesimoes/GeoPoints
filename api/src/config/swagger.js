const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Markers CNTL API',
      description: 'Markers API Information',
      contact: {
        name: 'lesimoes',
      },
    },
    servers: [{
      url: 'http://localhost:3000/api',
    }],
    tags: [
      { name: 'Health' },
      { name: 'Markers' },
      { name: 'Clusters' },
    ],
  },
  apis: ['../main/routes/*.js'],
}
const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = function (app) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};
