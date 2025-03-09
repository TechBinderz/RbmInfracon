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
            sx={{ 
              maxWidth: "800px", 
              mx: "auto",
              color: "black",
              fontSize: { xs: "1.1rem", md: "1.25rem" }
            }}
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
            className="services-swiper"
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
                        <Box sx={{ mb: 2 }}>
                          <Typography
                            variant="h5"
                            sx={{
                              fontWeight: 600,
                              color: themeColorValue,
                              mb: 2,
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              display: "-webkit-box",
                              WebkitBoxOrient: "vertical",
                              WebkitLineClamp: 2,
                              lineHeight: 1.3,
                            }}
                          >
                            {card.title}
                          </Typography>
                        </Box>
                        <Typography
                          variant="body1"
                          sx={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            display: "-webkit-box",
                            WebkitBoxOrient: "vertical",
                            WebkitLineClamp: 3,
                            lineHeight: 1.6,
                            fontSize: { xs: "1.1rem", md: "1.2rem" },
                            color: "black",
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
            .services-swiper .swiper-button-next,
            .services-swiper .swiper-button-prev {
              width: 40px;
              height: 40px;
              background-color: white;
              border-radius: 50%;
              box-shadow: 0 2px 10px rgba(0,0,0,0.1);
              transition: all 0.3s ease;
            }

            .services-swiper .swiper-button-next:hover,
            .services-swiper .swiper-button-prev:hover {
              background-color: ${themeColorValue};
            }

            .services-swiper .swiper-button-next::after,
            .services-swiper .swiper-button-prev::after {
              font-size: 20px;
              color: ${themeColorValue};
              transition: color 0.3s ease;
            }

            .services-swiper .swiper-button-next:hover::after,
            .services-swiper .swiper-button-prev:hover::after {
              color: white;
            }

            .services-swiper .swiper-button-next {
              right: 10px;
            }

            .services-swiper .swiper-button-prev {
              left: 10px;
            }

            .services-swiper .swiper-button-disabled {
              opacity: 0.5;
              cursor: not-allowed;
            }

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
          `}
        </style>
      </Container>
    </>
  );

  return <>{pathname === "/services" ? <ServicesPage /> : <MoreServices />}</>;
};

export default Services;
