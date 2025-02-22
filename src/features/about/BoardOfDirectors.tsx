import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Container,
} from "@mui/material";
import PageTitle from "../common/PageTitleDiv";
import jaybajrang_ramaishish_photo from "../../assets/features/rbm_management/Mr. Jaybajrang Ramaishish Mani.jpg";
import aditya_jay_photo from "../../assets/features/rbm_management/Mr. Aditya Jay Bajrang Mani.jpg";
import deepak_saxena_photo from "../../assets/features/rbm_management/Mr. Deepak Saxena.png";
import board_of_directors_image from "../../assets/features/about-us/board_of_directors.jpg";
import themeColor from "../common/common";

interface Director {
  name: string;
  title: string;
  image?: string;
  description?: string;
  isChairman?: boolean;
}

const directors: Director[] = [
  {
    name: "Mr. Jai Bajrang Mani",
    title: "Managing Director",
    image: jaybajrang_ramaishish_photo,
    description:
      "He has over 25 years of experience, showcasing strong leadership in managing high-profile projects and driving RBM Infracon Limited's growth. His strategic insight and focus on quality have been critical in delivering complex projects on time, within budget, and to the highest standards. He oversees the Finance, Sales, and Marketing divisions, playing a key role in shaping policy decisions and steering the company towards continued success.",
    isChairman: true,
  },
  {
    name: "Mr. Aditya Mani",
    title: "Executive Director (Whole-time)",
    image: aditya_jay_photo,
    description:
      "A Mechanical Engineer from Jamnagar, Gujarat, with 6+ years of experience driving growth and operational excellence. He leads Mechanical and Civil operations and excels in strategic planning, team leadership, and fostering strong stakeholder relationships. Passionate about the Oil & Gas industry, he is committed to delivering innovative solutions and impactful results.",
  },
  {
    name: "Mr. Deepak Saxena",
    title: "Non-Executive Director",
    image: deepak_saxena_photo,
    description:
      "A vast experience of 33 years in the Procurement of Materials and Services with experience in Project, Engineering, O&M, Contract Management for Capex and O&M, SCM, Purchase, Inbound and outbound logistics, imports, custom clearance and freight forwarding, Import and export licensing. He has been working in O&G, Polyester, Petrochemical refinery, Energy, Pipeline.",
  },
  {
    name: "Ms. Kriya Shah",
    title: "Independent Director",
    description:
      "A seasoned professional with expertise in corporate governance and regulatory compliance, bringing diverse perspective to the board.",
  },
];

const BoardOfDirectors: React.FC = () => {
  return (
    <>
      <PageTitle
        imageUrl={board_of_directors_image}
        tileContent="Board of Directors"
      />
      <Container sx={{ py: 4 }}>
        <Box
          sx={{
            backgroundColor: "#f5f5f5",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 4,
            padding: 4,
            "&:hover": {
              boxShadow: 3,
              borderColor: themeColor,
              borderWidth: 1,
              borderStyle: "solid",
            },
            transition: "all 0.3s ease-in-out",
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: { xs: "50%", md: "30%" }, height: "auto" }}
            image={directors[0].image}
            alt={directors[0].name}
          />
          <Box sx={{ padding: 2, maxWidth: 600 }}>
            <Typography
              variant="h3"
              sx={{ fontWeight: "bold", color: themeColor, textAlign: "center" }}
            >
              {directors[0].name}
            </Typography>
            <Typography
              variant="h5"
              sx={{ color: themeColor, marginBottom: 2, textAlign: "center" }}
            >
              {directors[0].title}
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 4 }}>
              {directors[0].description}
            </Typography>
          </Box>
        </Box>

        <Grid container spacing={4}>
          {directors.slice(1).map((director, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  backgroundColor: "#f5f5f5",
                  height: "100%",
                  "&:hover": {
                    boxShadow: 3,
                    borderColor: themeColor,
                    borderWidth: 1,
                    borderStyle: "solid",
                  },
                  transition: "all 0.3s ease-in-out",
                }}
              >
                {director.image ? (
                  <CardMedia
                    component="img"
                    sx={{
                      paddingLeft: 2,
                      width: { xs: "50%", md: "30%" },
                      height: "auto",
                      alignSelf: "center",
                    }}
                    image={director.image}
                    alt={director.name}
                  />
                ) : (
                  <Box
                    sx={{
                      alignSelf: "center",
                      width: "40%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      bgcolor: themeColor,
                      color: "white",
                      fontSize: "2rem",
                      fontWeight: "bold",
                    }}
                  >
                    {director.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </Box>
                )}
                <CardContent sx={{ flex: 1 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      color: themeColor,
                      mb: 1,
                      textAlign: "center",
                    }}
                  >
                    {director.name}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ color: themeColor, mb: 2, textAlign: "center" }}
                  >
                    {director.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#333", lineHeight: 1.6, textAlign: "center" }}
                  >
                    {director.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default BoardOfDirectors;
