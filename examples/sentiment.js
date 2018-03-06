const sentiment = require('sentiment')
const Cryptopanic = require('cryptopanic')

let cp = new Cryptopanic({auth_token: process.env.TOKEN})

// Use AFINN-165 wordlist and Emoji Sentiment Ranking to perform sentiment analysis

cp.fetchPosts().then((results) => {
  let scores = results.map(({title}) => {
    return {
      title,
      score: sentiment(title).score
    }
  })
  return scores
}).then(console.log)
  .catch(console.error)
