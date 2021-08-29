import crypto from 'crypto';
import got from 'got';

export class Trader {
  async getPrices(): Promise<void> {
    // get unix time in seconds
    const timestamp = (Math.floor(Date.now() / 1000)).toString();
    const currency = process.env.CURRENCY;

    // set the parameter for the request message
    const req = {
      method: 'GET',
      path: `/v2/exchange-rates?currency=${currency}`,
      body: '',
    };

    const message = timestamp + req.method + req.path + req.body;

    // create a hexadecimal encoded SHA256 signature of the message
    const apiSecret = process.env.COINBASE_API_SECRET || '';
    const apiKey = process.env.COINBASE_API_KEY || '';
    const signature = crypto.createHmac('sha256', apiSecret).update(message).digest('hex');

    // create the request options object
    const options = {
      url: `https://api.coinbase.com${req.path}`,
      headers: {
        'CB-ACCESS-SIGN': signature,
        'CB-ACCESS-TIMESTAMP': timestamp,
        'CB-ACCESS-KEY': apiKey,
        'CB-VERSION': '2015-07-22',
      },
    };

    const response = await got.get(options);

    console.log(JSON.parse(response.body));
  }
}
