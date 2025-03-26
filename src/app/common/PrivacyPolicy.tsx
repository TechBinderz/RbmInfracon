import React from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Divider,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import PageTitle from "../../features/common/PageTitleDiv";
import privacyPolicy from "../../assets/privacy/privacy-policy.jpg";
import theme from "../../theme/theme";

const PrivacyPolicy: React.FC = () => {
  return (
    <ThemeProvider theme={createTheme(theme)}>
      <PageTitle imageUrl={privacyPolicy} tileContent="Privacy Statement/Policy" />
      <Container maxWidth="lg">
        <Paper
          elevation={0}
          sx={{
            py: 6,
            px: { xs: 2, sm: 4, md: 6 },
            backgroundColor: "transparent",
            borderRadius: 2,
          }}
        >
          <Box
            sx={{
              maxWidth: "800px",
              mx: "auto",
              "& .MuiTypography-body1": {
                lineHeight: 1.8,
              },
            }}
          >
            <Typography variant="body1" paragraph>
              RBM Infracon Limited ("RBM Infracon," "we," "our," or "us") is
              committed to protecting your privacy. This Privacy Statement
              outlines how we collect, use, disclose, and protect your personal
              information when you visit our website ("Website").
            </Typography>

            {[...Array(10)].map((_, index) => (
              <Box
                key={index + 1}
                sx={{
                  mb: 5,
                  "&:hover": {
                    "& .section-title": {
                      transform: "translateX(10px)",
                      color: theme.palette.primary.main,
                    },
                  },
                }}
              >
                <Typography
                  variant="h6"
                  className="section-title"
                  sx={{
                    mb: 2,
                    fontWeight: 600,
                    transition: "all 0.3s ease",
                    display: "flex",
                    alignItems: "center",
                    "&::before": {
                      content: '""',
                      width: "4px",
                      height: "24px",
                      backgroundColor: theme.palette.primary.main,
                      marginRight: 2,
                      borderRadius: 1,
                    },
                  }}
                >
                  {index === 0 && "1. Information We Collect"}
                  {index === 1 && "2. How We Use Your Information"}
                  {index === 2 && "3. Information Sharing and Disclosure"}
                  {index === 3 && "4. International Data Transfers"}
                  {index === 4 && "5. Data Retention"}
                  {index === 5 && "6. Cookies and Tracking Technologies"}
                  {index === 6 && "7. Your Rights and Choices"}
                  {index === 7 && "8. Third-Party Links"}
                  {index === 8 && "9. Updates to This Privacy Statement"}
                  {index === 9 && "10. Contact Us"}
                </Typography>

                {index === 0 && (
                  <>
                    <Typography variant="body1" paragraph>
                      We may collect and process the following types of
                      information:
                    </Typography>
                    <Box
                      sx={{
                        pl: 3,
                        borderLeft: "2px solid",
                        borderColor: theme.palette.divider,
                        ml: 1,
                      }}
                    >
                      <Typography
                        variant="body1"
                        component="div"
                        sx={{ mb: 2 }}
                      >
                        • Personal Information: Name, email address, phone
                        number, company details, and any other information
                        voluntarily provided by you.
                      </Typography>
                      <Typography
                        variant="body1"
                        component="div"
                        sx={{ mb: 2 }}
                      >
                        • Technical Information: IP address, browser type,
                        operating system, geographical location, website usage
                        data, and other technical identifiers collected through
                        cookies and analytics tools.
                      </Typography>
                      <Typography
                        variant="body1"
                        component="div"
                        sx={{ mb: 2 }}
                      >
                        • Communication Data: Information provided when you
                        contact us via our website, email, or other
                        communication channels.
                      </Typography>
                      <Typography variant="body1" component="div">
                        • Transaction and Business Data: Details relating to
                        inquiries, contracts, and transactions with RBM
                        Infracon.
                      </Typography>
                    </Box>
                  </>
                )}

                {index === 1 && (
                  <>
                    <Typography variant="body1" paragraph>
                      We may use your information to:
                    </Typography>
                    <Box
                      sx={{
                        pl: 3,
                        borderLeft: "2px solid",
                        borderColor: theme.palette.divider,
                        ml: 1,
                      }}
                    >
                      <Typography
                        variant="body1"
                        component="div"
                        sx={{ mb: 2 }}
                      >
                        • Administer and manage our website.
                      </Typography>
                      <Typography
                        variant="body1"
                        component="div"
                        sx={{ mb: 2 }}
                      >
                        • Improve our services and personalize user experience
                      </Typography>
                      <Typography
                        variant="body1"
                        component="div"
                        sx={{ mb: 2 }}
                      >
                        • Process business inquiries and transactions.
                      </Typography>
                      <Typography
                        variant="body1"
                        component="div"
                        sx={{ mb: 2 }}
                      >
                        • Respond to inquiries and communicate with you.
                      </Typography>
                      <Typography
                        variant="body1"
                        component="div"
                        sx={{ mb: 2 }}
                      >
                        • Comply with legal obligations and prevent fraudulent
                        activities.
                      </Typography>
                      <Typography variant="body1" component="div">
                        • Conduct internal analysis and research for business
                        development.
                      </Typography>
                    </Box>
                  </>
                )}

                {index === 2 && (
                  <>
                    <Typography variant="body1" paragraph>
                      We do not sell, trade, or rent your personal information.
                      However, we may share your information with:
                    </Typography>
                    <Box
                      sx={{
                        pl: 3,
                        borderLeft: "2px solid",
                        borderColor: theme.palette.divider,
                        ml: 1,
                      }}
                    >
                      <Typography
                        variant="body1"
                        component="div"
                        sx={{ mb: 2 }}
                      >
                        • Service Providers: Third-party vendors assisting in
                        Website operations, marketing analytics, and business
                        support.
                      </Typography>
                      <Typography
                        variant="body1"
                        component="div"
                        sx={{ mb: 2 }}
                      >
                        • Legal Authorities: When required by law, regulation,
                        or legal process.
                      </Typography>
                      <Typography variant="body1" component="div">
                        • Business Partners and Affiliates: In cases where
                        collaboration is necessary for providing services.
                      </Typography>
                    </Box>
                  </>
                )}

                {index === 3 && (
                  <Typography variant="body1" paragraph>
                    Your information may be stored, processed, and transferred
                    to locations where RBM Infracon operates. By using our
                    services, you consent to such transfers, including to
                    countries outside your jurisdiction.
                  </Typography>
                )}

                {index === 4 && (
                  <Typography variant="body1" paragraph>
                    We will retain your personal information only as long as
                    necessary for the purposes outlined in this Privacy
                    Statement, or as required by legal and regulatory
                    obligations.
                  </Typography>
                )}

                {index === 5 && (
                  <Typography variant="body1" paragraph>
                    We use cookies and similar tracking technologies to enhance
                    your experience. Cookie help us analyse website traffic,
                    personalize content, and improve services. You can manage
                    cookie preferences through your browser settings.
                  </Typography>
                )}

                {index === 6 && (
                  <>
                    <Typography variant="body1" paragraph>
                      You may:
                    </Typography>
                    <Box
                      sx={{
                        pl: 3,
                        borderLeft: "2px solid",
                        borderColor: theme.palette.divider,
                        ml: 1,
                      }}
                    >
                      <Typography
                        variant="body1"
                        component="div"
                        sx={{ mb: 2 }}
                      >
                        • Request access, correction, or deletion of your
                        personal information.
                      </Typography>
                      <Typography
                        variant="body1"
                        component="div"
                        sx={{ mb: 2 }}
                      >
                        • Object to the processing of your data for certain
                        purposes.
                      </Typography>
                      <Typography
                        variant="body1"
                        component="div"
                        sx={{ mb: 2 }}
                      >
                        • Withdraw consent where applicable.
                      </Typography>
                      <Typography variant="body1" component="div">
                        • Manage cookie preferences.
                      </Typography>
                    </Box>
                  </>
                )}

                {index === 7 && (
                  <Typography variant="body1" paragraph>
                    Our website may contain links to external websites. We are
                    not responsible for their privacy practices and encourages
                    you to review their privacy policies.
                  </Typography>
                )}

                {index === 8 && (
                  <Typography variant="body1" paragraph>
                    We may update this Privacy Statement periodically. Any
                    changes will be posted on this page with the revised date.
                  </Typography>
                )}

                {index === 9 && (
                  <>
                    <Typography variant="body1" paragraph>
                      For any privacy-related inquiries, please contact us at:
                    </Typography>
                    <Box
                      sx={{
                        pl: 3,
                        py: 3,
                        border: "2px solid",
                        borderColor: theme.palette.primary.main,
                        ml: 1,
                        bgcolor: theme.palette.background.paper,
                        borderRadius: 1,
                        boxShadow: 1,
                      }}
                    >
                      <Typography variant="body1" component="div">
                        RBM Infracon Limited
                        <br />
                        Email: contact@rbminfracon.com
                        <br />
                        Address: First Floor, Ravi Plaza, Dhichda Road, Nillkant
                        Park, Jamnagar, Gujarat – 361 002
                      </Typography>
                    </Box>
                  </>
                )}
              </Box>
            ))}
          </Box>

          <Divider sx={{ my: 4 }} />

          <Typography
            variant="body1"
            sx={{
              fontStyle: "italic",
              textAlign: "center",
              color: theme.palette.text.secondary,
            }}
          >
            By using our website, you consent to the terms of this Privacy
            Statement/Policy.
          </Typography>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default PrivacyPolicy;
