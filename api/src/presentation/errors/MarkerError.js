class MarkerError extends Error {
  constructor (errorMessage) {
    super('Markers Error');
    this.name = 'Markers Error';
    this.message = errorMessage;
  }
}

module.exports = MarkerError;
