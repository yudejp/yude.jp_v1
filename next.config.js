const rewrites = async () => {
  return [
    {
      source: '/minecraft/players/:uuid(\[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})',
      destination: '/minecraft/players/:uuid'
    },
    {
      source: '/minecraft/players/:ign',
      destination: '/minecraft/lookup/:ign'
    }
  ]
}

module.exports = {
    images: {
      domains: ['mackerel.io', 'mc-heads.net', 'crafatar.com'],
    },
    webpack: function (config) {
      config.module.rules.push({
        test: /\.md$/,
        use: 'raw-loader',
      })
      return config
    },
    async redirects() {
      return [
        {
          source: '/wishlist',
          destination: 'https://www.amazon.jp/hz/wishlist/ls/8WTKCPWKOJ2N?ref_=wl_share',
          permanent: true,
        },
        {
          source: '/scrapbox',
          destination: 'https://scrapbox.io/yude',
          permanent: true,
        }
      ]
    },
    rewrites,
  }