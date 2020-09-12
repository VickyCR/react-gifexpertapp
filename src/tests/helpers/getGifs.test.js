const { getGifs } = require('./../../helpers/getGifs');

describe('getGifs helper', () => {
  test('should retrieve 10 random elements', async () => {
    const gifs = await getGifs();

    expect(gifs.length).toBe(10);
  });

  test('should retrieve 10 elements of the category', async () => {
    const gifs = await getGifs('Goku');

    expect(gifs.length).toBe(10);
  });

  test('should retrieve no elements', async () => {
    const gifs = await getGifs('');

    expect(gifs.length).toBe(0);
  });
});
