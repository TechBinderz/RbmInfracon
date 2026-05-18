import { CssBaseline, ThemeProvider } from "@mui/material";
import { Helmet } from "react-helmet-async";
import Footer from "./Footer";
import Header from "./Header";
import Feature from "./router/Feature";
import ScrollToTop from "./ScrollToTop";
import theme from "../../theme/theme";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  name: "RBM Infracon Limited",
  url: "https://www.rbminfracon.com/",
  logo: "https://www.rbminfracon.com/rmb_logo_icon.svg",
  description:
    "RBM Infracon Limited is a premier EPC contractor with 30+ years of experience delivering Engineering, Procurement, Construction, and O&M services across India and the Middle East. ISO 9001:2015 certified.",
  foundingDate: "1994",
  areaServed: ["India", "Middle East", "Dubai"],
  sameAs: [
    "https://www.facebook.com/profile.php?id=61555355951153",
    "https://www.linkedin.com/company/m-s-rbm-infracon-ltd/",
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    areaServed: ["IN", "AE"],
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Helmet>
      <CssBaseline />
      <ScrollToTop />
      <Header />
      <Feature />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
