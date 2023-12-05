import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-text':
          'linear-gradient(to right,#d3d3d3 10%,#2d3436 90%, #2d3436 10%)',
        'gradient-form':
          'linear-gradient(to bottom,transparent 10%,#d3d3d330 90%, #d3d3d330 10%)',
      },
      colors: {
        'primary-text': '#d3d3d3',
        'secondary-text': '#d3d3d390',
        success: '#60d8b8',
        'success-bg': '#60d8b820',
        error: '#fc5e5e',
        'error-bg': '#fc5e5e20',
        'link-text': '#6c9ee9',
        'username-text': '#d3d3d390',
        'form-border': '#d3d3d370',
      },
    },
  },
  plugins: [],
};
export default config;
