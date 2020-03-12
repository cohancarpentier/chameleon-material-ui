import React, { FC } from 'react';
import { Typography, TypographyProps } from '@material-ui/core';

export const HelperText: FC<TypographyProps> = ({ children, ...otherProps }) => (
  <Typography variant="caption" style={{ lineHeight: 1.25 }} {...otherProps}>
    {children}
  </Typography>
);
