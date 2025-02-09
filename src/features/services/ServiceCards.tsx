import {
  Box,
  Container,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Define the structure of the card data using TypeScript
interface CardData {
  pathName: string;
  image: string;
  title: string;
  description: string;
}

interface ServiceCardProps {
  cardData: CardData[];
  showDetails: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  cardData,
  showDetails = true,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: !isMobile,
  };

  return (
    <Container maxWidth="lg" sx={{ padding: { xs: "20px", sm: "40px" } }}>
      <Slider {...settings}>
        {cardData.map((card, index) => (
          <div key={index}>
            <Link
              to={`/services/${card.pathName}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  alignItems: "center",
                  gap: 4,
                  padding: 2,
                  backgroundColor: "background.paper",
                  borderRadius: 2,
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.02)",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: { xs: "100%", md: "50%" },
                    height: { xs: "300px", md: "400px" },
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: 2,
                  }}
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    width: { xs: "100%", md: "50%" },
                    padding: 3,
                  }}
                >
                  <Typography
                    variant="h4"
                    component="h2"
                    gutterBottom
                    sx={{
                      fontWeight: "bold",
                      fontSize: { xs: "24px", md: "32px" },
                      mb: 3,
                    }}
                  >
                    {card.title}
                  </Typography>
                  {showDetails && (
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{
                        fontSize: { xs: "16px", md: "19px" },
                        lineHeight: 1.6,
                      }}
                    >
                      {card.description}
                    </Typography>
                  )}
                </Box>
              </Box>
            </Link>
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default ServiceCard;
