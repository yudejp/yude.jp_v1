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
  })