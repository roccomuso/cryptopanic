const debug = require('debug')('cryptopanic')
const fetch = require('node-fetch')
const qs = require('qs')
const v1 = require('./v1')

class Cryptopanic {
  constructor (opts) {
    this.Api = v1
    debug('Using Cryptopanic.io API version:', this.Api.VERSION)
    this.opts = {
      auth_token: undefined,
      filter: undefined,
      currencies: undefined,
      regions: [],
      page: undefined,
      public: undefined,
      following: undefined
    }
    Object.assign(this.opts, opts)
    return this
  }

  auth (x) {
    this.opts.auth_token = x
    return this
  }

  token (x) { // auth alias
    return this.auth(x)
  }

  filter (f) {
    this.opts.filter = this.Api.AVAILABLE_FILTERS.includes(f) ? f : undefined
    return this
  }

  currencies (c) {
    if (Array.isArray(c)) c = c.map(currency => currency.toUpperCase()).join(',')
    else c = c.toUpperCase()
    this.opts.currencies = c
    return this
  }

  addRegion (reg) {
    if (!this.Api.AVAILABLE_REGIONS.includes(reg)) throw new Error('The region ' + reg + ' is not supported')
    this.opts.regions.push(reg)
    return this
  }

  page (i) {
    this.opts.page = Number(i)
    return this
  }

  public () {
    if (this.opts.following) throw Error('The following filter is a private-only method. Do not use it with public()')
    this.opts.public = !this.opts.public
    return this
  }

  following () {
    if (this.opts.public) throw Error('The following filter is a private-only method. Do not use it with public()')
    this.opts.following = !this.opts.following
    return this
  }

  fetchPosts () {
    let opts = Object.assign({}, this.opts, { regions: this.opts.regions.join(',') })
    let params = qs.stringify(opts, { addQueryPrefix: true })
    let endPoint = `${this.Api.POSTS}${params}`
    debug('Calling', endPoint)
    return fetch(endPoint)
      .then(res => res.json())
      .then(res => Promise.resolve(res.results))
  }

  fetchPortfolio () {
    let {auth_token, public: pub} = this.opts
    if (pub) throw Error('Portfolio is a private-only method. Do not use public()')
    let params = qs.stringify({auth_token}, { addQueryPrefix: true })
    let endPoint = `${this.Api.PORTFOLIO}${params}`
    debug('Calling', endPoint)
    return fetch(endPoint)
      .then(res => res.json())
      .then(res => Promise.resolve(res))
  }

  version () {
    return this.Api.VERSION
  }
}

module.exports = Cryptopanic
