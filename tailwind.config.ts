import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Original colors (kept for backward compatibility)
        primary: '#1e40af',
        secondary: '#0f172a',
        background: '#f8fafc',
        accent: '#10b981',
        // Dark theme colors
        'primary-black': '#0A0A0A',
        'secondary-dark': '#111317',
        crimson: '#9B1C1C',
        'crimson-soft': '#B91C1C',
        'text-gray': '#E5E7EB',
      },
    },
  },
  plugins: [],
}
export default config

