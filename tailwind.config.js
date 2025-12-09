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
        "border-bordersecondary": "#e4e4e7",
        "background-backgroundprimary": "#fff",
        "content-contentprimary": "#09090b",
        "background-extensions-backgroundzinc": "#27272a",
        "content-contentinversetertiary": "#a1a1aa",
        "background-extensions-backgroundred": "#450a0a",
        "content-extensions-contentred": "#f87171",
        "background-extensions-backgroundorange": "#431407",
        "content-extensions-contentorange": "#fb923c",
        "background-extensions-backgroundamber": "#451a03",
        "content-extensions-contentamber": "#fbbf24",
        "background-extensions-backgroundyellow": "#422006",
        "content-extensions-contentyellow": "#facc15",
        "background-extensions-backgroundlime": "#1a2e05",
        "content-extensions-contentlime": "#a3e635",
        "background-extensions-backgroundgreen": "#052e16",
        "content-extensions-contentgreen": "#4ade80",
        "background-extensions-backgroundemerald": "#022c22",
        "content-extensions-contentemerald": "#34d399",
        "background-extensions-backgroundteal": "#042f2e",
        "content-extensions-contentteal": "#2dd4bf",
        "background-extensions-backgroundcyan": "#083344",
        "content-extensions-contentcyan": "#22d3ee",
        "background-extensions-backgroundsky": "#082f49",
        "content-extensions-contentsky": "#38bdf8",
        "background-extensions-backgroundblue": "#172554",
        "content-extensions-contentblue": "#60a5fa",
        "background-extensions-backgroundindigo": "#1e1b4b",
        "content-extensions-contentindigo": "#818cf8",
        "background-extensions-backgroundviolet": "#2e1065",
        "content-extensions-contentviolet": "#a78bfa",
        "background-extensions-backgroundpurple": "#3b0764",
        "content-extensions-contentpurple": "#c084fc",
        "background-extensions-backgroundfuchsia": "#4a044e",
        "content-extensions-contentfuchsia": "#e879f9",
        "background-extensions-backgroundpink": "#500724",
        "content-extensions-contentpink": "#f472b6",
        "background-extensions-backgroundrose": "#4c0519",
        "content-extensions-contentrose": "#fb7185",
        "studio-darkmode-allwhite-ffffff": "#fff",
      },
      spacing: {
        "global-spacing-10": "40px",
        "layout-gap-title-body-large": "18px",
        "global-spacing-4": "16px",
        "global-spacing-1": "4px",
        "global-spacing-15": "6px",
      },
      borderRadius: {
        "global-border-radius-rounded-lg": "8px",
        "global-borderradius-rounded-md": "6px",
      },
    },
    screens: {
      sm: {
        raw: "screen and (max-width: 420px)",
      },
      mq450: {
        raw: "screen and (min-width: 421px) and (max-width: 450px)",
      },
      mq750: {
        raw: 'screen and (min-width: 451px) and (max-width: 750px)',
      },
      mq1050: {
        raw: 'screen and (min-width: 751px) and (max-width: 1050px)',
      },
      lg: {
        raw: "screen and (min-width: 421px) and (max-width: 1200px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};