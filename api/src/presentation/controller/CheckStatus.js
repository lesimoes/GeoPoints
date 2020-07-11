const { okResponse } = require('../helper/http-helper');

class CheckStatus {
  async index (request) {
    return okResponse({ status: 'Ok' });
  }
}

module.exports = new CheckStatus();
