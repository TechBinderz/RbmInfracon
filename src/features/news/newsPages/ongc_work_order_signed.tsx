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
import themeColor from "../../common/common";

const ONGC_WorkOrderSigned: React.FC = () => {
  return (
    <>
      <PageTitle
        imageUrl={ongc_work_order_signed}
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
        <Typography
          variant="body1"
          color="textSecondary"
          sx={{ fontSize: "20px" }}
          gutterBottom
        >
          Mumbai, 26th November 2024 – RBM Infracon Limited, an Industrial
          integrated services provider specializing in EPC contracts and
          comprehensive services for mechanical and rotary equipment.
        </Typography>

        <Divider sx={{ my: 5 }} />

        {/* Project Details Section */}
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Project Details
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="body1" sx={{ fontSize: "20px" }}>
                  <strong>Total Contract Value:</strong> ₹3,498 crore
                </Typography>
                <Typography variant="body1" sx={{ fontSize: "20px" }}>
                  <strong>Contract Breakdown:</strong> ₹3,371 crore for Crude
                  oil, ₹127 crore for Gas
                </Typography>
                <Typography variant="body1" sx={{ fontSize: "20px" }}>
                  <strong>Contract Duration:</strong> 15 years (180 months)
                </Typography>
                <Typography variant="body1" sx={{ fontSize: "20px" }}>
                  <strong>Extendable:</strong> Up to 5 years
                </Typography>
                <Typography variant="body1" sx={{ fontSize: "20px" }}>
                  <strong>LOI Date:</strong> 06-09-2024
                </Typography>
                <Typography variant="body1" sx={{ fontSize: "20px" }}>
                  <strong>Contract Signing Date:</strong> 25-11-2024
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  About RBM Infracon Limited
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontSize: "20px" }}
                  color="textSecondary"
                >
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
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Statement from the Chairman
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: "20px" }}
          fontStyle="italic"
          color="textSecondary"
        >
          “This landmark project with ONGC is more than a contractual milestone
          – it represents our vision to be at the forefront of India's energy
          transformation. By leveraging our expertise in oil, gas, and emerging
          green energy technologies, we are not just executing a project, but
          actively contributing to the nation's energy security and
          technological innovation.”
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: "20px", color: themeColor }}
          gutterBottom
        >
          Mr. Jay Bajrang Mani, Chairman & Managing Director of RBM Infracon
        </Typography>
      </Container>
    </>
  );
};

export default ONGC_WorkOrderSigned;
