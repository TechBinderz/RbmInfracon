import {
  Box,
  Container,
  Typography,
  useTheme,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

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
    beforeChange: (oldIndex: number, newIndex: number) => {
      setCurrentSlide(newIndex);
    },
  };

  const getPreviousSlide = () => {
    const prevIndex = currentSlide === 0 ? cardData.length - 1 : currentSlide - 1;
    return cardData[prevIndex];
  };

  const getNextSlide = () => {
    const nextIndex = currentSlide === cardData.length - 1 ? 0 : currentSlide + 1;
    return cardData[nextIndex];
  };

  return (
    <Container maxWidth="lg" sx={{ padding: { xs: "20px", sm: "40px" }, position: 'relative' }}>
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

      {/* Bottom Navigation Bar */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mt: 4,
          borderTop: '1px solid rgba(0, 0, 0, 0.1)',
          pt: 2,
        }}
      >
        <Box
          onClick={() => sliderRef.current?.slickPrev()}
          sx={{
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            opacity: 0.7,
            transition: 'opacity 0.3s',
            '&:hover': { opacity: 1 },
          }}
        >
          <IconButton size="small">
            <ArrowBackIosNewIcon />
          </IconButton>
          <Box sx={{ ml: 1 }}>
            <Typography variant="caption" color="text.secondary">
              PREVIOUS
            </Typography>
            <Typography variant="subtitle2" noWrap sx={{ maxWidth: 150 }}>
              {getPreviousSlide().title}
            </Typography>
          </Box>
        </Box>

        <Box
          onClick={() => sliderRef.current?.slickNext()}
          sx={{
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            opacity: 0.7,
            transition: 'opacity 0.3s',
            '&:hover': { opacity: 1 },
          }}
        >
          <Box sx={{ mr: 1, textAlign: 'right' }}>
            <Typography variant="caption" color="text.secondary">
              NEXT
            </Typography>
            <Typography variant="subtitle2" noWrap sx={{ maxWidth: 150 }}>
              {getNextSlide().title}
            </Typography>
          </Box>
          <IconButton size="small">
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </Box>
    </Container>
  );
};

export default ServiceCard;
