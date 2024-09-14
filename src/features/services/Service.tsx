import React from "react";
import { useLocation, Outlet } from "react-router-dom";
import PageTitle from "../common/PageTitleDiv";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Typography, CardMedia, CardContent, Card } from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";

// Define the card data
const cardData = [
  {
    pathName: "pipingServices",
    image: "https://picsum.photos/500/300?random=6",
    title: "Piping Services",
    description:
      "Comprehensive solutions for various piping systems, including installation, maintenance, and optimization to ensure functionality and safety.",
  },
  {
    pathName: "plateWork",
    image: "https://picsum.photos/500/300?random=7",
    title: "Plate Work",
    description:
      "Expert services for fabricating and erecting platework structures such as ducts, hoppers, and chutes, focusing on precision and quality.",
  },
  {
    pathName: "heaterOperation",
    image: "https://picsum.photos/500/300?random=8",
    title: "Heater Operation",
    description:
      "Top-notch Operation and Maintenance (O&M) services for heating systems, ensuring optimal performance and comfort in various settings.",
  },
  {
    pathName: "drillingAndOMServices",
    image: "https://picsum.photos/500/300?random=9",
    title: "Drilling and O&M Services of Crewed Wells",
    description:
      "Specialized drilling and Operations and Maintenance (O&M) services for crewed wells, emphasizing reliability, safety, and efficiency.",
  },
  {
    pathName: "structuralSteelWork",
    image: "https://picsum.photos/500/300?random=10",
    title: "Structural Steel Work",
    description:
      "Expertise in civil construction, maintenance, and erection of structural steel for various applications, including coke plant maintenance and industrial projects.",
  },
  {
    pathName: "plateWorkFabricationErection",
    image: "https://picsum.photos/500/300?random=11",
    title: "Plate Work Fabrication and Erection",
    description:
      "Comprehensive services for the fabrication, supply, and erection of platework structures, with a focus on superior quality and performance.",
  },
  {
    pathName: "railWagonLoadingServices",
    image: "https://picsum.photos/500/300?random=12",
    title: "Rail Wagon Loading Services",
    description:
      "Efficient and reliable rail wagon loading services to streamline logistics and transportation, maximizing loading capacity and ensuring safety compliance.",
  },
];

const Services: React.FC = () => {
  const { pathname } = useLocation();

  // Extract the current service path from the pathname
  const currentServicePath = pathname.split("/").pop();

  // Filter out the card matching the current service path
  const filteredCardData = cardData.filter(
    (card) => card.pathName !== currentServicePath
  );

  const ServicesPage: React.FC = () => (
    <PageTitle
      imageUrl="https://picsum.photos/1920/1080"
      tileContent="Services"
    />
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
          1300:{
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
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );

  return <>{pathname === "/services" ? <ServicesPage /> : <MoreServices />}</>;
};

export default Services;
