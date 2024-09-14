import React, { useRef, useState, useEffect } from "react";
import { useLocation, Outlet } from "react-router-dom";
import PageTitle from "../common/PageTitleDiv";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
} from "@mui/material";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";

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
  const carouselRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(400); // Default card width
  const [currentIndex, setCurrentIndex] = useState(0);
  const [arrowsDisabled, setArrowsDisabled] = useState(false);
  const [cardsToShow, setCardsToShow] = useState(4);

  // Function to calculate card width and number of visible cards
  const updateCardVisibility = () => {
    if (carouselRef.current) {
      const containerWidth =
        carouselRef.current.parentElement?.getBoundingClientRect().width || 0;
      const cardElement = carouselRef.current.querySelector(
        "div"
      ) as HTMLElement;
      const newCardWidth = cardElement
        ? cardElement.getBoundingClientRect().width
        : 0;
      const newCardsToShow = Math.floor(containerWidth / newCardWidth);

      setCardsToShow(newCardsToShow);

      const scrollWidth = carouselRef.current.scrollWidth;
      const visibleCardsWidth = newCardsToShow * newCardWidth;
      setArrowsDisabled(scrollWidth <= visibleCardsWidth);
    }
  };

  const scrollToCard = (index: number) => {
    if (carouselRef.current) {
      const cardElements = carouselRef.current.children;
      const cardElement = cardElements[
        index % cardElements.length
      ] as HTMLElement;
      if (cardElement) {
        carouselRef.current.scrollTo({
          left: cardElement.offsetLeft,
          behavior: "smooth",
        });
      }
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current && !arrowsDisabled) {
      setCurrentIndex((prevIndex) => {
        const newIndex = (prevIndex - 1 + cardData.length) % cardData.length;
        return newIndex;
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current && !arrowsDisabled) {
      setCurrentIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % cardData.length;
        return newIndex;
      });
    }
  };

  useEffect(() => {
    updateCardVisibility();
    window.addEventListener("resize", updateCardVisibility);
    return () => window.removeEventListener("resize", updateCardVisibility);
  }, [currentIndex]);

  useEffect(() => {
    if (carouselRef.current) {
      scrollToCard(currentIndex);
    }
  }, [currentIndex, cardWidth]);

  const ServicesPage: React.FC = () => (
    <PageTitle
      imageUrl="https://picsum.photos/1920/1080"
      tileContent="Services"
    />
  );

  const MoreServices: React.FC = () => {
    // Create a cyclic array to handle wrapping around
    const cyclicCardData = [
      ...cardData.slice(-cardsToShow),
      ...cardData,
      ...cardData.slice(0, cardsToShow),
    ];

    return (
      <>
        <Outlet />
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          mt={4}
          mb={4}
        >
          <Typography variant="h3" gutterBottom>
            More Services
          </Typography>
          <Box
            display="flex"
            alignItems="center"
            width="100%"
            overflow="hidden"
            position="relative"
          >
            <IconButton
              onClick={scrollLeft}
              aria-label="scroll left"
              disabled={arrowsDisabled}
              sx={{
                position: "absolute",
                left: 0,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 1,
              }}
            >
              <ArrowBackIosNew />
            </IconButton>
            <Box
              ref={carouselRef}
              display="flex"
              justifyContent="center"
              overflow="hidden"
              width="100%"
              sx={{ scrollBehavior: "smooth" }}
            >
              {cyclicCardData
                .slice(currentIndex, currentIndex + cardsToShow)
                .map((card, index) => (
                  <Card
                    key={index}
                    sx={{
                      minWidth: cardWidth,
                      maxWidth: cardWidth,
                      mx: 1,
                      padding: "5px",
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="140"
                      image={card.image}
                      alt={card.title}
                    />
                    <CardContent>
                      <Typography variant="h6" component="div">
                        {card.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {card.description}
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
            </Box>
            <IconButton
              onClick={scrollRight}
              aria-label="scroll right"
              disabled={arrowsDisabled}
              sx={{
                position: "absolute",
                right: 0,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 1,
              }}
            >
              <ArrowForwardIos />
            </IconButton>
          </Box>
        </Box>
      </>
    );
  };

  return <>{pathname === "/services" ? <ServicesPage /> : <MoreServices />}</>;
};

export default Services;
