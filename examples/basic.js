const Cryptopanic = require('./')

let cp = new Cryptopanic({
  auth_token: '<YOUR TOKEN>'
})

cp.currencies(['BTC', 'ETH', 'XRP'])
 .filter('bullish')
 .fetchPosts()
 .then(console.log)
 .catch(console.error)
