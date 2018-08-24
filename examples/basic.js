const Cryptopanic = require('../')

let cp = new Cryptopanic({
  auth_token: process.env.AUTH_TOKEN
})

cp.currencies(['BTC', 'ETH', 'XRP'])
  .filter('bullish')
  .addRegion('en')
  .addRegion('it')
  .fetchPosts()
  .then(console.log)
  .catch(console.error)
