import React, { useState } from "react";
import { useLocation, Outlet } from "react-router-dom";
import PageTitle from "../common/PageTitleDiv";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Typography, CardMedia, CardContent, Card } from "@mui/material";
import 'swiper/css'
import 'swiper/css/navigation';


// Define the card data
const cardData = [
  {
    image: "https://picsum.photos/500/300?random=1",
    title: "Piping Installation",
    description:
      "Our team performs precise installation for various piping systems, ensuring optimal functionality and safety.",
  },
  {
    image: "https://picsum.photos/500/300?random=2",
    title: "Electrical Maintenance",
    description:
      "Expert maintenance services for electrical systems to ensure safe and efficient operations.",
  },
  {
    image: "https://picsum.photos/500/300?random=3",
    title: "Tankage Work",
    description:
      "Specialized services for tankage work including installation and maintenance.",
  },
  {
    image: "https://picsum.photos/500/300?random=4",
    title: "Blasting & Painting",
    description:
      "Professional blasting and painting services for various industries.",
  },
  {
    image: "https://picsum.photos/500/300?random=5",
    title: "Blasting & Painting",
    description:
      "Professional blasting and painting services for various industries.",
  },
];

const Services: React.FC = () => {
  const { pathname } = useLocation();
  
  const ServicesPage: React.FC = () => (
    <PageTitle
      imageUrl="https://picsum.photos/1920/1080"
      tileContent="Services"
    />
  );

  const MoreServices: React.FC = () => (
    <>
      <Outlet />
      <Typography variant="h3" gutterBottom mt={4} mb={4} sx={{textAlign:"center"}}>
        More Services
      </Typography>
      <Swiper
        modules={[Navigation,Pagination,A11y]}
        spaceBetween={10}
        slidesPerView={4}
        navigation ={true}
        pagination={{ clickable: true }}
        breakpoints={{
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
        style={{ padding: '10px 10px' }}
      >
        {cardData.map((card, index) => (
          <SwiperSlide key={index}>
            <Card sx={{ padding: "5px" }}>
              <CardMedia
                component="img"
                height="240"
                image={card.image}
                alt={card.title}
              />
              <CardContent sx={{height: "70px"}}>
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