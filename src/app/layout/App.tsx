import { createTheme, CssBaseline, ThemeProvider, responsiveFontSizes } from "@mui/material";
import Footer from "./Footer";
import Header from "./Header";
import Feature from "./router/Feature";
import ScrollToTop from "./ScrollToTop";

const baseTheme = createTheme({
  typography: {
    fontFamily: 'Calibri',
    fontSize: 16,
    body1: {
      fontSize: "1.1rem",
      "@media (max-width:900px)": {
        fontSize: "1rem",
      },
      "@media (max-width:600px)": {
        fontSize: "0.9rem",
      },
      lineHeight: 1.6,
    },
    body2: {
      fontSize: "1rem",
      "@media (max-width:900px)": {
        fontSize: "0.95rem",
      },
      "@media (max-width:600px)": {
        fontSize: "0.9rem",
      },
      lineHeight: 1.6,
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
  },
});

const theme = responsiveFontSizes(baseTheme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Feature />
      <Footer />
      <ScrollToTop />
    </ThemeProvider>
  );
}

export default App;
