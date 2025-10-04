import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        blue: {
          20: 'var(--blue-20)',
          30: 'var(--blue-30)',
        },
        gray: {
          40: 'var(--gray-40)',
          90: 'var(--gray-90)',
        },
        white: 'var(--white)',
      },
    },
  },
  plugins: [],
} satisfies Config;
