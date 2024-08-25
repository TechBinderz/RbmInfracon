import React, { useState, useEffect, useCallback } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

interface Item {
  text: string;
  image: string;
}

const items: Item[] = [
  {
    text: 'First Slide Text',
    image: 'https://via.placeholder.com/800x400/FF5733/FFFFFF?text=',
  },
  {
    text: 'Second Slide Text',
    image: 'https://via.placeholder.com/800x400/33FF57/FFFFFF?text=',
  },
  {
    text: 'Third Slide Text',
    image: 'https://via.placeholder.com/800x400/3357FF/FFFFFF?text=',
  },
];

const TextImageCarousel: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [autoSlide, setAutoSlide] = useState<boolean>(true);
  const maxSteps = items.length;

  const handleNext = useCallback(() => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  }, [maxSteps]);

  const handleBack = useCallback(() => {
    setActiveStep((prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps);
  }, [maxSteps]);

  const handleDotClick = useCallback((index: number) => {
    setActiveStep(index);
  }, []);

  const stopAutoSlide = useCallback(() => {
    setAutoSlide(false);
  }, []);

  useEffect(() => {
    if (autoSlide) {
      const interval = setInterval(() => {
        handleNext();
      }, 5000); // Change slide every 5 seconds

      return () => clearInterval(interval); // Clean up interval on component unmount
    }
  }, [autoSlide, handleNext]);

  return (
    <Box sx={{ width: '100%', flexGrow: 1, position: 'relative' }}>
      <Box
        sx={{
          width: '100%',
          height: '80vh',
          backgroundImage: `url(${items[activeStep].image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <Typography variant="h4" component="div">
          {items[activeStep].text}
        </Typography>

        {activeStep > 0 && (
          <IconButton
            onClick={() => {
              handleBack();
              stopAutoSlide();
            }}
            sx={{
              position: 'absolute',
              left: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'white',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
              },
            }}
            aria-label="Previous Slide"
          >
            <KeyboardArrowLeft />
          </IconButton>
        )}

        {activeStep < maxSteps - 1 && (
          <IconButton
            onClick={() => {
              handleNext();
              stopAutoSlide();
            }}
            sx={{
              position: 'absolute',
              right: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'white',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
              },
            }}
            aria-label="Next Slide"
          >
            <KeyboardArrowRight />
          </IconButton>
        )}

        <Box sx={{ position: 'absolute', bottom: 16, display: 'flex', justifyContent: 'center', width: '100%' }}>
          {items.map((_, index) => (
            <Box
              key={index}
              sx={{
                width: 8,
                height: 8,
                margin: '0 4px',
                backgroundColor: activeStep === index ? 'primary.main' : 'grey.400',
                borderRadius: '50%',
                cursor: 'pointer', // Add cursor pointer to indicate it's clickable
                '&:hover': {
                  backgroundColor: 'primary.main', // Optional: highlight dot on hover
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
