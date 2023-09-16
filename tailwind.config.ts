import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'omi-white': '#F1F1F1',
        'omi-grid': '#DBDBDB',
        'omi-black': '#313131',
      },
      backgroundImage: {
        'custom-gradient-0': 'linear-gradient(to right, white 0%, black 0%)',
        'custom-gradient-25': 'linear-gradient(to right, white 18%, black 18%)',
        'custom-gradient-50': 'linear-gradient(to right, white 172px, black 172px)',
        'custom-gradient-75': 'linear-gradient(to right, white 260px, black 260px)',
        'custom-gradient-100': 'linear-gradient(to right, white 384px, black 384px)',
        'custom-gradient-110': 'linear-gradient(to right, white 384px, black 384px)',

      },
    },
  },
  plugins: [],
}
export default config
