import React from "react";
import { useLocation, Outlet, Link } from "react-router-dom";
import PageTitle from "../common/PageTitleDiv";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { 
  Typography, 
  CardMedia, 
  CardContent, 
  Card, 
  Box, 
  Divider, 
  Stack,
  Container
} from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import services_image from "../../assets/features/services/services.jpg";
import serviceCardData from "./ServiceCardData";
import AllServiceCards from "./AllServiceCards";
import { themeColor } from "../common/common";

const Services: React.FC = () => {
  const { pathname } = useLocation();

  // Extract the current service path from the pathname
  const currentServicePath = pathname.split("/").pop();

  // Filter out the card matching the current service path
  const filteredCardData = serviceCardData.filter(
    (card) => card.pathName !== currentServicePath
  );

  const themeColorValue = "#39ac4b";

  const ServicesPage: React.FC = () => (
    <>
      <PageTitle imageUrl={services_image} tileContent="Services" />
      <AllServiceCards cardData={filteredCardData} showDetails={true} />
    </>
  );

  const MoreServices: React.FC = () => (
    <>
      <Outlet />
      <Container maxWidth="xl" sx={{ paddingBottom: { xs: 4, md: 8   } }}>
        <Box sx={{ mb: 6, textAlign: "center" }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              color: themeColorValue,
              mb: 2
            }}
          >
            More Services
          </Typography>
          <Divider sx={{ 
            width: "80px", 
            margin: "0 auto", 
            borderColor: themeColorValue,
            borderWidth: 2,
            mb: 2 
          }} />
          <Typography
            variant="subtitle1"
            color="text.secondary"
            sx={{ maxWidth: "800px", mx: "auto" }}
          >
            Discover our comprehensive range of industrial solutions
          </Typography>
        </Box>
        <Box sx={{ position: "relative", mx: { xs: -2, md: -4 } }}>
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={30}
            slidesPerView={3}
            navigation={true}
            pagination={{ 
              clickable: true,
            }}
            loop={true}
            breakpoints={{
              1536: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              900: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              0: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
            }}
            style={{ 
              padding: "20px 50px 60px",
            }}
          >
            {filteredCardData.map((card, index) => (
              <SwiperSlide key={index}>
                <Link
                  to={`/services/${card.pathName}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Card
                    sx={{
                      height: "600px",
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      transition: "all 0.3s ease-in-out",
                      borderRadius: 2,
                      overflow: "hidden",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
                        "& .MuiCardMedia-root": {
                          transform: "scale(1.05)",
                        },
                        "& .arrow-icon": {
                          transform: "translateX(4px)",
                        },
                      },
                    }}
                  >
                    <Box sx={{ 
                      position: "relative", 
                      overflow: "hidden", 
                      bgcolor: "grey.100",
                      height: "350px" 
                    }}>
                      <CardMedia
                        component="img"
                        height="350"
                        image={card.image}
                        alt={card.title}
                        sx={{
                          transition: "transform 0.3s ease-in-out",
                          objectFit: "cover",
                          width: "100%",
                          height: "100%"
                        }}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                          height: "50%",
                        }}
                      />
                    </Box>
                    <CardContent sx={{ 
                      flexGrow: 1, 
                      p: 4, 
                      height: "250px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between"
                    }}>
                      <Box>
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: 600,
                            color: themeColorValue,
                            mb: 2,
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            height: "64px",
                            lineHeight: 1.3,
                          }}
                        >
                          {card.title}
                        </Typography>
                        <Typography
                          variant="body1"
                          color="text.secondary"
                          sx={{
                            display: "-webkit-box",
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                            height: "72px",
                            lineHeight: 1.6,
                            fontSize: "1rem",
                          }}
                        >
                          {card.description}
                        </Typography>
                      </Box>
                      <Stack 
                        direction="row" 
                        alignItems="center" 
                        spacing={1}
                        sx={{
                          color: themeColorValue,
                          mt: 2,
                          "& .arrow-icon": {
                            transition: "transform 0.2s",
                            fontSize: "1.4rem",
                          },
                        }}
                      >
                        <Typography 
                          variant="button" 
                          sx={{ 
                            fontWeight: 600,
                            fontSize: "1rem",
                          }}
                        >
                          Learn More
                        </Typography>
                        <ArrowForward className="arrow-icon" />
                      </Stack>
                    </CardContent>
                  </Card>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
        <style>
          {`
            .swiper-pagination-bullet {
              width: 12px;
              height: 12px;
              background: #e0e0e0;
              opacity: 1;
              transition: all 0.3s ease;
            }
            .swiper-pagination-bullet-active {
              background: ${themeColorValue};
              transform: scale(1.2);
            }
            .swiper-button-next,
            .swiper-button-prev {
              color: ${themeColorValue};
              background: white;
              width: 48px;
              height: 48px;
              border-radius: 50%;
              box-shadow: 0 2px 10px rgba(0,0,0,0.1);
              transition: all 0.3s ease;
            }
            .swiper-button-next:after,
            .swiper-button-prev:after {
              font-size: 24px;
              font-weight: bold;
            }
            .swiper-button-next {
              right: 10px;
            }
            .swiper-button-prev {
              left: 10px;
            }
            .swiper-button-next:hover,
            .swiper-button-prev:hover {
              background: ${themeColorValue};
              color: white;
              transform: scale(1.1);
            }
            .swiper-button-disabled {
              opacity: 0.5;
              cursor: not-allowed;
            }
          `}
        </style>
      </Container>
    </>
  );

  return <>{pathname === "/services" ? <ServicesPage /> : <MoreServices />}</>;
};

export default Services;
