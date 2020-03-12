import React, { FC } from 'react';
import { Switch as MuiSwitch, SwitchProps } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles(() => ({
  disabled: {
    '&:hover': {
      cursor: 'not-allowed',
    },
  },
}));

export const Switch: FC<SwitchProps> = ({ className, disabled, ...otherProps }) => {
  const classes = useStyles();

  return <MuiSwitch className={clsx(disabled && classes.disabled, className)} disabled={disabled} {...otherProps} />;
};
