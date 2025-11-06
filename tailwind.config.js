/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "studio-darkmode-allwhite-ffffff": "#fff",
      },
    },
    screens: {
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
      mq750: {
        raw: "screen and (min-width: 451px) and (max-width: 750px)",
      },
      mq1050: {
        raw: "screen and (min-width: 751px) and (max-width: 1050px)",
      },
      lg: {
        raw: "screen and (min-width: 1051px) and (max-width: 1200px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
