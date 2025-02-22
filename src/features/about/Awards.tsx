import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  ImageList,
  ImageListItem,
  useTheme,
  useMediaQuery,
  Pagination,
  CardMedia,
  IconButton,
} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PageTitle from '../../features/common/PageTitleDiv';
import BANNER_IMAGE from "../../assets/features/home/pexels-tomfisk-10407691.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Award descriptions
const awardDescriptions = {
  377: "Excellence in Construction Quality - Recognized for maintaining exceptional construction standards and quality control",
  378: "Safety Performance Award - Outstanding commitment to workplace safety and accident prevention",
  379: "Green Building Initiative Award - Leadership in sustainable construction practices and eco-friendly building solutions",
  380: "Project Completion Excellence - Timely delivery of large-scale infrastructure projects",
  381: "Innovation in Construction Technology - Implementation of cutting-edge construction methodologies",
  382: "Client Satisfaction Award - Recognition for exceptional client service and project delivery",
  383: "Best Infrastructure Development - Excellence in infrastructure project execution",
  385: "Environmental Stewardship Award - Commitment to environmental conservation in construction",
  386: "Quality Management Excellence - Superior quality management systems and processes",
  387: "Best Commercial Project - Outstanding achievement in commercial construction",
  388: "Sustainable Development Award - Leadership in sustainable construction practices",
  389: "Construction Safety Innovation - Innovative approaches to construction site safety",
  390: "Project Management Excellence - Exceptional project planning and execution",
  391: "Corporate Social Responsibility - Contributing to community development through construction",
  392: "Best Residential Project - Excellence in residential construction development",
  393: "Infrastructure Innovation Award - Innovative solutions in infrastructure development",
  394: "Construction Leadership Award - Outstanding leadership in the construction industry",
  395: "Design Excellence Award - Superior architectural and construction design",
  396: "Urban Development Achievement - Excellence in urban construction projects",
  397: "Construction Best Practices - Setting industry standards in construction",
  399: "Workplace Safety Excellence - Maintaining highest safety standards on construction sites",
  400: "Project Delivery Award - Timely completion of complex construction projects",
  401: "Construction Quality Leadership - Setting benchmarks in construction quality",
  403: "Environmental Compliance Award - Excellence in environmental regulations compliance",
  404: "Customer Excellence Award - Superior customer satisfaction in construction projects",
  405: "Industry Leadership Award - Pioneering advancements in construction industry",
  406: "Best Industrial Project - Excellence in industrial construction",
  407: "Safety Performance Recognition - Outstanding safety record in construction",
  408: "Sustainable Construction Award - Leadership in eco-friendly construction practices",
  409: "Project Excellence Award - Overall excellence in project execution and delivery"
};

// Manual imports for award images
import IMG_8377 from '../../assets/features/Awards/IMG_8377.jpg';
import IMG_8378 from '../../assets/features/Awards/IMG_8378.jpg';
import IMG_8379 from '../../assets/features/Awards/IMG_8379.jpg';
import IMG_8380 from '../../assets/features/Awards/IMG_8380.jpg';
import IMG_8381 from '../../assets/features/Awards/IMG_8381.jpg';
import IMG_8382 from '../../assets/features/Awards/IMG_8382.jpg';
import IMG_8383 from '../../assets/features/Awards/IMG_8383.jpg';
import IMG_8385 from '../../assets/features/Awards/IMG_8385.jpg';
import IMG_8386 from '../../assets/features/Awards/IMG_8386.jpg';
import IMG_8387 from '../../assets/features/Awards/IMG_8387.jpg';
import IMG_8388 from '../../assets/features/Awards/IMG_8388.jpg';
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
import IMG_8400 from '../../assets/features/Awards/IMG_8400.jpg';
import IMG_8401 from '../../assets/features/Awards/IMG_8401.jpg';
import IMG_8403 from '../../assets/features/Awards/IMG_8403.jpg';
import IMG_8404 from '../../assets/features/Awards/IMG_8404.jpg';
import IMG_8405 from '../../assets/features/Awards/IMG_8405.jpg';
import IMG_8406 from '../../assets/features/Awards/IMG_8406.jpg';
import IMG_8407 from '../../assets/features/Awards/IMG_8407.jpg';
import IMG_8408 from '../../assets/features/Awards/IMG_8408.jpg';
import IMG_8409 from '../../assets/features/Awards/IMG_8409.jpg';

// Award years mapping
const awardYears = {
  377: 2018, 378: 2019, 379: 2019,
  380: 2021, 381: 2020, 382: 2020,
  383: 2020, 385: 2021, 386: 2015,
  387: 2019, 388: 2016, 389: 2022,
  390: 2022, 391: 2022, 392: 2022,
  393: 2022, 394: 2023, 395: 2023,
  396: 2023, 397: 2023, 399: 2023,
  400: 2017, 401: 2023, 403: 2018,
  404: 2024, 405: 2019, 406: 2016,
  407: 2024, 408: 2024, 409: 2017
};

// Replace importAllImages function with static awards data
const awardsData = [
  { img: IMG_8377, title: 'Yara India Safety Award', description: awardDescriptions[377], year: awardYears[377] },
  { img: IMG_8378, title: 'Best Contractor Award', description: awardDescriptions[378], year: awardYears[378] },
  { img: IMG_8379, title: 'Highest Nearmiss Reporter', description: awardDescriptions[379], year: awardYears[379] },
  { img: IMG_8380, title: 'Best Contractors Safety Performance', description: awardDescriptions[380], year: awardYears[380] },
  // { img: IMG_8381, title: 'Innovation in Construction Technology', description: awardDescriptions[381], year: awardYears[381] },
  // { img: IMG_8382, title: 'Client Satisfaction Award', description: awardDescriptions[382], year: awardYears[382] },
  // { img: IMG_8383, title: 'Best Infrastructure Development', description: awardDescriptions[383], year: awardYears[383] },
  // { img: IMG_8385, title: 'Environmental Stewardship Award', description: awardDescriptions[385], year: awardYears[385] },
  { img: IMG_8386, title: 'Best Contractor Award', description: awardDescriptions[386], year: awardYears[386] },
  { img: IMG_8387, title: 'Highest Sub-Standard Condition Reporter', description: awardDescriptions[387], year: awardYears[387] },
  { img: IMG_8388, title: 'Suraksha Sahyogi Puraskar', description: awardDescriptions[388], year: awardYears[388] },
  // { img: IMG_8389, title: 'Construction Safety Innovation', description: awardDescriptions[389], year: awardYears[389] },
  // { img: IMG_8390, title: 'Project Management Excellence', description: awardDescriptions[390], year: awardYears[390] },
  // { img: IMG_8391, title: 'Corporate Social Responsibility', description: awardDescriptions[391], year: awardYears[391] },
  // { img: IMG_8392, title: 'Best Residential Project', description: awardDescriptions[392], year: awardYears[392] },
  // { img: IMG_8393, title: 'Infrastructure Innovation Award', description: awardDescriptions[393], year: awardYears[393] },
  // { img: IMG_8394, title: 'Construction Leadership Award', description: awardDescriptions[394], year: awardYears[394] },
  // { img: IMG_8395, title: 'Design Excellence Award', description: awardDescriptions[395], year: awardYears[395] },
  // { img: IMG_8396, title: 'Urban Development Achievement', description: awardDescriptions[396], year: awardYears[396] },
  // { img: IMG_8397, title: 'Construction Best Practices', description: awardDescriptions[397], year: awardYears[397] },
  // { img: IMG_8399, title: 'Workplace Safety Excellence', description: awardDescriptions[399], year: awardYears[399] },
  { img: IMG_8400, title: 'Best Contractor Award', description: awardDescriptions[400], year: awardYears[400] },
  // { img: IMG_8401, title: 'Construction Quality Leadership', description: awardDescriptions[401], year: awardYears[401] },
  { img: IMG_8403, title: 'Best Contractor Award', description: awardDescriptions[403], year: awardYears[403] },
  // { img: IMG_8404, title: 'Customer Excellence Award', description: awardDescriptions[404], year: awardYears[404] },
  { img: IMG_8405, title: 'Best Contractors Safety Performance', description: awardDescriptions[405], year: awardYears[405] },
  { img: IMG_8406, title: 'Best Contractor Award', description: awardDescriptions[406], year: awardYears[406] },
  // { img: IMG_8407, title: 'Safety Performance Recognition', description: awardDescriptions[407], year: awardYears[407] },
  // { img: IMG_8408, title: 'Sustainable Construction Award', description: awardDescriptions[408], year: awardYears[408] },
  { img: IMG_8409, title: 'Safe Contractor of the Year', description: awardDescriptions[409], year: awardYears[409] }
];

const Awards: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;
  const sliderRef = React.useRef<Slider>(null);

  const awards = awardsData.map((award) => ({
    ...award,
    organization: "RBM Infracon"
  }));

  const currentAwards = awards.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const handlePrevClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
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
          <Pagination
            count={Math.ceil(awards.length / itemsPerPage)}
            page={page}
            onChange={handlePageChange}
            size={isMobile ? "small" : "large"}
            color="primary"
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

        <Box sx={{ position: 'relative', mb: 6 }}>
          <IconButton
            onClick={handlePrevClick}
            sx={{
              position: 'absolute',
              left: -20,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 1,
              bgcolor: 'rgba(255, 255, 255, 0.8)',
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.9)',
              }
            }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>
          <IconButton
            onClick={handleNextClick}
            sx={{
              position: 'absolute',
              right: -20,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 1,
              bgcolor: 'rgba(255, 255, 255, 0.8)',
              '&:hover': {
                bgcolor: 'rgba(255, 255, 255, 0.9)',
              }
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
          <Slider ref={sliderRef} {...settings}>
            {awardsData.map((item, index) => (
              <Box
                key={index}
                sx={{
                  p: 1,
                  height: '400px',
                }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    borderRadius: '12px',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                    backgroundColor: '#f5f5f5'
                  }}
                />
              </Box>
            ))}
          </Slider>
        </Box>
      </Container>
    </>
  );
};

export default Awards;
