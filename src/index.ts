import { createMuiTheme } from '@material-ui/core/styles';
import { Theme, ThemeOptions } from '@material-ui/core/styles/createMuiTheme';

// Theme
import { lightPalette, darkPalette } from './theme/palette';
import chameleon, { ChameleonProps } from './theme/chameleon';
import overrides from './theme/overrides';
import typography from './theme/typography';

// Components
import { Alert } from './components/Alert/Alert';
import { Breadcrumbs } from './components/Breadcrumbs/Breadcrumbs';
import { Button } from './components/Button/Button';
import { GlobalStyle } from './components/GlobalStyle/GlobalStyle';
import { HelperText } from './components/HelperText/HelperText';
import { StorybookWrapper } from './components/StorybookWrapper/StorybookWrapper';
import { Switch } from './components/Switch/Switch';

// The ExtendedTheme type allows you to use chameleon colors in our components
export interface ExtendedTheme extends Theme {
  chameleon: ChameleonProps;
}

interface ExtendedThemeOptions extends ThemeOptions {
  chameleon: ChameleonProps;
}

const lightTheme: ExtendedThemeOptions = {
  ...createMuiTheme({
    palette: lightPalette,
    typography,
    overrides,
  }),
  chameleon,
};

export {
  Alert,
  Breadcrumbs,
  Button,
  chameleon,
  darkPalette,
  GlobalStyle,
  HelperText,
  lightPalette,
  lightTheme,
  overrides,
  StorybookWrapper,
  Switch,
  typography,
};
