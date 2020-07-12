const checkstatus = {
  get: {
    tags: ['Status'],
    summary: 'Check Status API',
    responses: {
      200: {
        description: 'Returns OK with API is alive!',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              example: { status: 'Ok' },
            },
          },
        },
      },
    },
  },
}
module.exports = { checkstatus };
