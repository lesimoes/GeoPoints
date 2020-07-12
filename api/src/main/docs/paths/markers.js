const listMarkers = {
  get: {
    tags: ['Markers'],
    summary: 'JSON Markers API',
    responses: {
      200: {
        description: 'Returns an array of objects with markers.',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              example: [
                {
                  name: 'Place 1',
                  latitude: -23.31509536897005,
                  longitude: -46.57099951314262,
                },
                {
                  name: 'Place 2',
                  latitude: -23.91249270500097,
                  longitude: -47.09606419418101,
                },
              ],
            },
          },
        },
      },
    },
  },
}
module.exports = { listMarkers };
