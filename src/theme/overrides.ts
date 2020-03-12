import { Overrides } from '@material-ui/core/styles/overrides';

import chameleon from './chameleon';

// Everything Material-UI related that we want to override goes here
// https://material-ui.com/customization/components/#global-theme-override
const overrides: Overrides = {
  MuiButton: {
    root: {
      height: 36,
      minWidth: 36,
      textTransform: 'none',
      fontWeight: 'bold',
    },
    containedPrimary: {
      boxShadow: 'none',
      '&:hover': {
        boxShadow: 'none',
      },
      '&:active': {
        boxShadow: 'none',
      },
    },
  },
  // @ts-ignore MuiAutocomplete is still part of @material-ui/lab
  MuiAutocomplete: {
    inputRoot: {
      paddingRight: '69px !important',
      paddingLeft: '14px !important',
      '& .MuiAutocomplete-endAdornment': {
        right: '14px !important',
      },
      '& .MuiAutocomplete-input': {
        paddingLeft: '10px !important',
      },
    },
  },
  MuiListItem: {
    gutters: {
      paddingRight: 24,
    },
  },
  MuiInputBase: {
    root: {
      '&$disabled': {
        backgroundColor: chameleon.neutrals.n050,
      },
    },
    input: {
      '&$disabled': {
        cursor: 'not-allowed',
      },
    },
  },
  MuiSelect: {
    outlined: {
      paddingRight: '48px !important',
    },
    select: {
      '&$disabled': {
        cursor: 'not-allowed',
      },
    },
  },
  MuiListItemIcon: {
    root: {
      minWidth: 32,
    },
  },
  MuiButtonBase: {
    root: {
      '&:disabled': {
        cursor: 'not-allowed',
        pointerEvents: 'auto',
      },
    },
  },
  MuiLink: {
    root: {
      cursor: 'pointer',
    },
  },
  MuiTableCell: {
    body: {
      borderBottom: 'none',
    },
    head: {
      fontWeight: 700,
    },
  },
  MuiTab: {
    root: {
      textTransform: 'unset',
      minWidth: 'unset !important',
      fontWeight: 700,
      borderTopLeftRadius: 4,
      borderTopRightRadius: 4,
    },
  },
  MuiChip: {
    root: {
      height: 28,
      backgroundColor: chameleon.neutrals.n100,
      '& .MuiChip-avatar': {
        marginLeft: 2,
      },
    },
    sizeSmall: {
      height: 22,
    },
    clickable: {
      '&:hover': {
        backgroundColor: chameleon.neutrals.n150,
      },
      '&:focus': {
        backgroundColor: chameleon.neutrals.n200,
      },
    },
  },
  MuiCheckbox: {
    root: {
      color: chameleon.blue.b500,
    },
  },
  MuiFormControl: {
    marginDense: {
      marginTop: 0,
      marginBottom: 0,
    },
  },
  MuiTableRow: {
    root: {
      position: 'relative',
      height: 56,
    },
    head: {
      '&:hover': {
        backgroundColor: 'unset !important',
        cursor: 'unset !important',
      },
    },
  },
  MuiFormHelperText: {
    contained: {
      margin: '4px 0px 0px',
      marginLeft: 0,
      marginRight: 0,
    },
  },
  MuiToolbar: {
    gutters: {
      paddingLeft: '0 !important',
      paddingRight: '0 !important',
    },
    root: {
      borderBottom: 'none !important',
    },
  },
  MuiTabs: {
    indicator: {
      height: 4,
      borderTopLeftRadius: 4,
      borderTopRightRadius: 4,
    },
  },
  MuiSwitch: {
    colorSecondary: {
      '&:hover': {
        backgroundColor: 'transparent',
      },
      '&$checked': {
        color: chameleon.neutrals.n000,
        '& + $track': {
          backgroundColor: chameleon.blue.b500,
          opacity: 1,
        },
        '&$disabled': {
          '& + $track': {
            backgroundColor: chameleon.blue.b200,
          },
        },
        '&:hover': {
          backgroundColor: 'transparent',
        },
      },
      '&$disabled': {
        color: chameleon.neutrals.n000,
        '& + $track': {
          backgroundColor: chameleon.neutrals.n200,
          opacity: 1,
        },
      },
    },
    switchBase: {
      color: chameleon.neutrals.n000,
      padding: 2,
      '&$focusVisible $thumb': {
        color: chameleon.blue.b500,
        border: `6px solid ${chameleon.neutrals.n000}`,
      },
      '&$checked': {
        transform: 'translateX(18px)',
      },
    },
    root: {
      padding: 0,
      height: 22,
      width: 40,
    },
    sizeSmall: {
      padding: 0,
      height: 18,
      width: 34,
      '& .MuiSwitch-thumb': {
        width: 14,
        height: 14,
      },
      '& .MuiSwitch-switchBase': {
        padding: 2,
      },
    },
    thumb: {
      width: 18,
      height: 18,
      boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.05),0px 1px 1px 0px rgba(0,0,0,0.035),0px 1px 3px 0px rgba(0,0,0,0.03)',
    },
    track: {
      borderRadius: 12,
      backgroundColor: chameleon.neutrals.n300,
      opacity: 1,
    },
    // @ts-ignore this is necessary to overwrite the focusVisible
    focusVisible: {},
  },
  MuiSnackbar: {
    anchorOriginBottomRight: {
      marginLeft: 72,
    },
  },
};

export default overrides;
