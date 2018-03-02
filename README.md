# cryptopanic [![NPM Version](https://img.shields.io/npm/v/cryptopanic.svg)](https://www.npmjs.com/package/cryptopanic) ![node](https://img.shields.io/node/v/cryptopanic.svg) [![Dependency Status](https://david-dm.org/roccomuso/cryptopanic.png)](https://david-dm.org/roccomuso/cryptopanic) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> Node.js unofficial client to CryptoPanic.com API

[CryptoPanic.com](https://cryptopanic.com) is a news aggregator platform indicating impact on price and market for traders and cryptocurrency enthusiasts. Users can vote to mark important, bullish or bearish price signals.

## Install

    npm install --save cryptopanic

## Usage

```javascript
const Cryptopanic = require('cryptopanic')
let cp = new Cryptopanic()

cp.currencies(['BTC', 'XRP'])
  .filter('bullish')
  .fetchPosts()
  .then(console.log)
  .catch(console.error)

/* // Sample result:

[ { domain: 'ambcrypto.com',
    votes: { negative: 0, positive: 10, important: 8 },
    source: { domain: 'ambcrypto.com', title: 'AMBCrypto', path: null },
    title: 'Ripple’s xRapid to be used by Cambridge for faster global payments – market sentiment turns bullish!',
    published_at: '2018-03-01T16:51:03Z',
    slug: 'Ripples-xRapid-to-be-used-by-Cambridge-for-faster-global-payments-market-sentiment-turns-bullish',
    currencies: [ [Object] ],
    id: 1244292,
    created_at: '2018-03-01T16:51:03Z',
    url: 'https://cryptopanic.com/news/1244292/Ripples-xRapid-to-be-used-by-Cambridge-for-faster-global-payments-market-sentiment-turns-bullish' },
...
]
*/


```

### Methods

- `auth(...)`: Add your Auth token.
- `currencies([..])`: Filter by currencies symbol (ex. BTC, ETH, XRP).
- `filter()`: You can use any of UI filters using one of this filter: `trending|hot|bullish|bearish|important|saved|lol`.
- `public()`: To enable public API.
- `following()`: Filter only 'Following' feed (private only).
- `fetchPosts()`: Get the posts using your filtering rules and api token.
- `fetchPortfolio()`: Get your portfolio data (private only).
- `version()`: Get API version.

## Debug

To enable debug set the env var `DEBUG=cryptopanic`

# Author

Rocco Musolino ([@roccomuso](https://twitter.com/roccomuso))

# License

MIT
