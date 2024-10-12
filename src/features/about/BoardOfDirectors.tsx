import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";
import PageTitle from "../common/PageTitleDiv";

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
    name: "Mukesh D. Ambani",
    title: "Chairman & Managing Director, RIL",
    image: "/images/mukesh.jpg", // replace with actual image path
    description:
      "RIL Chairman and Managing Director Mukesh D. Ambani is a chemical engineer from the Institute of Chemical Technology...",
    isChairman: true,
  },
  {
    name: "Isha M. Ambani",
    title: "Non-Executive Director",
    image: "/images/isha.jpg", // replace with actual image path
  },
  {
    name: "Akash M. Ambani",
    title: "Non-Executive Director",
    image: "/images/akash.jpg", // replace with actual image path
  },
  {
    name: "Anant M. Ambani",
    title: "Non-Executive Director",
    image: "/images/anant.jpg", // replace with actual image path
  },
  // Add more directors here...
];

const BoardOfDirectors: React.FC = () => {
  return (
    <>
      <PageTitle
        imageUrl="https://picsum.photos/1920/1080"
        tileContent="Board of Directors"
      />
      <Box
        sx={{
          padding: { xs: 2, sm: 4, md: 6 },
          textAlign: "center",
          marginX: { xs: 2, sm: 4, md: 6 },
        }}
      >
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
            sx={{ width: { xs: "100%", md: "50%" }, height: "auto" }}
            image="/images/mukesh.jpg" // replace with actual path
            alt="Mukesh D. Ambani"
          />
          <Box sx={{ padding: 2, maxWidth: 600 }}>
            <Typography
              variant="h3"
              sx={{ fontWeight: "bold", textAlign: "left" }}
            >
              Mukesh Ambani
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ textAlign: "left", marginBottom: 2 }}
            >
              Chairman & Managing Director, RIL
            </Typography>
            <Typography
              variant="body1"
              sx={{ textAlign: "left", marginBottom: 4 }}
            >
              RIL Chairman and Managing Director Mukesh D. Ambani is a chemical
              engineer from the Institute of Chemical Technology...
            </Typography>
            <Button variant="outlined">Read more</Button>
          </Box>
        </Box>

        {/* Other Directors */}
        <Grid container spacing={4} justifyContent="center">
          {directors
            .filter((director) => !director.isChairman)
            .map((director, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card>
                  <CardMedia
                    component="img"
                    height="250"
                    image={director.image}
                    alt={director.name}
                  />
                  <CardContent>
                    <Typography variant="h6">{director.name}</Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      {director.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Box>
    </>
  );
};

export default BoardOfDirectors;
