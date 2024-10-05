import { Grid, Typography, Paper, Box } from "@mui/material";
import CaseStudyIcon from "@mui/icons-material/Book";  // Replace with custom icon or MUI icon
import SafetyIcon from "@mui/icons-material/Security";  // Replace with custom icon or MUI icon
import CustomersIcon from "@mui/icons-material/Group";  // Replace with custom icon or MUI icon
import TrainingIcon from "@mui/icons-material/School";  // Replace with custom icon or MUI icon
import PartnersIcon from "@mui/icons-material/Handshake";  // Replace with custom icon or MUI icon

const companyItems = [
  { title: "Case Studies", icon: <CaseStudyIcon style={{ fontSize: 50, color: "#39ac4b" }} /> },
  { title: "Safety", icon: <SafetyIcon style={{ fontSize: 50, color: "#39ac4b" }} /> },
  { title: "Our Customers", icon: <CustomersIcon style={{ fontSize: 50, color: "#39ac4b" }} /> },
  { title: "Training", icon: <TrainingIcon style={{ fontSize: 50, color: "#39ac4b" }} /> },
  { title: "Technical Partners", icon: <PartnersIcon style={{ fontSize: 50, color: "#39ac4b" }} /> },
];

const CompanySection = () => {
  return (
    <Box sx={{ paddingY: 4 }}>
      <Typography variant="h4" align="center" sx={{ marginBottom: 4 }}>
        Our Company
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {companyItems.map((item, index) => (
          <Grid item xs={12} sm={6} md={2} key={index}>
            <Paper
              elevation={3}
              sx={{
                padding: 3,
                textAlign: "center",
                "&:hover": {
                  boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                },
              }}
            >
              <Box sx={{ marginBottom: 2 }}>{item.icon}</Box>
              <Typography variant="body1" fontWeight="bold">
                {item.title}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CompanySection;
