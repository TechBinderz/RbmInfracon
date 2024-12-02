import React, { useState, useEffect, useCallback, useRef } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import slider1 from "../../assets/features/home/slider/slider (1).jpeg";
import slider2 from "../../assets/features/home/slider/slider (2).jpeg";
import slider3 from "../../assets/features/home/slider/slider (3).jpeg";
import slider4 from "../../assets/features/home/slider/slider (4).jpeg";
import slider5 from "../../assets/features/home/slider/slider (5).jpeg";
import slider6 from "../../assets/features/home/slider/slider (6).jpeg";
import slider7 from "../../assets/features/home/slider/slider (7).jpeg";

interface Item {
  text: string;
  image: string;
}

const items: Item[] = [
  {
    text: "",
    image: slider1,
  },
  {
    text: "",
    image: slider2,
  },
  {
    text: "",
    image: slider3,
  },
  {
    text: "",
    image: slider4,
  },
  {
    text: "",
    image: slider5,
  },
  {
    text: "",
    image: slider6,
  },
  {
    text: "",
    image: slider7,
  },
];

const TextImageCarousel: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [autoSlide, setAutoSlide] = useState<boolean>(true);
  const [touchStartX, setTouchStartX] = useState<number>(0);
  const [touchEndX, setTouchEndX] = useState<number>(0);

  const maxSteps = items.length;
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleNext = useCallback(() => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  }, [maxSteps]);

  const handleBack = useCallback(() => {
    setActiveStep(
      (prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps
    );
  }, [maxSteps]);

  const handleDotClick = useCallback((index: number) => {
    setActiveStep(index);
  }, []);

  const stopAutoSlide = useCallback(() => {
    setAutoSlide(false);
  }, []);

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(event.touches[0].clientX);
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    setTouchEndX(event.changedTouches[0].clientX);
    const touchDiff = touchStartX - touchEndX;

    if (Math.abs(touchDiff) > 50) {
      // Minimum swipe distance
      if (touchDiff > 0) {
        handleNext();
      } else {
        handleBack();
      }
      stopAutoSlide();
    }
  };

  useEffect(() => {
    if (autoSlide) {
      const interval = setInterval(() => {
        handleNext();
      }, 5000); // Change slide every 5 seconds

      return () => clearInterval(interval); // Clean up interval on component unmount
    }
  }, [autoSlide, handleNext]);

  return (
    <Box
      ref={containerRef}
      sx={{ paddingTop: 8, width: "100%", flexGrow: 1, position: "relative" }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <Box
        sx={{
          width: "100%",
          height: "40vh",
          backgroundImage: `url("${items[activeStep].image}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
          position: "relative",
        }}
      >
        <Typography variant="h4" component="div">
          {items[activeStep].text}
        </Typography>

        <IconButton
          onClick={() => {
            handleBack();
            stopAutoSlide();
          }}
          sx={{
            position: "absolute",
            left: 0,
            top: "50%",
            transform: "translateY(-50%)",
            color: "white",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.7)",
            },
          }}
          aria-label="Previous Slide"
        >
          <KeyboardArrowLeft />
        </IconButton>

        <IconButton
          onClick={() => {
            handleNext();
            stopAutoSlide();
          }}
          sx={{
            position: "absolute",
            right: 0,
            top: "50%",
            transform: "translateY(-50%)",
            color: "white",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.7)",
            },
          }}
          aria-label="Next Slide"
        >
          <KeyboardArrowRight />
        </IconButton>

        <Box
          sx={{
            position: "absolute",
            bottom: 16,
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          {items.map((_, index) => (
            <Box
              key={index}
              sx={{
                width: 8,
                height: 8,
                margin: "0 4px",
                backgroundColor:
                  activeStep === index ? "primary.main" : "grey.400",
                borderRadius: "50%",
                cursor: "pointer", // Add cursor pointer to indicate it's clickable
                "&:hover": {
                  backgroundColor: "primary.main", // Optional: highlight dot on hover
                },
              }}
              onClick={() => {
                handleDotClick(index);
                stopAutoSlide();
              }} // Handle dot click
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default TextImageCarousel;
