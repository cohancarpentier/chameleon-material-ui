import React, { FC } from 'react';
import {
  Box,
  Breadcrumbs as MuiBreadcrumbs,
  BreadcrumbsProps as MuiBreadcrumbsProps,
  SvgIcon,
} from '@material-ui/core';
import ChevronRightIcon from '@getgo/chameleon-ui/icons/navigation/chevron-right.svg';
import SVG from 'react-inlinesvg';

export const Breadcrumbs: FC<MuiBreadcrumbsProps> = ({ children, separator, ...otherProps }) => {
  return (
    <MuiBreadcrumbs
      separator={
        <Box position="relative" top={3}>
          <SvgIcon fontSize="small">{separator || <SVG src={ChevronRightIcon} />}</SvgIcon>
        </Box>
      }
      {...otherProps}
    >
      {children}
    </MuiBreadcrumbs>
  );
};
