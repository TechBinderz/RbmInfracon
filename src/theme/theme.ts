import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import themeColor from '../features/common/common';

// Define breakpoints
const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  },
};

let theme = createTheme({
  breakpoints: {
    values: breakpoints.values,
  },
  palette: {
    primary: {
      main: themeColor,
    },
  },
  typography: {
    fontFamily: 'Calibri',
    h1: {
      fontSize: '3.5rem', // 56px
      fontWeight: 600,
      lineHeight: 1.2,
      '@media (max-width:900px)': {
        fontSize: '2.75rem', // 44px
      },
    },
    h2: {
      fontSize: '2.75rem', // 44px
      fontWeight: 600,
      lineHeight: 1.3,
      '@media (max-width:900px)': {
        fontSize: '2.25rem', // 36px
      },
    },
    h3: {
      fontSize: '2.25rem', // 36px
      fontWeight: 600,
      lineHeight: 1.3,
      '@media (max-width:900px)': {
        fontSize: '2rem', // 32px
      },
    },
    h4: {
      fontSize: '2rem', // 32px
      fontWeight: 600,
      lineHeight: 1.3,
      '@media (max-width:900px)': {
        fontSize: '1.75rem', // 28px
      },
    },
    h5: {
      fontSize: '1.75rem', // 28px
      fontWeight: 600,
      lineHeight: 1.3,
      '@media (max-width:900px)': {
        fontSize: '1.5rem', // 24px
      },
    },
    h6: {
      fontSize: '1.5rem', // 24px
      fontWeight: 600,
      lineHeight: 1.3,
      '@media (max-width:900px)': {
        fontSize: '1.25rem', // 20px
      },
    },
    body1: {
      fontSize: '1.25rem', // 20px
      fontWeight: 400,
      lineHeight: 1.6,
      textAlign: 'left',
      '@media (max-width:900px)': {
        fontSize: '1.125rem', // 18px
      },
    },
    body2: {
      fontSize: '1.125rem', // 18px
      fontWeight: 400,
      lineHeight: 1.6,
      textAlign: 'left',
      '@media (max-width:900px)': {
        fontSize: '1rem', // 16px
      },
    },
    subtitle1: {
      fontSize: '1.375rem', // 22px
      fontWeight: 500,
      lineHeight: 1.6,
    },
    subtitle2: {
      fontSize: '1.125rem', // 18px
      fontWeight: 500,
      lineHeight: 1.6,
    },
    button: {
      fontSize: '1.125rem', // 18px
      fontWeight: 600,
      textTransform: 'none',
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          h4: 'h4',
          h5: 'h5',
          h6: 'h6',
          subtitle1: 'h6',
          subtitle2: 'h6',
          body1: 'p',
          body2: 'p',
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          '&.small': {
            fontSize: '1.25rem', // 20px
          },
          '&.medium': {
            fontSize: '1.75rem', // 28px
          },
          '&.large': {
            fontSize: '2.5rem', // 40px
          },
          '&.xlarge': {
            fontSize: '3.125rem', // 50px
          },
        },
      },
    },
    MuiCardMedia: {
      styleOverrides: {
        root: {
          '&.large': {
            height: 300,
          },
          '&.medium': {
            height: 200,
          },
          '&.small': {
            height: 140,
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontSize: '0.95rem', // 15px
          '@media (max-width: 600px)': {
            fontSize: '0.9rem', // 14px
          },
        },
        head: {
          fontSize: '1.1rem', // 17.6px
          lineHeight: 1.3,
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
