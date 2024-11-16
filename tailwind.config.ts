import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      fontFamily: {
        forum: ['Forum', 'sans']
      }

    }
  },

  plugins: []
} satisfies Config;
