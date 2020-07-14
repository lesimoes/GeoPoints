const { checkStatus } = require('../../../src/presentation/controller')

const makeSut = () => checkStatus;

describe('Controller CheckStatus Suit', () => {
  test('Should return 200 if API is alive', async () => {
    const sut = makeSut();
    const httpResponse = await sut.index();
    expect(httpResponse.statusCode).toBe(200);
  })
});
