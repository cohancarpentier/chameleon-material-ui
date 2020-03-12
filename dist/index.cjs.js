'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var styles = require('@material-ui/core/styles');
var React = _interopDefault(require('react'));
var core = require('@material-ui/core');
var clsx = _interopDefault(require('clsx'));
var alertInactive_svg = require('@getgo/chameleon-ui/icons/info/alert-inactive.svg');
var check_svg = require('@getgo/chameleon-ui/icons/misc/check.svg');
var clockInactive_svg = require('@getgo/chameleon-ui/icons/info/clock-inactive.svg');
var error_svg = require('@getgo/chameleon-ui/icons/misc/error.svg');
var infoInactive_svg = require('@getgo/chameleon-ui/icons/info/info-inactive.svg');
var ChevronRightIcon = _interopDefault(require('@getgo/chameleon-ui/icons/navigation/chevron-right.svg'));
var SVG = _interopDefault(require('react-inlinesvg'));

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

// Our chameleon colors
// https://www.chameleondesignsystem.com/foundation/color
var chameleon = {
    blue: {
        b100: '#D9E9FF',
        b200: '#BFDAFF',
        b300: '#80B5FF',
        b400: '#4090FF',
        b500: '#006AFF',
        b600: '#004FBD',
    },
    green: {
        g100: '#D9FFF2',
        g200: '#80FFD2',
        g300: '#00CC85',
        g400: '#00AA6E',
        g500: '#008858',
        g600: '#166549',
    },
    purple: {
        p100: '#E6D9FF',
        p200: '#D5BFFF',
        p300: '#AC80FF',
        p400: '#9B66FF',
        p500: '#7B44E4',
        p600: '#6739BF',
    },
    yellow: {
        y100: '#FFF7D9',
        y200: '#FFE88C',
        y300: '#FFCB00',
        y400: '#D9AD00',
        y500: '#B38F00',
        y600: '#997A00',
    },
    orange: {
        o100: '#FEEDDE',
        o200: '#FFC48C',
        o300: '#F68D2E',
        o400: '#DB781C',
        o500: '#B35F11',
        o600: '#8C4400',
    },
    red: {
        r100: '#FEE2E8',
        r200: '#FABCC8',
        r300: '#FD94A9',
        r400: '#FD4C6F',
        r500: '#E02D52',
        r600: '#A12E45',
    },
    neutrals: {
        n000: '#FFFFFF',
        n050: '#F7F8Fa',
        n100: '#F0F2F5',
        n150: '#DEE4Ec',
        n200: '#E0E4EA',
        n250: '#B3BFCF',
        n300: '#9AA8BB',
        n350: '#828E9E',
        n400: '#6B7582',
        n450: '#5B646F',
        n500: '#4C535D',
        n550: '#383D45',
        n600: '#25282D',
    },
};

// Our Material-UI palette
// https://material-ui.com/customization/palette/#palette
var lightPalette = {
    type: 'light',
    text: {
        primary: chameleon.neutrals.n600,
        secondary: chameleon.neutrals.n400,
    },
    background: {
        default: chameleon.neutrals.n000,
    },
    primary: {
        main: chameleon.blue.b500,
        dark: chameleon.blue.b600,
        contrastText: chameleon.neutrals.n000,
    },
    secondary: {
        main: chameleon.blue.b500,
        dark: chameleon.blue.b600,
        contrastText: chameleon.neutrals.n000,
    },
    error: {
        main: chameleon.red.r500,
        contrastText: chameleon.neutrals.n000,
    },
};
var darkPalette = {
    type: 'dark',
    text: {
        primary: chameleon.neutrals.n000,
        secondary: 'rgba(255, 255, 255, 0.7)',
    },
    background: {
        default: chameleon.neutrals.n600,
    },
    primary: {
        main: chameleon.blue.b300,
        dark: chameleon.blue.b400,
        contrastText: chameleon.neutrals.n600,
    },
    secondary: {
        main: chameleon.blue.b300,
        dark: chameleon.blue.b400,
        contrastText: chameleon.neutrals.n600,
    },
    error: {
        main: chameleon.red.r400,
        contrastText: chameleon.neutrals.n000,
    },
};

// Everything Material-UI related that we want to override goes here
// https://material-ui.com/customization/components/#global-theme-override
var overrides = {
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
                border: "6px solid " + chameleon.neutrals.n000,
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

// Our Material-UI typography
// https://material-ui.com/customization/typography/#typography
var typography = {
    fontWeightBold: 700,
    fontFamily: [
        'San Francisco',
        '-apple-system',
        'system-ui',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(', '),
    h1: {
        fontSize: 42,
        fontWeight: 700,
    },
    h2: {
        fontSize: 32,
        fontWeight: 700,
        lineHeight: '48px',
    },
    h3: {
        fontWeight: 700,
        fontSize: 24,
        lineHeight: '36px',
    },
    h6: {
        fontWeight: 700,
        fontSize: 14,
    },
    caption: {
        color: chameleon.neutrals.n400,
    },
};

var useStyles = styles.makeStyles(function (theme) { return ({
    box: {
        borderRadius: 4,
        color: theme.chameleon.neutrals.n600,
    },
    icon: {
        marginRight: theme.spacing(1.5),
    },
    error: {
        background: theme.chameleon.red.r100,
        border: "1px solid " + theme.chameleon.red.r500,
    },
    errorIcon: {
        color: theme.chameleon.red.r500,
    },
    warning: {
        backgroundColor: theme.chameleon.yellow.y100,
        border: "1px solid " + theme.chameleon.yellow.y400,
    },
    warningIcon: {
        color: theme.chameleon.yellow.y400,
    },
    pending: {
        backgroundColor: theme.chameleon.yellow.y100,
        border: "1px solid " + theme.chameleon.yellow.y400,
    },
    pendingIcon: {
        position: 'relative',
        color: theme.chameleon.yellow.y400,
    },
    info: {
        background: 'rgba(0, 106, 255, 0.08)',
        border: "1px solid " + theme.chameleon.blue.b500,
    },
    infoIcon: {
        color: theme.chameleon.blue.b500,
    },
    success: {
        background: theme.chameleon.green.g100,
        border: "1px solid " + theme.chameleon.green.g500,
    },
    successIcon: {
        position: 'relative',
        color: theme.chameleon.green.g500,
    },
    unavailable: {
        background: theme.chameleon.neutrals.n100,
        border: "1px solid " + theme.chameleon.neutrals.n300,
    },
    unavailableIcon: {
        position: 'relative',
        color: theme.chameleon.neutrals.n300,
    },
}); });
var variantIcon = {
    error: error_svg.ReactComponent,
    info: infoInactive_svg.ReactComponent,
    pending: clockInactive_svg.ReactComponent,
    success: check_svg.ReactComponent,
    unavailable: error_svg.ReactComponent,
    warning: alertInactive_svg.ReactComponent,
};
var Alert = function (_a) {
    var className = _a.className, children = _a.children, icon = _a.icon, _b = _a.variant, variant = _b === void 0 ? 'unavailable' : _b;
    // Hooks
    var classes = useStyles();
    var IconToDisplay = icon ? variantIcon[icon] : variantIcon[variant];
    return (React.createElement(core.Box, { py: 1.5, px: 2, className: clsx(classes[variant], classes.box, className) },
        React.createElement(core.Grid, { container: true, wrap: "nowrap" },
            React.createElement(core.Grid, { item: true, style: { display: 'flex', position: 'relative', top: 2 } },
                React.createElement(core.SvgIcon, { fontSize: "small", className: clsx(classes.icon, 
                    // @ts-ignore
                    classes[variant + "Icon"]) },
                    React.createElement(IconToDisplay, null))),
            React.createElement(core.Grid, { item: true },
                React.createElement(core.Typography, { id: "inline-toast-text", color: "textPrimary" }, children)))));
};

var Breadcrumbs = function (_a) {
    var children = _a.children, separator = _a.separator, otherProps = __rest(_a, ["children", "separator"]);
    return (React.createElement(core.Breadcrumbs, __assign({ separator: React.createElement(core.Box, { position: "relative", top: 3 },
            React.createElement(core.SvgIcon, { fontSize: "small" }, separator || React.createElement(SVG, { src: ChevronRightIcon }))) }, otherProps), children));
};

var useStyles$1 = styles.makeStyles(function (theme) { return ({
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
}); });
var Button = function (_a) {
    var children = _a.children, color = _a.color, variant = _a.variant, className = _a.className, otherProps = __rest(_a, ["children", "color", "variant", "className"]);
    var classes = useStyles$1();
    var dangerClasses = {
        contained: 'dangerContained',
        outlined: 'dangerOutlined',
        text: 'dangerText',
    };
    return (React.createElement(core.Button, __assign({ disableElevation: true, color: color === 'danger' ? 'primary' : color, variant: variant, className: clsx(color === 'danger' &&
            // @ts-ignore
            classes[dangerClasses[variant || 'text']], className) }, otherProps), children));
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".MuiButton-outlinedPrimary:disabled:hover {\n  border: 1px solid rgba(0, 0, 0, 0.12) !important;\n}\n\nhtml {\n  overflow-x: hidden;\n}\n\nbody {\n  padding: 0 !important;\n}\n";
styleInject(css_248z);

var GlobalStyle = function () { return React.createElement(core.CssBaseline, null); };

var HelperText = function (_a) {
    var children = _a.children, otherProps = __rest(_a, ["children"]);
    return (React.createElement(core.Typography, __assign({ variant: "caption", style: { lineHeight: 1.25 } }, otherProps), children));
};

// @ts-nocheck
var StorybookWrapper = function (_a) {
    var vertical = _a.vertical, children = _a.children;
    return (React.createElement(core.Grid, { container: true, spacing: 2, direction: vertical ? 'column' : 'row' }, children.length > 1
        ? children.map(function (child, index) { return (React.createElement(core.Grid, { key: index, item: true }, child)); })
        : children));
};

var useStyles$2 = styles.makeStyles(function () { return ({
    disabled: {
        '&:hover': {
            cursor: 'not-allowed',
        },
    },
}); });
var Switch = function (_a) {
    var className = _a.className, disabled = _a.disabled, otherProps = __rest(_a, ["className", "disabled"]);
    var classes = useStyles$2();
    return React.createElement(core.Switch, __assign({ className: clsx(disabled && classes.disabled, className), disabled: disabled }, otherProps));
};

var lightTheme = __assign(__assign({}, styles.createMuiTheme({
    palette: lightPalette,
    typography: typography,
    overrides: overrides,
})), { chameleon: chameleon });

exports.Alert = Alert;
exports.Breadcrumbs = Breadcrumbs;
exports.Button = Button;
exports.GlobalStyle = GlobalStyle;
exports.HelperText = HelperText;
exports.StorybookWrapper = StorybookWrapper;
exports.Switch = Switch;
exports.chameleon = chameleon;
exports.darkPalette = darkPalette;
exports.lightPalette = lightPalette;
exports.lightTheme = lightTheme;
exports.overrides = overrides;
exports.typography = typography;
