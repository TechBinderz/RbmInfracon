import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Chip,
  // useTheme,
  // useMediaQuery,
} from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PageTitle from '../../features/common/PageTitleDiv';
import BANNER_IMAGE from "../../assets/features/home/pexels-tomfisk-10407691.jpg";

const Awards: React.FC = () => {
  // const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const awards = [
    {
      title: "Excellence in Safety",
      year: "2023",
      organization: "National Safety Council",
      description: "Recognized for maintaining exceptional safety standards and zero incidents record in major industrial projects.",
      image: "/path/to/safety-award.jpg" // Add actual image path
    },
    {
      title: "Best Infrastructure Company",
      year: "2022",
      organization: "Infrastructure Development Council",
      description: "Awarded for outstanding contribution to infrastructure development and innovative construction practices.",
      image: "/path/to/infra-award.jpg" // Add actual image path
    },
    {
      title: "Quality Excellence Award",
      year: "2022",
      organization: "Quality Council of India",
      description: "Recognized for maintaining highest quality standards in construction and infrastructure projects.",
      image: "/path/to/quality-award.jpg" // Add actual image path
    }
  ];

  return (
    <>
      <PageTitle
        imageUrl={BANNER_IMAGE}
        tileContent="Awards & Recognition"
      />
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Typography
          variant="h6"
          align="center"
          sx={{
            color: '#666',
            mb: 6,
            maxWidth: '800px',
            mx: 'auto',
            px: 2,
            fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
            lineHeight: 1.6
          }}
        >
          Our commitment to excellence has been recognized by various prestigious organizations.
          These awards reflect our dedication to quality, safety, and innovation in every project we undertake.
        </Typography>

        <Grid container spacing={4}>
          {awards.map((award, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 6,
                  },
                  borderRadius: 2,
                  overflow: 'hidden',
                  boxShadow: 3,
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    backgroundColor: '#39ac4b',
                    pt: 2,
                    pb: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <EmojiEventsIcon sx={{ fontSize: 40, color: '#fff' }} />
                </Box>
                <CardContent sx={{ flexGrow: 1, pt: 3 }}>
                  <Box sx={{ mb: 2 }}>
                    <Chip
                      label={award.year}
                      sx={{
                        backgroundColor: '#e8f5e9',
                        color: '#39ac4b',
                        fontWeight: 'bold',
                        mb: 1
                      }}
                    />
                  </Box>
                  <Typography
                    variant="h5"
                    component="h2"
                    gutterBottom
                    sx={{
                      fontWeight: 'bold',
                      color: '#333',
                      fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.6rem' }
                    }}
                  >
                    {award.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: '#39ac4b',
                      mb: 2,
                      fontWeight: 'medium',
                      fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' }
                    }}
                  >
                    {award.organization}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#666',
                      lineHeight: 1.6,
                      fontSize: { xs: '0.875rem', sm: '0.9rem', md: '1rem' }
                    }}
                  >
                    {award.description}
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

export default Awards;
