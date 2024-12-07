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

interface Director {
  name: string;
  title: string;
  image: string;
  description?: string;
  isChairman?: boolean;
}

// Mock data for directors
const directors: Director[] = [
  {
    name: "Mr. Jaybajrag Ramaishish Mani",
    title: "Chairman & Managing Director, RBM",
    image: jaybajrang_ramaishish_photo,
    description:
      "He has over 25 years of experience, showcasing strong leadership in managing high-profile projects and driving RBM Infracon Limited’s growth. His strategic insight and focus on quality have been critical in delivering complex projects on time, within budget, and to the highest standards. He oversees the Finance, Sales, and Marketing divisions, playing a key role in shaping policy decisions and steering the company towards continued success.",
    isChairman: true,
  },
  {
    name: "Mr. Aditya Jay Bajrag Mani",
    title: "Whole Time Director",
    image: aditya_jay_photo,
    description:
      "A Mechanical Engineer from Jamnagar, Gujarat, with 6+ years of experience driving growth and operational excellence. He leads Mechanical and Civil operations and excels in strategic planning, team leadership, and fostering strong stakeholder relationships. Passionate about the Oil & Gas industry, he is committed to delivering innovative solutions and impactful results.",
  },
  {
    name: "Mr. Deepak Saxena",
    title: "Director",
    image: deepak_saxena_photo,
    description:
      "A vast experience of 33 years in the Procurement of Materials and Services with experience in Project, Engineering, 0&M, Contract Management for Capex and 0&M, SCM, Purchase, Inbound and outbound logistics, imports, custom clearance and freight forwarding, Import and export licensing. He has been working in O&G, Polyester, Petrochemical refinery, Energy, Pipeline.",
  },
];

const BoardOfDirectors: React.FC = () => {
  return (
    <>
      <PageTitle
        imageUrl="https://picsum.photos/1920/1080"
        tileContent="Board of Directors"
      />
      <Container sx={{ py: 4 }}>
        {/* Special layout for Mukesh Ambani */}
        <Box
          sx={{
            backgroundColor: "#f5f5f5",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 4,
            padding: 4,
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: { xs: "50%", md: "30%" }, height: "auto" }}
            image={directors[0].image} // replace with actual path
            alt={directors[0].name}
          />
          <Box sx={{ padding: 2, maxWidth: 600 }}>
            <Typography
              variant="h3"
              sx={{ fontWeight: "bold", textAlign: "left" }}
            >
              {directors[0].name}
            </Typography>
            <Typography
              variant="h5"
              sx={{ textAlign: "left", marginBottom: 2 }}
            >
              {directors[0].title}
            </Typography>
            <Typography
              variant="body1"
              sx={{ textAlign: "left", marginBottom: 4 }}
            >
              {directors[0].description}
            </Typography>
            {/* <Button variant="outlined">Read more</Button> */}
          </Box>
        </Box>

        {/* Other Directors */}
        <Grid container spacing={4} justifyContent="center">
          {directors
            .filter((director) => !director.isChairman)
            .map((director, index) => (
              <Grid item xs={12} sm={6} md={6} key={index}>
                <Card>
                  <CardMedia
                    component="img"
                    sx={{
                      width: { xs: "35%", md: "25%" },
                      height: { xs: "200px", md: "150px" },
                      borderRadius: "50%", // Makes the image rounded
                      margin: "0 auto", // Centers the image
                    }}
                    image={director.image}
                    alt={director.name}
                  />
                  <CardContent>
                    <Typography variant="h5" align="center">
                      {director.name}
                    </Typography>
                    <Typography
                      variant="h6"
                      color="text.secondary"
                      align="center"
                    >
                      {director.title}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      align="center"
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
