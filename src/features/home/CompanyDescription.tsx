import React from "react";
import { Box, Container, Typography } from "@mui/material";

const CompanyDescription: React.FC = () => {
  return (
    <Box>
      <Container>
        <Typography
          sx={{ paddingTop: 2, paddingBottom: 2 }}
          variant="h2"
          fontWeight="bold"
          align="center"
        >
          About RBM Infracon Ltd.
        </Typography>
        <Typography variant="subtitle1" paragraph>
          RBM Infracon Ltd. is a prominent and trusted provider of comprehensive
          solutions across multiple industries, particularly within the oil,
          gas, petrochemical, and energy sectors. With a commitment to
          excellence, RBM delivers a wide range of services in Engineering,
          Procurement, Construction, Innovation & Performance Enhancement,
          Operations & Maintenance, Inspection, and Shutdown/Turnaround
          Services.
        </Typography>
        <Typography variant="subtitle1">
          Each service is meticulously designed to meet international standards,
          ensuring the optimal performance, safety, and longevity of industrial
          operations.
        </Typography>
      </Container>
    </Box>
  );
};

export default CompanyDescription;
