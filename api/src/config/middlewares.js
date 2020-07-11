const { contentType, bodyParser, cors } = require('../main/middlewares');

// eslint-disable-next-line func-names
module.exports = function (app) {
  app.use(contentType);
  app.use(bodyParser);
  app.use(cors);
};
