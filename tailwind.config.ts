import type { Config } from "tailwindcss";
const {nextui} = require("@nextui-org/react");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [`var(--font-nb)`]
      },
      backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          'card-gradient': 'linear-gradient(180deg, rgba(24,24,24,1) 0%, rgba(20,20,20,0.05) 100%)',
          'custom-modal': 'linear-gradient(180deg, rgba(13,13,13,.3) 20%, rgba(13,13,13,1) 100%)',
      },
      colors: {
        'custom-green': '#E5FE72',
        'custom-red': '#FF5251'
      }
    },
  },
  plugins: [
    nextui(),
    function ({ addUtilities }: any) {
      const newUtilities = {
        '.custom-card': {
          background: 'linear-gradient(180deg, rgba(24,24,24,1) 0%, rgba(20,20,20,0.05) 100%)',
          boxShadow: '0px 0px 16px 4px rgba(0, 0, 0, 0.05)',
          borderRadius: '16px',
          border: '1px rgba(30, 30, 30, 0.70) solid',
          backdropFilter: 'blur(10px)',
        },
        '.custom-tile': {
          background: 'linear-gradient(0deg, rgba(24,24,24,1) 0%, rgba(20,20,20,0.05) 100%)',
          boxShadow: '0px 0px 16px 4px rgba(0, 0, 0, 0.05)',
          borderRadius: '16px',
          border: '1px rgba(30, 30, 30, 0.70) solid',
          backdropFilter: 'blur(10px)',
        },
        '.custom-selected': {
          background: 'linear-gradient(180deg, rgba(28,28,28,.7) 0%, rgba(18,18,18,0.5) 100%)',
          boxShadow: '0px 0px 16px 4px rgba(0, 0, 0, 0.05)',
          borderRadius: '16px',
          border: '1px rgba(30, 30, 30, 0.70) solid',
          backdropFilter: 'blur(10px)',
        },
        '.custom-input': {
          background: 'linear-gradient(180deg, rgba(30,30,30,.7) 0%, rgba(30,30,30,0.0) 100%)',
          boxShadow: '0px 0px 16px 4px rgba(0, 0, 0, 0.05)',
          borderRadius: '16px',
          border: '1px rgba(30, 30, 30, 0.70) solid',
          backdropFilter: 'blur(10px)',
        },
        '.custom-input-selected': {
          background: 'linear-gradient(180deg, rgba(20,20,20,.5) 0%, rgba(8,8,8,1) 100%)',
          boxShadow: '0px 0px 16px 4px rgba(0, 0, 0, 0.05)',
          borderRadius: '16px',
          border: '1px rgba(30, 30, 30, 0.70) solid',
          backdropFilter: 'blur(10px)',
        },
      };

      addUtilities(newUtilities, {
        variants: ['responsive', 'hover'],
      });
    },
    
  ],
  darkMode: 'class',
};
export default config;
