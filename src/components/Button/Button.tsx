import React, { FC } from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import { ExtendedTheme } from '../..';

const useStyles = makeStyles((theme: ExtendedTheme) => ({
  dangerContained: {
    backgroundColor: theme.chameleon.red.r500,
    color: theme.chameleon.neutrals.n000,
    '&:hover': {
      backgroundColor: theme.chameleon.red.r600,
    },
  },
  dangerOutlined: {
    color: theme.chameleon.red.r500,
    borderColor: theme.chameleon.red.r500,
    '&:hover': {
      borderColor: theme.chameleon.red.r600,
      backgroundColor: 'rgba(224, 45, 82, 0.04)',
    },
  },
  dangerText: {
    color: theme.chameleon.red.r500,
    '&:hover': {
      backgroundColor: 'rgba(224, 45, 82, 0.04)',
    },
  },
}));

// @ts-ignore
export interface ButtonProps extends MuiButtonProps {
  color?: MuiButtonProps['color'] | 'danger';
}

export const Button: FC<ButtonProps | any> = ({ children, color, variant, className, ...otherProps }) => {
  const classes = useStyles();

  const dangerClasses = {
    contained: 'dangerContained',
    outlined: 'dangerOutlined',
    text: 'dangerText',
  };

  return (
    <MuiButton
      disableElevation
      color={color === 'danger' ? 'primary' : color}
      variant={variant}
      className={clsx(
        color === 'danger' &&
          // @ts-ignore
          classes[dangerClasses[variant || 'text']],
        className,
      )}
      {...otherProps}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
