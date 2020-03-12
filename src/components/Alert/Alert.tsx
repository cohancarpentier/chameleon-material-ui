import React, { ReactNode, FC } from 'react';
import { Box, Grid, Typography, SvgIcon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import { ExtendedTheme } from '../..';
import { ReactComponent as AlertInactiveIcon } from '@getgo/chameleon-ui/icons/info/alert-inactive.svg';
import { ReactComponent as CheckIcon } from '@getgo/chameleon-ui/icons/misc/check.svg';
import { ReactComponent as ClockInactiveIcon } from '@getgo/chameleon-ui/icons/info/clock-inactive.svg';
import { ReactComponent as ErrorIcon } from '@getgo/chameleon-ui/icons/misc/error.svg';
import { ReactComponent as InfoInactiveIcon } from '@getgo/chameleon-ui/icons/info/info-inactive.svg';

const useStyles = makeStyles((theme: ExtendedTheme) => ({
  box: {
    borderRadius: 4,
    color: theme.chameleon.neutrals.n600,
  },
  icon: {
    marginRight: theme.spacing(1.5),
  },
  error: {
    background: theme.chameleon.red.r100,
    border: `1px solid ${theme.chameleon.red.r500}`,
  },
  errorIcon: {
    color: theme.chameleon.red.r500,
  },
  warning: {
    backgroundColor: theme.chameleon.yellow.y100,
    border: `1px solid ${theme.chameleon.yellow.y400}`,
  },
  warningIcon: {
    color: theme.chameleon.yellow.y400,
  },
  pending: {
    backgroundColor: theme.chameleon.yellow.y100,
    border: `1px solid ${theme.chameleon.yellow.y400}`,
  },
  pendingIcon: {
    position: 'relative',
    color: theme.chameleon.yellow.y400,
  },
  info: {
    background: 'rgba(0, 106, 255, 0.08)',
    border: `1px solid ${theme.chameleon.blue.b500}`,
  },
  infoIcon: {
    color: theme.chameleon.blue.b500,
  },
  success: {
    background: theme.chameleon.green.g100,
    border: `1px solid ${theme.chameleon.green.g500}`,
  },
  successIcon: {
    position: 'relative',
    color: theme.chameleon.green.g500,
  },
  unavailable: {
    background: theme.chameleon.neutrals.n100,
    border: `1px solid ${theme.chameleon.neutrals.n300}`,
  },
  unavailableIcon: {
    position: 'relative',
    color: theme.chameleon.neutrals.n300,
  },
}));

const variantIcon = {
  error: ErrorIcon,
  info: InfoInactiveIcon,
  pending: ClockInactiveIcon,
  success: CheckIcon,
  unavailable: ErrorIcon,
  warning: AlertInactiveIcon,
};

export interface AlertProps {
  className?: string;
  icon?: keyof typeof variantIcon;
  children?: ReactNode;
  variant: keyof typeof variantIcon;
}

export const Alert: FC<AlertProps> = ({ className, children, icon, variant = 'unavailable' }) => {
  // Hooks
  const classes = useStyles();

  const IconToDisplay = icon ? variantIcon[icon] : variantIcon[variant];

  return (
    <Box py={1.5} px={2} className={clsx(classes[variant], classes.box, className)}>
      <Grid container wrap="nowrap">
        <Grid item style={{ display: 'flex', position: 'relative', top: 2 }}>
          <SvgIcon
            fontSize="small"
            className={clsx(
              classes.icon,
              // @ts-ignore
              classes[`${variant}Icon`],
            )}
          >
            <IconToDisplay />
          </SvgIcon>
        </Grid>
        <Grid item>
          <Typography id="inline-toast-text" color="textPrimary">
            {children}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
