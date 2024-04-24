/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        bike: "url('assets/bike.jpg')",
      },
      maxWidth: {
        'screen-hd': '1280px',
        container: '900px',
      },
      colors: {
        primary: {
          DEFAULT: 'var(--primary-800)',
          lighter: 'var(--primary-600)',
          darker: 'var(--primary-900)',
        },
        accent: {
          DEFAULT: 'var(--accent-200)',
          lighter: 'var(--accent-50)',
          darker: 'var(--accent-400)',
        },
        warn: {
          DEFAULT: 'var(--warn-300)',
          lighter: 'var(--warn-200)',
          darker: 'var(--warn-500)',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
