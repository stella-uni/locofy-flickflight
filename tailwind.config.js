/** @type {import('tailwindcss').Config} */
// Import semantic tokens generated from Tokens Studio JSON
let semanticTokens = {};
try {
  semanticTokens = require('./tokens/tailwind.tokens.js');
} catch (e) {
  // Fallback if tokens haven't been generated yet
  console.warn(
    'Semantic tokens not found. Run "npm run tokens:build" to generate them.'
  );
}

module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Semantic tokens from Tokens Studio (auto-generated)
        // Use: bg-background-primary, text-content-primary, border-border-primary, etc.
        ...semanticTokens.colors,
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      // Border radius and spacing use Tailwind defaults (same as dimensions.json)
      // No need to override as they match Tailwind's default values
    },
    screens: {
      mq450: {
        raw: 'screen and (max-width: 450px)',
      },
      mq750: {
        raw: 'screen and (min-width: 451px) and (max-width: 750px)',
      },
      mq1050: {
        raw: 'screen and (min-width: 751px) and (max-width: 1050px)',
      },
      lg: {
        raw: 'screen and (min-width: 1051px) and (max-width: 1200px)',
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
