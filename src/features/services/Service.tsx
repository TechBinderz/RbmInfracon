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
  Grid,
  Container,
} from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import services_image from "../../assets/features/services/services.jpg"
import piping_service_1 from "../../assets/features/services/piping_service (1).jpg";
import plate_work_1 from "../../assets/features/services/plate_work (1).jpg";
import drilling_service_1 from "../../assets/features/services/drilling_service (1).jpg";
import heater_operation_1 from "../../assets/features/services/heater_operation (1).jpg";
import steel_work_1 from "../../assets/features/services/steel_work (1).jpg";
import rail_wagon_1 from "../../assets/features/services/rail_wagon (1).jpg";

// Define the card data
const cardData = [
  {
    pathName: "pipingServices",
    image: piping_service_1,
    title: "Piping Services",
    description:
      "Comprehensive solutions for various piping systems, including installation, maintenance, and optimization to ensure functionality and safety.",
  },
  {
    pathName: "plateWork",
    image: plate_work_1,
    title: "Plate Work",
    description:
      "Expert services for fabricating and erecting platework structures such as ducts, hoppers, and chutes, focusing on precision and quality.",
  },
  {
    pathName: "heaterOperation",
    image: heater_operation_1,
    title: "Heater Operation",
    description:
      "Top-notch Operation and Maintenance (O&M) services for heating systems, ensuring optimal performance and comfort in various settings.",
  },
  {
    pathName: "drillingAndOMServices",
    image: drilling_service_1,
    title: "Drilling and O&M Services of Crewed Wells",
    description:
      "Specialized drilling and Operations and Maintenance (O&M) services for crewed wells, emphasizing reliability, safety, and efficiency.",
  },
  {
    pathName: "structuralSteelWork",
    image: steel_work_1,
    title: "Structural Steel Work",
    description:
      "Expertise in civil construction, maintenance, and erection of structural steel for various applications, including coke plant maintenance and industrial projects.",
  },
  {
    pathName: "railWagonLoadingServices",
    image: rail_wagon_1,
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
    <>
      <PageTitle
        imageUrl={services_image}
        tileContent="Services"
      />
      <Container maxWidth="lg" sx={{ padding: { xs: "20px", sm: "40px" } }}>
        <Grid container spacing={2} sx={{ justifyContent: "center" }}>
          {filteredCardData.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card className="card-shadow-1" sx={{ padding: "5px" }}>
                <Link
                  to={`/services/${card.pathName}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <CardMedia
                    component="img"
                    height="240"
                    image={card.image}
                    alt={card.title}
                  />
                  <CardContent sx={{ height: "120px" }}>
                    <Typography variant="h6" component="div">
                      {card.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {card.description}
                    </Typography>
                  </CardContent>
                </Link>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
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
