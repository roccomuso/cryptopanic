const Cryptopanic = require('../')
const assert = require('assert')

const token = process.env.AUTH_TOKEN
assert(token, 'Provide a AUTH_TOKEN=... through env')

let cp = new Cryptopanic({
  auth_token: token
})

cp.currencies(['BTC', 'ETH', 'XRP'])
  .filter('bullish')
  .addRegion('en')
  .addRegion('it')
  .fetchPosts()
  .then(console.log)
  .catch(console.error)
