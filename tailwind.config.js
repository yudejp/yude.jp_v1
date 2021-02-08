module.exports = {
  future: {
    purgeLayersByDefault: true,
  },
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: "class", // or 'media' or 'class'
  theme: {
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
        heartbeat: 'heartbeat 3s linear infinite'
      },
      keyframes:{
        blur: {
          '0%, 100%': {filter: 'blur(8px)'},
          '50%': {filter: 'blur(0px)'}
        },
        heartbeat: {
          '0%, 100%': {filter: 'drop-shadow(0px 0px 1px  rgb(255, 255, 255))'},
          '50%': {filter: 'drop-shadow(0px 0px 8px  rgb(255, 255, 255))'}
        },
    }
    }
  },
  variants: {
    filter: ['responsive'], // defaults to ['responsive']
    backdropFilter: ['responsive'], // defaults to ['responsive']
  },
  plugins: [
    require('tailwindcss-filters'),
  ],
}
