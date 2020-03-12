import React from 'react';

import { addDecorator } from '@storybook/react';
import { withMuiTheme } from '@harelpls/storybook-addon-materialui';

import { Alert, StorybookWrapper, lightTheme } from './../../';

addDecorator(
  withMuiTheme({
    lightTheme,
  }),
);

export default {
  title: 'Alert',
};

// for individual story with default themes
export const Default = () => (
  <StorybookWrapper vertical>
    <Alert variant="unavailable">Hello world</Alert>
    <Alert variant="success">Hello world</Alert>
    <Alert variant="info">Hello world</Alert>
    <Alert variant="pending">Hello world</Alert>
    <Alert variant="warning">Hello world</Alert>
    <Alert variant="error">Hello world</Alert>
  </StorybookWrapper>
);
