const { markers } = require('../../../src/presentation/controller')

const makeSut = () => markers;

describe('Controller Markers Suit', () => {
  test('Should returns status code 200', async () => {
    const sut = makeSut();

    const httpResponse = await sut.index();
    expect(httpResponse.statusCode).toBe(200);
  })

  test('Should returns a valid response', async () => {
    const sut = makeSut();

    const { body } = await sut.index();

    expect(typeof body).toBe('object');
    expect(body[0]).toHaveProperty('name');
    expect(body[0]).toHaveProperty('latitude');
    expect(body[0]).toHaveProperty('longitude');
  })
});
