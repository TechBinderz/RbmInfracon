import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Divider,
} from "@mui/material";
import PageTitle from "../../common/PageTitleDiv";
import ongc_work_order_signed from "../../../assets/features/news/news_pages/ongc_work_order_signed.png";
import news_background from "../../../assets/features/news/news_pages/news_background.avif";
import themeColor from "../../common/common";

const ONGC_WorkOrderSigned: React.FC = () => {
  return (
    <>
      <PageTitle
        imageUrl={news_background}
        tileContent="ONGC Work Order Signed"
      />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <img
          src={ongc_work_order_signed}
          alt="ONGC Work Order Signed"
          style={{
            width: "100%",
            borderRadius: "8px",
            marginBottom: "16px",
          }}
        />
        {/* Title Section */}
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          RBM Infracon Ltd. Officially Signs ONGC Contract
        </Typography>
        <Typography variant="body1" gutterBottom>
          Mumbai, 26th November 2024 – RBM Infracon Limited, an Industrial
          integrated services provider specializing in EPC contracts and
          comprehensive services for mechanical and rotary equipment.
        </Typography>

        <Divider sx={{ my: 5 }} />

        {/* Project Details Section */}
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Project Details
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="body1">
                  <strong>Total Contract Value:</strong> ₹3,498 crore
                </Typography>
                <Typography variant="body1">
                  <strong>Contract Breakdown:</strong> ₹3,371 crore for Crude
                  oil, ₹127 crore for Gas
                </Typography>
                <Typography variant="body1">
                  <strong>Contract Duration:</strong> 15 years (180 months)
                </Typography>
                <Typography variant="body1">
                  <strong>Extendable:</strong> Up to 5 years
                </Typography>
                <Typography variant="body1">
                  <strong>LOI Date:</strong> 06-09-2024
                </Typography>
                <Typography variant="body1">
                  <strong>Contract Signing Date:</strong> 25-11-2024
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  About RBM Infracon Limited
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  RBM Infracon boasts expertise in EPC contracts within
                  mechanical and civil engineering. With over three decades of
                  experience, the company provides comprehensive solutions
                  tailored to industries like refineries, petrochemicals, and
                  power plants. Headquartered in Jamnagar, Gujarat, RBM
                  emphasizes excellence, safety, and client satisfaction.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Divider sx={{ my: 5 }} />

        {/* CEO Statement Section */}
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Statement from the Chairman
        </Typography>
        <Typography variant="body1" fontStyle="italic" color="textSecondary">
          “This landmark project with ONGC is more than a contractual milestone
          – it represents our vision to be at the forefront of India's energy
          transformation. By leveraging our expertise in oil, gas, and emerging
          green energy technologies, we are not just executing a project, but
          actively contributing to the nation's energy security and
          technological innovation.”
        </Typography>
        <Typography variant="body1" color={themeColor} gutterBottom>
          Mr. Jay Bajrang Mani, Chairman & Managing Director of RBM Infracon
        </Typography>
      </Container>
    </>
  );
};

export default ONGC_WorkOrderSigned;
