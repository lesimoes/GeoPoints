class ClusterError extends Error {
  constructor (errorMessage) {
    super('Cluster Error');
    this.name = 'Cluster Error';
    this.message = errorMessage;
  }
}

module.exports = ClusterError;

