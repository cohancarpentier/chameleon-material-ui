// @ts-nocheck

import React, { FC, ReactNode } from 'react';
import { Grid } from '@material-ui/core';

export interface StorybookWrapperProps {
  children: ReactNode;
  vertical?: boolean;
}
export const StorybookWrapper: FC<StorybookWrapperProps> = ({ vertical, children }) => (
  <Grid container spacing={2} direction={vertical ? 'column' : 'row'}>
    {children.length > 1
      ? children.map((child, index) => (
          <Grid key={index} item>
            {child}
          </Grid>
        ))
      : children}
  </Grid>
);
