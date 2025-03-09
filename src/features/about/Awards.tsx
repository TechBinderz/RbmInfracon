import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  useTheme,
  useMediaQuery,
  Pagination as MuiPagination,
  CardMedia,
} from '@mui/material';
import PageTitle from '../../features/common/PageTitleDiv';
import BANNER_IMAGE from "../../assets/features/Awards/awards_background.jpg";
import CustomSwiper from "../common/CustomSwiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { themeColor } from "../common/common";

// Manual imports for award images
import IMG_8377 from '../../assets/features/Awards/IMG_8377.jpg';
import IMG_8378 from '../../assets/features/Awards/IMG_8378.jpg';
import IMG_8379 from '../../assets/features/Awards/IMG_8379.jpg';
import IMG_8380 from '../../assets/features/Awards/IMG_8380.jpg';
import IMG_8386 from '../../assets/features/Awards/IMG_8386.jpg';
import IMG_8387 from '../../assets/features/Awards/IMG_8387.jpg';
import IMG_8388 from '../../assets/features/Awards/IMG_8388.jpg';
import IMG_8400 from '../../assets/features/Awards/IMG_8400.jpg';
import IMG_8403 from '../../assets/features/Awards/IMG_8403.jpg';
import IMG_8405 from '../../assets/features/Awards/IMG_8405.jpg';
import IMG_8406 from '../../assets/features/Awards/IMG_8406.jpg';
import IMG_8409 from '../../assets/features/Awards/IMG_8409.jpg';
import IMG_8381 from '../../assets/features/Awards/IMG_8381.jpg';
import IMG_8382 from '../../assets/features/Awards/IMG_8382.jpg';
import IMG_8383 from '../../assets/features/Awards/IMG_8383.jpg';
import IMG_8385 from '../../assets/features/Awards/IMG_8385.jpg';
import IMG_8389 from '../../assets/features/Awards/IMG_8389.jpg';
import IMG_8390 from '../../assets/features/Awards/IMG_8390.jpg';
import IMG_8391 from '../../assets/features/Awards/IMG_8391.jpg';
import IMG_8392 from '../../assets/features/Awards/IMG_8392.jpg';
import IMG_8393 from '../../assets/features/Awards/IMG_8393.jpg';
import IMG_8394 from '../../assets/features/Awards/IMG_8394.jpg';
import IMG_8395 from '../../assets/features/Awards/IMG_8395.jpg';
import IMG_8396 from '../../assets/features/Awards/IMG_8396.jpg';
import IMG_8397 from '../../assets/features/Awards/IMG_8397.jpg';
import IMG_8399 from '../../assets/features/Awards/IMG_8399.jpg';
import IMG_8401 from '../../assets/features/Awards/IMG_8401.jpg';
import IMG_8404 from '../../assets/features/Awards/IMG_8404.jpg';
import IMG_8407 from '../../assets/features/Awards/IMG_8407.jpg';
import IMG_8408 from '../../assets/features/Awards/IMG_8408.jpg';

// Replace importAllImages function with static awards data
const awardsData = [
  {
    "id": 377,
    "title": "Yara India Safety Award",
    "description": "Excellence in Construction Quality - Recognized for maintaining exceptional construction standards and quality control",
    "year": 2018,
    "img": IMG_8377
  },
  {
    "id": 378,
    "title": "Best Contractor Award",
    "description": "Safety Performance Award - Outstanding commitment to workplace safety and accident prevention",
    "year": 2019,
    "img": IMG_8378
  },
  {
    "id": 379,
    "title": "Highest Nearmiss Reporter",
    "description": "Green Building Initiative Award - Leadership in sustainable construction practices and eco-friendly building solutions",
    "year": 2019,
    "img": IMG_8379
  },
  {
    "id": 380,
    "title": "Best Contractors Safety Performance",
    "description": "Project Completion Excellence - Timely delivery of large-scale infrastructure projects",
    "year": 2021,
    "img": IMG_8380
  },
  {
    "id": 386,
    "title": "Best Contractor Award",
    "description": "Quality Management Excellence - Superior quality management systems and processes",
    "year": 2015,
    "img": IMG_8386
  },
  {
    "id": 387,
    "title": "Highest Sub-Standard Condition Reporter",
    "description": "Best Commercial Project - Outstanding achievement in commercial construction",
    "year": 2019,
    "img": IMG_8387
  },
  {
    "id": 388,
    "title": "Suraksha Sahyogi Puraskar",
    "description": "Sustainable Development Award - Leadership in sustainable construction practices",
    "year": 2016,
    "img": IMG_8388
  },
  {
    "id": 400,
    "title": "Best Contractor Award",
    "description": "Project Delivery Award - Timely completion of complex construction projects",
    "year": 2017,
    "img": IMG_8400
  },
  {
    "id": 403,
    "title": "Best Contractor Award",
    "description": "Environmental Compliance Award - Excellence in environmental regulations compliance",
    "year": 2018,
    "img": IMG_8403
  },
  {
    "id": 405,
    "title": "Best Contractors Safety Performance",
    "description": "Industry Leadership Award - Pioneering advancements in construction industry",
    "year": 2019,
    "img": IMG_8405
  },
  {
    "id": 406,
    "title": "Best Contractor Award",
    "description": "Best Industrial Project - Excellence in industrial construction",
    "year": 2016,
    "img": IMG_8406
  },
  {
    "id": 409,
    "title": "Safe Contractor of the Year",
    "description": "Project Excellence Award - Overall excellence in project execution and delivery",
    "year": 2017,
    "img": IMG_8409
  }
]

const allAwards = [
  {"img": IMG_8377, "title": "IMG_8377"},
  {"img": IMG_8378, "title": "IMG_8378"},
  {"img": IMG_8379, "title": "IMG_8379"},
  {"img": IMG_8380, "title": "IMG_8380"},
  {"img": IMG_8381, "title": "IMG_8381"},
  {"img": IMG_8382, "title": "IMG_8382"},
  {"img": IMG_8383, "title": "IMG_8383"},
  {"img": IMG_8385, "title": "IMG_8385"},
  {"img": IMG_8386, "title": "IMG_8386"},
  {"img": IMG_8387, "title": "IMG_8387"},
  {"img": IMG_8388, "title": "IMG_8388"},
  {"img": IMG_8389, "title": "IMG_8389"},
  {"img": IMG_8390, "title": "IMG_8390"},
  {"img": IMG_8391, "title": "IMG_8391"},
  {"img": IMG_8392, "title": "IMG_8392"},
  {"img": IMG_8393, "title": "IMG_8393"},
  {"img": IMG_8394, "title": "IMG_8394"},
  {"img": IMG_8395, "title": "IMG_8395"},
  {"img": IMG_8396, "title": "IMG_8396"},
  {"img": IMG_8397, "title": "IMG_8397"},
  {"img": IMG_8399, "title": "IMG_8399"},
  {"img": IMG_8400, "title": "IMG_8400"},
  {"img": IMG_8401, "title": "IMG_8401"},
  {"img": IMG_8403, "title": "IMG_8403"},
  {"img": IMG_8404, "title": "IMG_8404"},
  {"img": IMG_8405, "title": "IMG_8405"},
  {"img": IMG_8406, "title": "IMG_8406"},
  {"img": IMG_8407, "title": "IMG_8407"},
  {"img": IMG_8408, "title": "IMG_8408"},
  {"img": IMG_8409, "title": "IMG_8409"}
];

const Awards: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

  const awards = awardsData.map((award) => ({
    ...award,
    organization: "RBM Infracon"
  })).sort((a, b) => b.year - a.year);

  const currentAwards = awards.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <PageTitle
        imageUrl={BANNER_IMAGE}
        tileContent="Awards & Recognition"
      />
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Typography
          variant="h3"
          align="center"
          sx={{
            color: '#000000',
            mb: 3,
            fontWeight: 'bold',
            fontSize: { xs: "32px", md: "42px" }
          }}
        >
          Our Awards 
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{
            color: '#000000',
            mb: 6,
            maxWidth: '1000px',
            mx: 'auto',
            px: 2,
            fontSize: { xs: "18px", md: "22px" },
            lineHeight: 1.6
          }}
        >
          Our commitment to excellence has been recognized through numerous prestigious awards,
          reflecting our dedication to safety, quality, and innovation in every project.
        </Typography>

        <Grid container spacing={4} sx={{ mb: 4 }}>
          {currentAwards.map((award, index) => (
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
                <CardMedia
                  component="img"
                  height="300"
                  image={award.img}
                  alt={award.title}
                  sx={{ 
                    objectFit: 'contain',
                    bgcolor: '#f5f5f5'
                  }}
                />
                <CardContent sx={{ flexGrow: 1, pt: 3 }}>
                  <Typography
                    variant="h5"
                    component="h2"
                    gutterBottom
                    sx={{
                      fontWeight: "bold",
                      fontSize: { xs: "18px", md: "22px" },
                      color: '#000000',
                      mb: 2
                    }}
                  >
                    {award.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    gutterBottom
                    sx={{
                      fontSize: { xs: "16px", md: "18px" },
                      mb: 1
                    }}
                  >
                    {award.organization} - {award.year}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6 }}>
          <MuiPagination
            count={Math.ceil(awards.length / itemsPerPage)}
            page={page}
            onChange={handlePageChange}
            size={isMobile ? "small" : "large"}
            sx={{ 
              '& .MuiPaginationItem-root': {
                color: themeColor
              },
              '& .Mui-selected': {
                backgroundColor: `${themeColor} !important`,
                color: '#fff'
              }
            }}
          />
        </Box>

        <Typography
          variant="h3"
          align="center"
          sx={{
            color: '#000000',
            mb: 4,
            fontWeight: 'bold',
            fontSize: { xs: "32px", md: "42px" }
          }}
        >
          Award Gallery
        </Typography>

        <Box sx={{ position: "relative", mx: { xs: -2, md: -4 }, mb: 6 }}>
          <CustomSwiper
            items={allAwards.map((item) => ({
              id: item.title,
              content: (
                <Box
                  sx={{
                    position: "relative",
                    height: "400px",
                    width: "100%",
                    borderRadius: 2,
                    overflow: "hidden",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                    bgcolor: '#f5f5f5',
                    "&:hover": {
                      "& img": {
                        transform: "scale(1.05)",
                      },
                    },
                  }}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      transition: "transform 0.3s ease-in-out",
                    }}
                  />
                </Box>
              ),
            }))}
            className="awards-swiper"
            slidesPerViewMap={{
              xs: 1,
              md: 2,
              lg: 3,
              xl: 4,
            }}
          />
        </Box>
      </Container>
    </>
  );
};

export default Awards;
