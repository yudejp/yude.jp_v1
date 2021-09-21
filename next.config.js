const nextTranslate = require('next-translate')

module.exports = nextTranslate({
    i18n: {
      locales: ['ja', 'en'],
      defaultLocale: 'ja',
    },
    images: {
      domains: ['mackerel.io', 'mc-heads.net'],
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
  })