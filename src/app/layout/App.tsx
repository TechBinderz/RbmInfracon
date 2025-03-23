import { CssBaseline, ThemeProvider } from "@mui/material";
import Footer from "./Footer";
import Header from "./Header";
import Feature from "./router/Feature";
import ScrollToTop from "./ScrollToTop";
import theme from "../../theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ScrollToTop />
      <Header />
      <Feature />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
