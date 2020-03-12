import React, { FC, ReactNode } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

import { lightTheme } from './../../';

export interface ThemeProviderProps {
  children: ReactNode;
  theme: any;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children, theme }) => (
  <MuiThemeProvider theme={theme || lightTheme}>{children}</MuiThemeProvider>
);
