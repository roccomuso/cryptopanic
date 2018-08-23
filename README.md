# cryptopanic [![NPM Version](https://img.shields.io/npm/v/cryptopanic.svg)](https://www.npmjs.com/package/cryptopanic) ![node](https://img.shields.io/node/v/cryptopanic.svg) [![Dependency Status](https://david-dm.org/roccomuso/cryptopanic.png)](https://david-dm.org/roccomuso/cryptopanic) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> Node.js unofficial client to CryptoPanic.com API

[CryptoPanic.com](https://cryptopanic.com) is a news aggregator platform indicating impact on price and market for traders and cryptocurrency enthusiasts. Users can vote to mark important, bullish or bearish price signals.

## Install

    npm install --save cryptopanic

## Usage

```javascript
const Cryptopanic = require('cryptopanic')
let cp = new Cryptopanic({auth_token: '<YOUR AUTH TOKEN>'})

cp.currencies(['BTC', 'XRP'])
  .filter('bullish')
  .fetchPosts()
  .then(console.log)
  .catch(console.error)

/* // Sample result:

[   { domain: 'r/Bitcoin',
    votes: { negative: 0, positive: 11, important: 6 },
    source:
     { domain: 'reddit.com',
       title: 'r/Bitcoin Reddit',
       path: 'r/bitcoin' },
    title: 'Bitfinex Decrease BTC Withdrawal Fees By 25%',
    published_at: '2018-03-01T21:00:44.575689Z',
    slug: 'Bitfinex-Decrease-BTC-Withdrawal-Fees-By-25',
    currencies: [ [Object] ],
    id: 1245186,
    created_at: '2018-03-01T21:00:44.575689Z',
    url: 'https://cryptopanic.com/news/1245186/Bitfinex-Decrease-BTC-Withdrawal-Fees-By-25' },
...
]
*/


```

### Methods

\* Get your *auth token* from the [cryptopanic API page](https://cryptopanic.com/about/api/).

- `auth(<string>)`: Add your Auth token.
- `currencies(<Array>)`: Filter by currencies symbol (ex. `BTC`, `ETH`, `XRP`).
- `addRegion(<String>)`: Filter by regions. Available regions: en, de, es, it (Italiano), pt (Português), ru (Русский). You can add multiple regions.
- `filter(<string>)`: You can use any of UI filters using one of this filter: `trending` `hot` `bullish` `bearish` `important` `saved` `lol`.
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
