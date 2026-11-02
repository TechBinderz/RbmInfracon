import { CssBaseline, ThemeProvider } from "@mui/material";
import { Helmet } from "react-helmet-async";
import Footer from "./Footer";
import Header from "./Header";
import Feature from "./router/Feature";
import ScrollToTop from "./ScrollToTop";
import theme from "../../theme/theme";

const siteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Corporation",
      "@id": "https://www.rbminfracon.com/#corporation",
      name: "RBM Infracon Limited",
      legalName: "RBM Infracon Limited",
      url: "https://www.rbminfracon.com/",
      logo: "https://www.rbminfracon.com/og-image.png",
      image: "https://www.rbminfracon.com/og-image.png",
      description:
        "RBM Infracon Limited (NSE: RBMINFRA) is a premier Indian EPC contractor with 30+ years of experience delivering Engineering, Procurement, Construction, and O&M services across India and the Middle East. ISO 9001:2015 certified.",
      foundingDate: "1994",
      tickerSymbol: "NSE:RBMINFRA",
      address: {
        "@type": "PostalAddress",
        streetAddress: "RBM House, Patel Park, Opp. Indo-German Tool Room",
        addressLocality: "Jamnagar",
        addressRegion: "Gujarat",
        postalCode: "361002",
        addressCountry: "IN",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91-288-2560370",
          contactType: "customer service",
          areaServed: ["IN", "AE"],
          availableLanguage: ["English", "Hindi", "Gujarati"],
        },
      ],
      sameAs: [
        "https://www.facebook.com/profile.php?id=61555355951153",
        "https://www.linkedin.com/company/m-s-rbm-infracon-ltd/",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.rbminfracon.com/#website",
      url: "https://www.rbminfracon.com/",
      name: "RBM Infracon Limited",
      description:
        "Official website of RBM Infracon Limited – EPC Services in Engineering, Procurement & Construction.",
      publisher: {
        "@id": "https://www.rbminfracon.com/#corporation",
      },
      inLanguage: "en-IN",
    },
  ],
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(siteSchema)}
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
