import React from "react";
import { useLocation, Outlet, Link } from "react-router-dom";
import PageTitle from "../common/PageTitleDiv";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Typography, CardMedia, CardContent, Card } from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import services_image from "../../assets/features/services/services.jpg";
import serviceCardData from "./ServiceCardData";
import ServiceCard from "./ServiceCards";

const Services: React.FC = () => {
  const { pathname } = useLocation();

  // Extract the current service path from the pathname
  const currentServicePath = pathname.split("/").pop();

  // Filter out the card matching the current service path
  const filteredCardData = serviceCardData.filter(
    (card) => card.pathName !== currentServicePath
  );

  const ServicesPage: React.FC = () => (
    <>
      <PageTitle imageUrl={services_image} tileContent="Services" />
      <ServiceCard cardData={filteredCardData} />
    </>
  );

  const MoreServices: React.FC = () => (
    <>
      <Outlet />
      <Typography
        variant="h3"
        gutterBottom
        mt={4}
        mb={4}
        sx={{ textAlign: "center" }}
      >
        More Services
      </Typography>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={10}
        slidesPerView={4}
        navigation={true}
        pagination={{ clickable: true }}
        loop={true}
        breakpoints={{
          1300: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 3,
          },
          600: {
            slidesPerView: 2,
          },
          480: {
            slidesPerView: 1,
          },
        }}
        style={{ padding: "10px 10px" }}
      >
        {filteredCardData.map((card, index) => (
          <SwiperSlide key={index}>
            <Link
              to={`/services/${card.pathName}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Card sx={{ padding: "5px" }}>
                <CardMedia
                  component="img"
                  height="240"
                  image={card.image}
                  alt={card.title}
                />
                <CardContent sx={{ height: "70px" }}>
                  <Typography variant="h6" component="div">
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.description}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );

  return <>{pathname === "/services" ? <ServicesPage /> : <MoreServices />}</>;
};

export default Services;
