import {createTheme} from "@material-ui/core";

/**
 * @todo
 * use each specific color HEX code / name just once - reuse palette props or extract in const
 * the same with fontWeight
 * calculate rem values from px for readability, e.g. `const rootEm = 16; const px18 = 18 / rootEm`
 * do not use fontSize and other props in overrides section, instead bind it to typography classes from the theme
 * probably do not override MuiAppBar, instead set it up via system shorthand attrs, like mb for marginBottom
 */

const theme = createTheme({
  palette: {
    primary: {
      main: '#00B0F0'
    },
    warning: {
      main: '#F9EF6B'
    },
    error: {
      main: '#EFB1B1'
    },
    background: {
      default: 'white'
    },
    text: {
      primary: '#051E27',
      secondary: '#5F6360'
    },
    grey: {
      A700: '#EEEDF2'
    }
  },
  typography: {
    fontFamily: '-apple-system, Avenir, sans-serif',
    h1: {
      fontSize: '2.25rem',
      fontWeight: 900,
      lineHeight: '2.9375rem'
    },
    h2: {
      fontSize: '1.75rem',
      fontWeight: 900,
      lineHeight: '2.275rem'
    },
    h3: {
      fontSize: '1.125rem',
      fontWeight: 800,
      lineHeight: '1.4625rem'
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: '1.3125rem',
      color: '#5F6360'
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: '1.225rem',
      color: '#5F6360'
    }
  },
  shape: {
    borderRadius: 10
  },
  overrides: {
    MuiAppBar: {
      positionSticky: {
        boxShadow: 'none',
        borderBottom: '1px solid #EEEDF2',
        marginBottom: '40px'
      },
      colorDefault: {
        backgroundColor: 'white'
      }
    },
    MuiLink: {
      root: {
        color: '#5F6360'
      }
    },
    MuiButton: {
      containedPrimary: {
        boxShadow: 'none',
        color: 'white',
        fontSize: '1.125rem',
      },
      outlined: {
        fontSize: '1rem',
        fontWeight: 800
      },
      label: {
        color: 'inherit',
        fontWeight: 'inherit',
        textTransform: 'none'
      }
    }
  }
});

export default theme;