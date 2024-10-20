import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Footer from "./Footer";
import Header from "./Header";
import Feature from "./router/Feature";
import ScrollToTop from "./ScrollToTop";

const theme = createTheme({
  typography: {
    fontFamily: 'Calibri',  // Use the desired font
  },
});
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
