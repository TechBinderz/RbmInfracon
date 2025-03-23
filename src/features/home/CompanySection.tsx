import { Grid, Typography, Paper, Box } from "@mui/material";
import { HashLink } from "react-router-hash-link";
import BusinessIcon from "@mui/icons-material/Business";
import BuildIcon from "@mui/icons-material/Build";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import { themeColor } from "../../features/common/common";
import { styled } from "@mui/material/styles";

const StyledIcon = styled('span')(({ theme }) => ({
  color: themeColor,
  marginBottom: theme.spacing(2),
  display: "flex",
  justifyContent: "center",
  "& .MuiSvgIcon-root": {
    fontSize: "3rem",
    color: themeColor,
  }
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: "center",
  height: 180,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  "&:hover": {
    boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
  },
}));

const companyItems = [
  {
    title: "Board of Directors",
    icon: <BusinessIcon />,
    link: "/aboutus/boardofdirector",
  },
  {
    title: "Current Projects",
    icon: <BuildIcon />,
    link: "/aboutus/current-projects",
  },
  {
    title: "Executed Projects",
    icon: <AssignmentTurnedInIcon />,
    link: "/aboutus/executed-projects",
  },
  {
    title: "Services",
    icon: <BusinessIcon />,
    link: "/services",
  },
  {
    title: "News",
    icon: <NewspaperIcon />,
    link: "/news",
  },
];

const CompanySection = () => {
  const scrollWithOffset = (el: HTMLElement) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <Box sx={{ flexGrow: 1, py: 4 }}>
      <Typography
        sx={{ paddingBottom: 4 }}
        variant="h2"
        fontWeight="bold"
        align="center"
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
                <StyledPaper elevation={3}>
                  <StyledIcon>{item.icon}</StyledIcon>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                    {item.title}
                  </Typography>
                </StyledPaper>
              </HashLink>
            ) : (
              <StyledPaper elevation={3}>
                <StyledIcon>{item.icon}</StyledIcon>
                <Typography variant="h5" gutterBottom>
                  {item.title}
                </Typography>
              </StyledPaper>
            )}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CompanySection;
