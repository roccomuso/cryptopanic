
const HOST = 'https://cryptopanic.com'

module.exports = {
  VERSION: 'v1',
  POSTS: `${HOST}/api/posts/`,
  PORTFOLIO: `${HOST}/api/portfolio/`,
  AVAILABLE_FILTERS: 'trending|hot|bullish|bearish|important|saved|lol'.split('|'),
  AVAILABLE_REGIONS: 'en|de|es|it|pt|ru'.split('|')
}
