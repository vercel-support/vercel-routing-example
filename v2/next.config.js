const basePath = process.env.NODE_ENV === 'production' ? '/v2' : ''

module.exports = {
  basePath: basePath,
  future: {
    webpack5: true
  }
}
