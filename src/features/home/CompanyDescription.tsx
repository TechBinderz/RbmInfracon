import React from "react";
import { Box, Typography, Container } from "@mui/material";

const CompanyDescription: React.FC = () => {
  return (
    <Box>
      <Container>
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            mb: 4,
            paddingTop: 4,
            color: "#000000",
            fontSize: { xs: "32px", md: "42px" },
          }}
        >
          About RBM Infracon Ltd.
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{
            textAlign: "justify",
            fontSize: { xs: "18px", md: "22px" },
            lineHeight: 1.6,
            color: "#000000",
            mb: 3,
          }}
        >
          RBM Infracon Ltd. is a prominent and trusted provider of comprehensive
          solutions across multiple industries, particularly within the oil,
          gas, petrochemical, and energy sectors. With a commitment to
          excellence, RBM delivers a wide range of services in Engineering,
          Procurement, Construction, Innovation & Performance Enhancement,
          Operations & Maintenance, Inspection, and Shutdown/Turnaround
          Services.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: "justify",
            fontSize: { xs: "18px", md: "22px" },
            lineHeight: 1.6,
            color: "#000000",
            mb: 4,
          }}
        >
          Each service is meticulously designed to meet international standards,
          ensuring the optimal performance, safety, and longevity of industrial
          operations.
        </Typography>
      </Container>
    </Box>
  );
};

export default CompanyDescription;
