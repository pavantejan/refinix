/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    colors: {
      'brandColor': '#4712DD'
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

