const nextTranslate = require('next-translate')

module.exports = nextTranslate({
    i18n: {
      locales: ['ja', 'en'],
      defaultLocale: 'ja',
    },
    images: {
      domains: ['mackerel.io'],
    },
  })