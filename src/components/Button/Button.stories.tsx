import React from 'react';

import { addDecorator } from '@storybook/react';
import { withMuiTheme } from '@harelpls/storybook-addon-materialui';

import { Button, StorybookWrapper, lightTheme } from './../../';

// globally with custom themes
addDecorator(
  withMuiTheme({
    lightTheme,
  }),
);

// via CFS with default themes
export default {
  title: 'Button',
};

// for individual story with default themes
export const Default = () => (
  <StorybookWrapper>
    <Button>Hello world</Button>
    <Button color="primary">Hello world</Button>
    <Button color="danger">Hello world</Button>
    <Button disabled>Hello world</Button>
  </StorybookWrapper>
);

export const Outlined = () => (
  <StorybookWrapper>
    <Button variant="outlined">Hello world</Button>
    <Button color="primary" variant="outlined">
      Hello world
    </Button>
    <Button color="danger" variant="outlined">
      Hello world
    </Button>
    <Button disabled variant="outlined">
      Hello world
    </Button>
  </StorybookWrapper>
);

export const Contained = () => (
  <StorybookWrapper>
    <Button variant="contained">Hello world</Button>
    <Button color="primary" variant="contained">
      Hello world
    </Button>
    <Button color="danger" variant="contained">
      Hello world
    </Button>
    <Button disabled variant="contained">
      Hello world
    </Button>
  </StorybookWrapper>
);
