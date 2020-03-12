import { PaletteOptions } from '@material-ui/core/styles/createPalette';

import chameleon from './chameleon';

// Our Material-UI palette
// https://material-ui.com/customization/palette/#palette
const lightPalette: PaletteOptions = {
  type: 'light',
  text: {
    primary: chameleon.neutrals.n600,
    secondary: chameleon.neutrals.n400,
  },
  background: {
    default: chameleon.neutrals.n000,
  },
  primary: {
    main: chameleon.blue.b500,
    dark: chameleon.blue.b600,
    contrastText: chameleon.neutrals.n000,
  },
  secondary: {
    main: chameleon.blue.b500,
    dark: chameleon.blue.b600,
    contrastText: chameleon.neutrals.n000,
  },
  error: {
    main: chameleon.red.r500,
    contrastText: chameleon.neutrals.n000,
  },
};

const darkPalette: PaletteOptions = {
  type: 'dark',
  text: {
    primary: chameleon.neutrals.n000,
    secondary: 'rgba(255, 255, 255, 0.7)',
  },
  background: {
    default: chameleon.neutrals.n600,
  },
  primary: {
    main: chameleon.blue.b300,
    dark: chameleon.blue.b400,
    contrastText: chameleon.neutrals.n600,
  },
  secondary: {
    main: chameleon.blue.b300,
    dark: chameleon.blue.b400,
    contrastText: chameleon.neutrals.n600,
  },
  error: {
    main: chameleon.red.r400,
    contrastText: chameleon.neutrals.n000,
  },
};

export { lightPalette, darkPalette };
