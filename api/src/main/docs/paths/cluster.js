const listClusters = {
  get: {
    tags: ['Clusters'],
    summary: 'GeoJSON Data API',
    responses: {
      200: {
        description: 'Returns an array of objects with Features.',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              example: [
                {
                  type: 'Feature',
                  id: 83131,
                  properties: {
                    cluster: true,
                    cluster_id: 83131,
                    point_count: 25,
                    point_count_abbreviated: 25,
                  },
                  geometry: {
                    type: 'Point',
                    coordinates: [
                      -46.351237665295685,
                      -23.668420412264794,
                    ],
                  },
                },
              ],
            },
          },
        },
      },
    },
  },
}

const getClusterId = {
  get: {
    tags: ['Clusters'],
    summary: 'List GeoJSON Data API',
    parameters: [
      {
        name: 'clusterId',
        in: 'path',
        description: 'Cluster Id',
        required: true,
        schema: {
          type: 'int32',
        },
      },
    ],
    responses: {
      200: {
        description: 'Returns an array of objects with Features for Cluster Id.',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              example: [
                {
                  type: 'Feature',
                  id: 83131,
                  properties: {
                    cluster: true,
                    cluster_id: 83131,
                    point_count: 25,
                    point_count_abbreviated: 25,
                  },
                  geometry: {
                    type: 'Point',
                    coordinates: [
                      -46.351237665295685,
                      -23.668420412264794,
                    ],
                  },
                },
              ],
            },
          },
        },
      },
      400: {
        description: 'Returns an error message with there isnt Cluster Id.',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              example: {
                name: 'Cluster Error',
                message: 'No cluster with the specified id {ID}',
              },
            },
          },
        },
      },
    },
  },
}

const getClusterBounds = {
  get: {
    tags: ['Clusters'],
    summary: 'List Cluster with zoom and bounds API',
    parameters: [
      {
        name: 'ClusterId',
        in: 'query',
        description: 'Zoom value',
        required: true,
        schema: {
          type: 'int32',
        },
      },
      {
        name: 'swLng',
        in: 'query',
        description: 'SouthWest Longitute',
        required: true,
        schema: {
          type: 'double',
        },
      },
      {
        name: 'swLat',
        in: 'query',
        description: 'SouthWest Latitude',
        required: true,
        schema: {
          type: 'double',
        },
      },
      {
        name: 'neLng',
        in: 'query',
        description: 'NorthEast Longitute',
        required: true,
        schema: {
          type: 'double',
        },
      },
      {
        name: 'neLat',
        in: 'query',
        description: 'NorthEast Latitude',
        required: true,
        schema: {
          type: 'double',
        },
      },
    ],
    responses: {
      200: {
        description: 'Returns an array of objects with Features.',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              example: [
                {
                  type: 'Feature',
                  id: 83131,
                  properties: {
                    cluster: true,
                    cluster_id: 83131,
                    point_count: 25,
                    point_count_abbreviated: 25,
                  },
                  geometry: {
                    type: 'Point',
                    coordinates: [
                      -46.351237665295685,
                      -23.668420412264794,
                    ],
                  },
                },
              ],
            },
          },
        },
      },
      400: {
        description: 'Returns an empty array.',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              example: [],
            },
          },
        },
      },
    },
  },
}
module.exports = {
  listClusters,
  getClusterId,
  getClusterBounds,
};
