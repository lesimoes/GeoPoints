const { markers } = require('../../../src/presentation/controller')

const makeSut = () => markers;

describe('Controller CheckStatus Suit', () => {
  test('Should return 400 if there was a error on markers dataset', async () => {
    const { sut } = makeSut();
    await jest.spyOn(sut, 'index').mockImplementationOnce(() => {
      return new Promise((res, rej) => rej(new Error()))
    })
    const httpResponse = await sut.index();
    expect(httpResponse.statusCode).toBe(500);
  })
});
