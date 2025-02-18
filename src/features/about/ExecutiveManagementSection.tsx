import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Avatar,
} from "@mui/material";
import themeColor from "../common/common";

interface Executive {
  name: string;
  position: string;
  description?: string;
}

const executives: Executive[] = [
  {
    name: "Currently Vacant Position",
    position: "Chief Executive Officer",
    description: "Position currently open for an experienced leader to drive organizational growth and strategic initiatives."
  },
  {
    name: "Mr. Narendra Kumar Sharma",
    position: "Chief Financial Officer",
    description: "Leads financial strategy and operations, ensuring strong fiscal management and sustainable growth."
  },
  {
    name: "Mr. Pankaj Kumar",
    position: "Corporate Projects & Operations Head",
    description: "Oversees project execution and operations, ensuring efficient delivery and operational excellence."
  },
  {
    name: "Mr. Sreejith Pillai",
    position: "Chief Commercial Officer",
    description: "Drives commercial strategy and business development initiatives across the organization."
  },
  {
    name: "Mr. Sanjay Sharma",
    position: "Group Financial Advisor",
    description: "Provides strategic financial guidance and expertise for group-wide financial decisions."
  },
  {
    name: "Ms. Jina K.S",
    position: "Chief Human Resources Officer",
    description: "Leads HR strategy and talent management, fostering a positive organizational culture."
  },
  {
    name: "Mr. Ranjan Kumar",
    position: "Projects Head",
    description: "Manages project planning and execution, ensuring timely delivery and quality standards."
  }
];

const ExecutiveManagementSection: React.FC = () => {
  return (
    <Grid container spacing={3}>
      {executives.map((executive, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card sx={{ 
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
            <CardContent>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <Avatar 
                  sx={{ 
                    width: 80, 
                    height: 80, 
                    bgcolor: themeColor,
                    mb: 2,
                    fontSize: '1.5rem'
                  }}
                >
                  {executive.name.includes("Vacant") ? "?" : executive.name.split(' ').map(n => n[0]).join('')}
                </Avatar>
                <Typography
                  variant="h6"
                  sx={{ 
                    fontWeight: "bold",
                    color: themeColor,
                    mb: 1
                  }}
                >
                  {executive.name}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ 
                    color: themeColor,
                    mb: 2,
                    fontStyle: 'italic'
                  }}
                >
                  {executive.position}
                </Typography>
                {executive.description && (
                  <Typography
                    variant="body2"
                    sx={{ 
                      color: '#333',
                      lineHeight: 1.6
                    }}
                  >
                    {executive.description}
                  </Typography>
                )}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ExecutiveManagementSection;
