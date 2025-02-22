import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import jaybajrang_ramaishish_photo from "../../assets/features/rbm_management/Mr. Jaybajrang Ramaishish Mani.jpg";
import aditya_jay_photo from "../../assets/features/rbm_management/Mr. Aditya Jay Bajrang Mani.jpg";
import deepak_saxena_photo from "../../assets/features/rbm_management/Mr. Deepak Saxena.png";
import themeColor from "../common/common";

interface Director {
  name: string;
  title: string;
  image?: string;
  description?: string;
}

const directors: Director[] = [
  {
    name: "Mr. Jai Bajrang Mani",
    title: "Managing Director",
    image: jaybajrang_ramaishish_photo,
    description: "He has over 25 years of experience, showcasing strong leadership in managing high-profile projects and driving RBM Infracon Limited's growth."
  },
  {
    name: "Mr. Aditya Mani",
    title: "Executive Director (Whole-time)",
    image: aditya_jay_photo,
    description: "A Mechanical Engineer with 6+ years of experience driving growth and operational excellence in Mechanical and Civil operations."
  },
  {
    name: "Mr. Deepak Saxena",
    title: "Non-Executive Director",
    image: deepak_saxena_photo,
    description: "33 years of experience in Procurement, Project Management, and Supply Chain Management across diverse industrial sectors."
  },
  {
    name: "Ms. Kriya Shah",
    title: "Independent Director",
    description: "A seasoned professional with expertise in corporate governance and regulatory compliance, bringing diverse perspective to the board."
  }
];

const BoardDirectorsSection: React.FC = () => {
  return (
    <Grid container spacing={3}>
      {directors.map((director, index) => (
        <Grid item xs={12} md={6} key={index}>
          <Card sx={{ 
            display: 'flex',
            backgroundColor: '#f8f9fa',
            height: '100%',
            '&:hover': {
              boxShadow: 3,
              borderColor: themeColor,
              borderWidth: 1,
              borderStyle: 'solid'
            },
            transition: 'all 0.3s ease-in-out'
          }}>
            {director.image ? (
              <CardMedia
                component="img"
                sx={{ 
                  width: '40%',
                  objectFit: 'cover',
                  borderRadius: '4px 0 0 4px'
                }}
                image={director.image}
                alt={director.name}
              />
            ) : (
              <Box sx={{ 
                width: '40%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: themeColor,
                color: 'white',
                fontSize: '2rem',
                fontWeight: 'bold'
              }}>
                {director.name.split(' ').map(n => n[0]).join('')}
              </Box>
            )}
            <CardContent sx={{ flex: 1 }}>
              <Typography
                variant="h6"
                sx={{ 
                  fontWeight: "bold",
                  color: themeColor,
                  mb: 1
                }}
              >
                {director.name}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{ 
                  color: themeColor,
                  mb: 2,
                  fontStyle: 'italic'
                }}
              >
                {director.title}
              </Typography>
              {director.description && (
                <Typography
                  variant="body2"
                  sx={{ 
                    color: '#333',
                    lineHeight: 1.6
                  }}
                >
                  {director.description}
                </Typography>
              )}
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default BoardDirectorsSection;
