import React from "react";
import { useLocation, Outlet, Link } from "react-router-dom";
import PageTitle from "../common/PageTitleDiv";
import CustomSwiper from "../common/CustomSwiper";
import {
  Typography,
  CardMedia,
  CardContent,
  Card,
  Box,
  Divider,
  Stack,
  Container,
} from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
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

  const themeColorValue = themeColor;

  const ServicesPage: React.FC = () => (
    <>
      <PageTitle imageUrl={services_image} tileContent="Services" />
      <AllServiceCards cardData={filteredCardData} showDetails={true} />
    </>
  );

  const MoreServices: React.FC = () => (
    <>
      <Outlet />
      <Container maxWidth="xl" sx={{ paddingBottom: { xs: 4, md: 8 }, overflow: 'hidden' }}>
        <Box sx={{ mb: 6, textAlign: "center" }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              color: themeColorValue,
              mb: 2,
            }}
          >
            More Services
          </Typography>
          <Divider
            sx={{
              width: "80px",
              margin: "0 auto",
              borderColor: themeColorValue,
              borderWidth: 2,
              mb: 2,
            }}
          />
          <Typography
            variant="subtitle1"
            sx={{
              maxWidth: "800px",
              mx: "auto",
              mb: 6,
            }}
          >
            Discover our comprehensive range of industrial solutions
          </Typography>
        </Box>
        <Box sx={{ position: "relative", width: "100%" }}>
          <CustomSwiper
            items={filteredCardData.map((card) => ({
              id: card.pathName,
              content: (
                <Link
                  to={`/services/${card.pathName}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      borderRadius: 2,
                      overflow: "hidden",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                      transform: "translateY(0) scale(1)",
                      transformOrigin: "center",
                      "&:hover": {
                        transform: "translateY(-8px) scale(1.02)",
                        boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
                        "& .MuiCardMedia-root": {
                          transform: "scale(1.05)",
                        },
                      },
                    }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        overflow: "hidden",
                        bgcolor: "grey.100",
                        height: { xs: "300px", md: "350px" },
                        flexShrink: 0,
                      }}
                    >
                      <CardMedia
                        component="img"
                        image={card.image}
                        alt={`${card.title} service illustration`}
                        sx={{
                          transition:
                            "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                          objectFit: "cover",
                          width: "100%",
                          height: "100%",
                        }}
                      />
                      <Box
                        className="card-gradient"
                        role="presentation"
                        sx={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          background:
                            "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                          height: "50%",
                          transition:
                            "opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                          opacity: 0.6,
                        }}
                      />
                    </Box>
                    <CardContent
                      sx={{
                        p: { xs: 3, md: 4 },
                        height: { xs: "220px", md: "250px" },
                        flexDirection: "column",
                        gap: 2,
                      }}
                    >
                      <Typography
                        variant="h5"
                        component="h3"
                        sx={{
                          height: { xs: "64px", md: "74px" },
                          fontWeight: 600,
                          color: themeColorValue,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          lineHeight: 1.2,
                        }}
                      >
                        {card.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        color="black"
                        sx={{
                          height: { xs: "110px", md: "128px" },
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          display: "-webkit-box",
                          WebkitLineClamp: 4,
                          WebkitBoxOrient: "vertical",
                          lineHeight: 1.5,
                        }}
                      >
                        {card.description}
                      </Typography>
                      <Stack
                        direction="row"
                        alignItems="center"
                        spacing={1}
                        sx={{
                          color: themeColorValue,
                          "& .arrow-icon": {
                            transition: "transform 0.2s",
                          },
                          "&:hover .arrow-icon": {
                            transform: "translateX(4px)",
                          },
                        }}
                      >
                        <Typography
                          variant="button"
                          sx={{
                            fontWeight: 600,
                          }}
                        >
                          Learn More
                        </Typography>
                        <ArrowForward className="arrow-icon" />
                      </Stack>
                    </CardContent>
                  </Card>
                </Link>
              ),
            }))}
            className="services-swiper"
            slidesPerViewMap={{
              xs: 1,
              md: 2,
              lg: 3,
            }}
          />
        </Box>
      </Container>
    </>
  );

  return <>{pathname === "/services" ? <ServicesPage /> : <MoreServices />}</>;
};

export default Services;
