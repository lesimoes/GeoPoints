const httpStatusCode = Object.freeze({
  OK: 200,
  BAD_REQUEST: 500,
  SERVER_ERROR: 400,
})

const httpStatusText = Object({
  OK: 'Ok',
  BAD_REQUEST: 'Bad Request',
  SERVER_ERROR: 'Server Error',
})

module.exports = {
  httpStatusCode,
  httpStatusText,
};
