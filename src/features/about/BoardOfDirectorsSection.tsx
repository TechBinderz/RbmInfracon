/*  */import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Avatar,
} from "@mui/material";
import jaybajrang_ramaishish_photo from "../../assets/features/rbm_management/Mr. Jaybajrang Ramaishish Mani.jpg";
import aditya_jay_photo from "../../assets/features/rbm_management/Mr. Aditya Jay Bajrang Mani.jpg";
import deepak_saxena_photo from "../../assets/features/rbm_management/Mr. Deepak Saxena.png";
import themeColor from "../common/common";

interface TeamMember {
  name: string;
  title: string;
  image?: string;
  description?: string;
  isDirector: boolean;
}

// Management & Executive Team data
const teamMembers: TeamMember[] = [
  {
    name: "Mr. Jai Bajrang Mani",
    title: "Managing Director",
    image: jaybajrang_ramaishish_photo,
    description: "He has over 25 years of experience, showcasing strong leadership in managing high-profile projects and driving RBM Infracon Limited's growth. His strategic insight and focus on quality have been critical in delivering complex projects on time, within budget, and to the highest standards. He oversees the Finance, Sales, and Marketing divisions, playing a key role in shaping policy decisions and steering the company towards continued success.",
    isDirector: true
  },
  {
    name: "Mr. Aditya Mani",
    title: "Executive Director (Whole-time)",
    image: aditya_jay_photo,
    description: "A Mechanical Engineer from Jamnagar, Gujarat, with 6+ years of experience driving growth and operational excellence. He leads Mechanical and Civil operations and excels in strategic planning, team leadership, and fostering strong stakeholder relationships. Passionate about the Oil & Gas industry, he is committed to delivering innovative solutions and impactful results.",
    isDirector: true
  },
  {
    name: "Mr. Deepak Saxena",
    title: "Non-Executive Director",
    image: deepak_saxena_photo,
    description: "A vast experience of 33 years in the Procurement of Materials and Services with experience in Project, Engineering, 0&M, Contract Management for Capex and 0&M, SCM, Purchase, Inbound and outbound logistics, imports, custom clearance and freight forwarding, Import and export licensing. He has been working in O&G, Polyester, Petrochemical refinery, Energy, Pipeline.",
    isDirector: true
  },
  {
    name: "Mr. Ravi Pratap Singh",
    title: "Non-Executive Director",
    description: "An experienced professional bringing valuable insights to the board with expertise in strategic planning and corporate governance.",
    isDirector: true
  },
  {
    name: "Ms. Kriya Shah",
    title: "Independent Director",
    description: "A seasoned professional with expertise in corporate governance and regulatory compliance, bringing diverse perspective to the board.",
    isDirector: true
  },
  {
    name: "Currently Vacant Position",
    title: "Chief Executive Officer",
    description: "Position currently open for an experienced leader to drive organizational growth and strategic initiatives.",
    isDirector: false
  },
  {
    name: "Mr. Narendra Kumar Sharma",
    title: "Chief Financial Officer",
    description: "Leads financial strategy and operations, ensuring strong fiscal management and sustainable growth.",
    isDirector: false
  },
  {
    name: "Mr. Pankaj Kumar",
    title: "Corporate Projects & Operations Head",
    description: "Oversees project execution and operations, ensuring efficient delivery and operational excellence.",
    isDirector: false
  },
  {
    name: "Mr. Sreejith Pillai",
    title: "Chief Commercial Officer",
    description: "Drives commercial strategy and business development initiatives across the organization.",
    isDirector: false
  },
  {
    name: "Mr. Sanjay Sharma",
    title: "Group Financial Advisor",
    description: "Provides strategic financial guidance and expertise for group-wide financial decisions.",
    isDirector: false
  },
  {
    name: "Ms. Jina K.S",
    title: "Chief Human Resources Officer",
    description: "Leads HR strategy and talent management, fostering a positive organizational culture.",
    isDirector: false
  },
  {
    name: "Mr. Ranjan Kumar",
    title: "Projects Head",
    description: "Manages project planning and execution, ensuring timely delivery and quality standards.",
    isDirector: false
  }
];

const BoardOfDirectorsSection: React.FC = () => {
  // Filter directors for special layout
  const directors = teamMembers.filter(member => member.isDirector);
  const executives = teamMembers.filter(member => !member.isDirector);

  return (
    <>
      {/* Directors with special layout */}
      {directors.map((member, index) => (
        <Box
          key={index}
          sx={{
            backgroundColor: "#f8f9fa",
            display: "flex",
            flexDirection: { xs: "column", md: index === 0 ? "row" : "row" },
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 4,
            padding: 4,
            '&:hover': {
              boxShadow: 3,
              borderColor: themeColor,
              borderWidth: 1,
              borderStyle: 'solid'
            },
            transition: 'all 0.3s ease-in-out'
          }}
        >
          {member.image ? (
            <CardMedia
              component="img"
              sx={{ 
                width: { xs: "50%", md: index === 0 ? "30%" : "20%" }, 
                height: "auto",
                borderRadius: 2
              }}
              image={member.image}
              alt={member.name}
            />
          ) : (
            <Avatar 
              sx={{ 
                width: { xs: 120, md: 160 }, 
                height: { xs: 120, md: 160 }, 
                bgcolor: themeColor,
                fontSize: '2.5rem',
                mb: { xs: 2, md: 0 }
              }}
            >
              {member.name.split(' ').map(n => n[0]).join('')}
            </Avatar>
          )}
          <Box sx={{ padding: 2, maxWidth: 600, ml: { md: 4 } }}>
            <Typography
              variant="h4"
              sx={{ 
                fontWeight: "bold", 
                color: themeColor,
                mb: 1,
                fontSize: { xs: '1.5rem', md: index === 0 ? '2rem' : '1.75rem' }
              }}
            >
              {member.name}
            </Typography>
            <Typography
              variant="h6"
              sx={{ 
                color: themeColor,
                mb: 2,
                fontSize: { xs: '1.1rem', md: index === 0 ? '1.3rem' : '1.2rem' }
              }}
            >
              {member.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{ 
                color: '#333',
                lineHeight: 1.8,
                fontSize: { xs: '1rem', sm: '1.1rem' }
              }}
            >
              {member.description}
            </Typography>
          </Box>
        </Box>
      ))}

      {/* Executive Team Grid */}
      <Grid container spacing={3}>
        {executives.map((member, index) => (
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
                    {member.name.includes("Vacant") ? "?" : member.name.split(' ').map(n => n[0]).join('')}
                  </Avatar>
                  <Typography
                    variant="h6"
                    sx={{ 
                      fontWeight: "bold",
                      color: themeColor,
                      mb: 1
                    }}
                  >
                    {member.name}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ 
                      color: themeColor,
                      mb: 2,
                      fontStyle: 'italic'
                    }}
                  >
                    {member.title}
                  </Typography>
                  {member.description && (
                    <Typography
                      variant="body2"
                      sx={{ 
                        color: '#333',
                        lineHeight: 1.6
                      }}
                    >
                      {member.description}
                    </Typography>
                  )}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default BoardOfDirectorsSection;
