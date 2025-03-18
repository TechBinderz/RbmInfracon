import { Grid, Typography, Paper, Box } from "@mui/material";
import { HashLink } from "react-router-hash-link";
import CaseStudyIcon from "@mui/icons-material/Book";
import BuildIcon from "@mui/icons-material/Build";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import ServiceIcon from "@mui/icons-material/DesignServices";
import NewsIcon from "@mui/icons-material/Newspaper";

const companyItems = [
  {
    title: "Board of Directors",
    icon: <CaseStudyIcon style={{ fontSize: 50, color: "#39ac4b" }} />,
    link: "/aboutus/boardofdirector",
  },
  {
    title: "Current Projects",
    icon: <BuildIcon style={{ fontSize: 50, color: "#39ac4b" }} />, // Updated icon
    link: "/aboutus/current-projects",
  },
  {
    title: "Executed Projects",
    icon: <AssignmentTurnedInIcon style={{ fontSize: 50, color: "#39ac4b" }} />, // Updated icon
    link: "/aboutus/executed-projects",
  },
  {
    title: "Services",
    icon: <ServiceIcon style={{ fontSize: 50, color: "#39ac4b" }} />,
    link: "/services",
  },
  {
    title: "News",
    icon: <NewsIcon style={{ fontSize: 50, color: "#39ac4b" }} />,
    link: "/news",
  },
];

// Custom scroll function to add offset for the fixed navbar
const scrollWithOffset = (el: HTMLElement) => {
  const yOffset = -80; // Adjust this value to the height of your navbar
  const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({ top: y, behavior: "smooth" });
};

const CompanySection = () => {
  return (
    <Box>
      <Typography
        variant="h3"
        align="center"
        fontWeight="bold"
        sx={{ marginBottom: 4 }}
      >
        Our Company
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {companyItems.map((item, index) => (
          <Grid item xs={12} sm={6} md={2} key={index}>
            {item.link ? (
              <HashLink
                smooth
                to={item.link}
                scroll={(el) => scrollWithOffset(el)}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    padding: 3,
                    textAlign: "center",
                    height: 180,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
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
              </HashLink>
            ) : (
              <Paper
                elevation={3}
                sx={{
                  padding: 3,
                  textAlign: "center",
                  height: 180,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
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
            )}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CompanySection;
