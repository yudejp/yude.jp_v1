module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: "class",
  theme: {
    aspectRatio: {
      none: 0,
      square: [1, 1],
      "16/9": [16, 9],
      "4/3": [4, 3],
      "21/9": [21, 9]
    },
    maxHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
    },
    filter: { // defaults to {}
      'none': 'none',
      'grayscale': 'grayscale(1)',
      'invert': 'invert(1)',
      'sepia': 'sepia(1)',
    },
    backdropFilter: { // defaults to {}
      'none': 'none',
      'blur': 'blur(20px)',
    },
    extend: {
      animation:{
        blur: 'blur 2.5s linear infinite',
        heartbeat: 'heartbeat 3s linear infinite',
        rumble: 'rumble 0.1s linear infinite',
      },
      keyframes:{
        rumble: {
          '0%': { transform: 'translate(0, 0)', filter: 'rotate(0)' },
          '16.66%': { transform: 'translate(4px, -2px)', filter: 'rotate(-5deg)' },
          '33.32%': { transform: 'translate(4px, 2px)', filter: 'rotate(5deg)' },
          '49.98%': { transform: 'translate(0, 0)', filter: 'rotate(0)' },
          '66.64%': { transform: 'translate(-4px, -2px)', filter: 'rotate(5deg)' },
          '83.30%': { transform:  'translate(-4px, 2px)', filter: 'rotate(-5deg)' },
          '100%': { transform:  'translate(0, 0)', filter: 'rotate(0)' },
      },
        blur: {
          '0%, 100%': {filter: 'blur(8px)'},
          '50%': {filter: 'blur(0px)'}
        },
        heartbeat: {
          '0%, 100%': {filter: 'drop-shadow(0px 0px 1px  rgb(255, 255, 255))'},
          '50%': {filter: 'drop-shadow(0px 0px 8px  rgb(255, 255, 255))'}
        },
        translate: {
          '1/7': '14.2857143%',
          '2/7': '28.5714286%',
          '3/7': '42.8571429%',
          '4/7': '57.1428571%',
          '5/7': '71.4285714%',
          '6/7': '85.7142857%',
       },
    },
    }
  },
  variants: {
    animation: ['hover', 'focus'],
    filter: ['responsive'],
    backdropFilter: ['responsive'],
    aspectRatio: ['responsive'],
    nightwind: ['group-hover', 'active', 'focus'],
  },
  plugins: [
    require('tailwindcss-filters'),
    require("tailwindcss-responsive-embed"),
    require("tailwindcss-aspect-ratio"),
    require('@tailwindcss/typography'),
  ]
}
