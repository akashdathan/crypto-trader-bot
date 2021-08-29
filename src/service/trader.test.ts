import { Trader } from './trader';

describe('Trader', () => {
  it('Happy path', async () => {
    const trader = new Trader();

    await trader.getPrices();
  });
});
