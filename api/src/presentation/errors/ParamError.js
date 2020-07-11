class ParamError extends Error {
  constructor (errorMessage) {
    super('Invalid Param Error');
    this.name = 'Invalid Param Error';
    this.message = errorMessage;
  }
}
module.exports = ParamError;
