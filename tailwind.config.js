/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#1C1E24',
        paper: '#F0F1EC',
        navy: '#12172B',
        navy2: '#1B2140',
        gold: '#C99A3A',
        goldSoft: '#E8D7AE',
        teal: '#1F6F5C',
        brick: '#A8461F',
        line: '#D8D6CC',
        lineDark: '#2A3050'
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        sans: ['"IBM Plex Sans"', 'sans-serif']
      },
      maxWidth: {
        prose: '68ch'
      }
    }
  },
  plugins: []
}
