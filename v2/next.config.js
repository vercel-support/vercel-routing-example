const basePath = process.env.NODE_ENV === 'production' ? '/v2' : ''

module.exports = {
  basePath: basePath,
  future: {
    webpack5: true
  },
  async rewrites() {
    return {
      fallback: [
        {
          source: '/:path*',
          destination: 'https://vercel-routing-example-v1-cra.vercel-support.app',
        },
      ]
    }
  }
}
