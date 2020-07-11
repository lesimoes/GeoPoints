const checkStatusPath = {
  get: {
    tags: ['Status'],
    summary: 'Health check API',
    response: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/checkstatus',
            },
          },
        },
      },
    },
  },
}
module.exports = checkStatusPath;
