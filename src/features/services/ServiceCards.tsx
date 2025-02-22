import { Box, Container, Typography, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { themeColor } from "../../features/common/common";

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

const ServiceCard: React.FC<ServiceCardProps> = ({ cardData }) => {
  const sliderRef = useRef<Slider>(null);
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    beforeChange: (newIndex: number) => {
      setCurrentSlide(newIndex);
    },
  };

  const getPreviousSlide = () => {
    const prevIndex =
      currentSlide === 0 ? cardData.length - 1 : currentSlide - 1;
    return cardData[prevIndex];
  };

  const getNextSlide = () => {
    const nextIndex =
      currentSlide === cardData.length - 1 ? 0 : currentSlide + 1;
    return cardData[nextIndex];
  };

  return (
    <Container
      maxWidth="lg"
      sx={{ padding: { xs: "20px", sm: "40px" }, position: "relative" }}
    >
      <Slider ref={sliderRef} {...settings}>
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
                  padding: { xs: 0, sm: 2 },
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
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    variant="h4"
                    component="h2"
                    gutterBottom
                    sx={{
                      fontWeight: "bold",
                      fontSize: { xs: "28px", md: "38px" },
                      mb: 2,
                      color: themeColor,
                    }}
                  >
                    {card.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: { xs: "18px", md: "22px" },
                      lineHeight: 1.6,
                      color: "#000000",
                      mb: 3,
                    }}
                  >
                    {card.description}
                  </Typography>
                  <Typography
                    variant="button"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "#000000",
                      cursor: "pointer",
                      fontSize: { xs: "16px", md: "18px" },
                      fontWeight: 500,
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    Read more
                    <ArrowForwardIosIcon sx={{ fontSize: 14, ml: 1 }} />
                  </Typography>
                </Box>
              </Box>
            </Link>
          </div>
        ))}
      </Slider>

      {/* Bottom Navigation Bar */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "stretch",
          mt: 4,
          borderTop: "1px solid rgba(0, 0, 0, 0.1)",
          pt: 3,
          pb: 2,
          px: { xs: 1, sm: 4 },
          gap: { xs: 1, sm: 2 },
          flexWrap: "nowrap",
        }}
      >
        {/* Previous Slide */}
        <Box
          onClick={() => sliderRef.current?.slickPrev()}
          sx={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            opacity: 0.8,
            transition: "all 0.3s ease",
            flex: 1,
            minWidth: 0, // Allow box to shrink below its content size
            backgroundColor: "rgba(57, 172, 75, 0.05)",
            padding: { xs: 1, sm: 2 },
            borderRadius: 2,
            "&:hover": {
              opacity: 1,
              backgroundColor: "rgba(57, 172, 75, 0.1)",
              transform: "translateX(-5px)",
            },
          }}
        >
          <IconButton
            size="small"
            sx={{
              color: themeColor,
              flexShrink: 0,
              "&:hover": { backgroundColor: "rgba(57, 172, 75, 0.15)" },
            }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>
          <Box sx={{ ml: { xs: 1, sm: 2 }, minWidth: 0 }}>
            <Typography
              variant="caption"
              sx={{
                color: themeColor,
                fontWeight: 500,
                fontSize: { xs: "12px", sm: "14px", md: "16px" },
                display: "block",
              }}
            >
              PREVIOUS
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: "bold",
                lineHeight: 1.2,
                fontSize: { xs: "14px", sm: "18px", md: "24px" },
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {getPreviousSlide().title}
            </Typography>
          </Box>
        </Box>

        {/* Next Slide */}
        <Box
          onClick={() => sliderRef.current?.slickNext()}
          sx={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            opacity: 0.8,
            transition: "all 0.3s ease",
            flex: 1,
            minWidth: 0, // Allow box to shrink below its content size
            justifyContent: "flex-end",
            backgroundColor: "rgba(57, 172, 75, 0.05)",
            padding: { xs: 1, sm: 2 },
            borderRadius: 2,
            "&:hover": {
              opacity: 1,
              backgroundColor: "rgba(57, 172, 75, 0.1)",
              transform: "translateX(5px)",
            },
          }}
        >
          <Box sx={{ mr: { xs: 1, sm: 2 }, textAlign: "right", minWidth: 0 }}>
            <Typography
              variant="caption"
              sx={{
                color: themeColor,
                fontWeight: 500,
                fontSize: { xs: "12px", sm: "14px", md: "16px" },
                display: "block",
              }}
            >
              NEXT
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: "bold",
                lineHeight: 1.2,
                fontSize: { xs: "14px", sm: "18px", md: "24px" },
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {getNextSlide().title}
            </Typography>
          </Box>
          <IconButton
            size="small"
            sx={{
              color: themeColor,
              flexShrink: 0,
              "&:hover": { backgroundColor: "rgba(57, 172, 75, 0.15)" },
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </Box>
    </Container>
  );
};

export default ServiceCard;
