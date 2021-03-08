const nextTranslate = require('next-translate')

module.exports = nextTranslate({
  experimental: {
    darkModeVariant: true
  },
    i18n: {
      // These are all the locales you want to support in
      // your application
      locales: ['ja', 'en'],
      // This is the default locale you want to be used when visiting
      // a non-locale prefixed path e.g. `/hello`
      defaultLocale: 'ja',
    }
  })