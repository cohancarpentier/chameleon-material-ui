import { TypographyOptions } from '@material-ui/core/styles/createTypography';

import chameleon from './chameleon';

// Our Material-UI typography
// https://material-ui.com/customization/typography/#typography
const typography: TypographyOptions = {
  fontWeightBold: 700,
  fontFamily: [
    'San Francisco',
    '-apple-system',
    'system-ui',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(', '),
  h1: {
    fontSize: 42,
    fontWeight: 700,
  },
  h2: {
    fontSize: 32,
    fontWeight: 700,
    lineHeight: '48px',
  },
  h3: {
    fontWeight: 700,
    fontSize: 24,
    lineHeight: '36px',
  },
  h6: {
    fontWeight: 700,
    fontSize: 14,
  },
  caption: {
    color: chameleon.neutrals.n400,
  },
};

export default typography;
