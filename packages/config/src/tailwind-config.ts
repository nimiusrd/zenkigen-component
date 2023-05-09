import { tokens } from './tokens/tokens';

module.exports = {
  theme: {
    extend: {
      colors: {
        user: tokens.user,
        ...tokens.tokens,
        ...tokens.colors,
      },
      fontFamily: {
        helvetica: tokens.fontFamilies.helvetica,
      },
      fontSize: tokens.fontSize,
      lineHeight: tokens.lineHeights,
      boxShadow: {
        windowShadow: '0 0 10px rgba(0, 0, 0, 0.15)',
        componentShadow: '0 0 10px rgba(0, 0, 0, 0.08)',
        floatingShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
      },
      keyframes: {
        'circular-move': {
          '0%': {
            strokeDasharray: '1px, 200px',
            strokeDashoffset: '0px',
            transform: 'rotate(0deg)',
          },
          '50%': {
            strokeDasharray: '100px, 200px',
            strokeDashoffset: '-15px',
          },
          '100%': {
            strokeDasharray: '100px, 200px',
            strokeDashoffset: '-125px',
            transform: 'rotate(360deg)',
          },
        },
      },
      animation: {
        'circular-move': 'circular-move 1.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
