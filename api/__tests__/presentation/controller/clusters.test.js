const { clusters } = require('../../../src/presentation/controller')

const makeSut = () => clusters;

describe('Controller Clusters Suit', () => {
  test('Should returns status code 200', async () => {
    const sut = makeSut();

    const httpResponse = await sut.index();
    expect(httpResponse.statusCode).toBe(200);
  })

  test('Should returns a valid response', async () => {
    const sut = makeSut();

    const { body } = await sut.index();

    expect(typeof body).toBe('object');
    expect(body[0]).toHaveProperty('geometry');
  })

  test('Should returns status code 500 for invalid ClusterId ', async () => {
    const sut = makeSut();
    const clusterId = 0;
    const httpResponse = await sut.getClusterId({
      params: { clusterId },
    });

    expect(httpResponse.statusCode).toBe(500);
  })
});
